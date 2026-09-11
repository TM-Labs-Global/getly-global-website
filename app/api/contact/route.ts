import { NextResponse } from "next/server";
import { Resend } from "resend";
import fs from "fs/promises";
import path from "path";

const DEPARTMENT_LABELS: Record<string, string> = {
  support: "Customer Support",
  partnership: "Business & Partnerships",
  press: "Press & Media",
  compliance: "Compliance & Legal",
  other: "General Inquiry",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, department, subject, message, botField } = body;

    // 1. Anti-Spam Honeypot check: silently drop bots
    if (botField) {
      return NextResponse.json({ success: true, message: "Inquiry received." });
    }

    // 2. Validate input fields
    const cleanName = typeof fullName === "string" ? fullName.trim() : "";
    const cleanEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
    const cleanMessage = typeof message === "string" ? message.trim() : "";
    const cleanSubject = typeof subject === "string" ? subject.trim() : "";
    const deptKey = typeof department === "string" && DEPARTMENT_LABELS[department] ? department : "support";
    const deptLabel = DEPARTMENT_LABELS[deptKey];

    if (!cleanName || cleanName.length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid full name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!cleanMessage || cleanMessage.length < 5) {
      return NextResponse.json(
        { error: "Please provide a message with at least 5 characters." },
        { status: 400 }
      );
    }

    // 3. Data Preservation Layer — Local Backup Log
    // Ensures leads and inquiries are never lost even during external network issues
    try {
      const backupDir = path.join(process.cwd(), "data/contact-submissions");
      await fs.mkdir(backupDir, { recursive: true });
      const record = {
        timestamp: new Date().toISOString(),
        fullName: cleanName,
        email: cleanEmail,
        department: deptKey,
        departmentLabel: deptLabel,
        subject: cleanSubject || "(No subject)",
        message: cleanMessage,
      };
      await fs.appendFile(
        path.join(backupDir, "submissions.log"),
        JSON.stringify(record) + "\n",
        "utf-8"
      );
    } catch (logError) {
      console.error("[Contact API] Local backup failed:", logError);
    }

    // 4. Dispatch Email via Resend
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      const rawRecipient = process.env.CONTACT_RECIPIENT_EMAIL || "info@getly.qa";
      const recipientEmail = rawRecipient.replace(/^["']|["']$/g, "").trim();

      const rawFrom = process.env.RESEND_FROM_EMAIL || "Getly Inquiries <info@getly.qa>";
      const fromEmail = rawFrom.replace(/^["']|["']$/g, "").trim();

      const emailSubject = cleanSubject
        ? `[Getly ${deptLabel}] ${cleanSubject}`
        : `[Getly ${deptLabel}] New Inquiry from ${cleanName}`;

      await resend.emails.send({
        from: fromEmail,
        to: recipientEmail,
        replyTo: cleanEmail,
        subject: emailSubject,
        html: `
          <!DOCTYPE html>
          <html>
            <head><meta charset="utf-8"></head>
            <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f6f8fa; padding: 24px; margin: 0;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    <table width="600" border="0" cellspacing="0" cellpadding="0" style="background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(7, 21, 61, 0.08); border: 1px solid #e5e7eb;">
                      <!-- Header Banner -->
                      <tr>
                        <td style="background-color: #07153d; padding: 32px; text-align: left;">
                          <div style="font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                            getly<span style="color: #0069fe;">.</span>
                          </div>
                          <p style="color: rgba(255, 255, 255, 0.7); margin: 6px 0 0 0; font-size: 13px;">
                            New Website Contact Submission &bull; ${new Date().toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" })}
                          </p>
                        </td>
                      </tr>

                      <!-- Details Body -->
                      <tr>
                        <td style="padding: 32px;">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                              <td style="padding-bottom: 20px; border-bottom: 1px solid #f1f5f9;">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                  <tr>
                                    <td>
                                      <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b;">
                                        Sender
                                      </p>
                                      <p style="margin: 0; font-size: 17px; font-weight: 700; color: #07153d;">
                                        ${cleanName}
                                      </p>
                                      <a href="mailto:${cleanEmail}" style="font-size: 14px; color: #0069fe; text-decoration: none;">
                                        ${cleanEmail}
                                      </a>
                                    </td>
                                    <td align="right" valign="top">
                                      <span style="display: inline-block; padding: 6px 14px; border-radius: 9999px; background-color: #f0f6ff; border: 1px solid #bfdbfe; font-size: 12px; font-weight: 700; color: #0069fe;">
                                        ${deptLabel}
                                      </span>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>

                            ${cleanSubject ? `
                            <tr>
                              <td style="padding: 18px 0; border-bottom: 1px solid #f1f5f9;">
                                <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b;">
                                  Subject
                                </p>
                                <p style="margin: 0; font-size: 15px; font-weight: 600; color: #07153d;">
                                  ${cleanSubject}
                                </p>
                              </td>
                            </tr>
                            ` : ""}

                            <tr>
                              <td style="padding-top: 20px;">
                                <p style="margin: 0 0 10px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b;">
                                  Message
                                </p>
                                <div style="background-color: #f8fafc; border-left: 4px solid #0069fe; border-radius: 8px; padding: 18px 22px;">
                                  <p style="margin: 0; font-size: 15px; color: #1e293b; line-height: 1.65; white-space: pre-wrap;">
${cleanMessage}
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>

                          <!-- Reply Button -->
                          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #f1f5f9;">
                            <a href="mailto:${cleanEmail}?subject=Re: ${encodeURIComponent(cleanSubject || "Your inquiry to Getly")}"
                               style="display: inline-block; padding: 12px 24px; background-color: #0069fe; color: #ffffff; text-decoration: none; border-radius: 9999px; font-size: 14px; font-weight: 700;">
                              Reply to ${cleanName} &rarr;
                            </a>
                          </div>
                        </td>
                      </tr>

                      <!-- Footer -->
                      <tr>
                        <td style="background-color: #f8fafc; padding: 18px 32px; border-top: 1px solid #f1f5f9; text-align: center;">
                          <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                            Getly Global Platform &bull; 36 Sokode Crescent, Wuse Zone 5, Abuja, Nigeria
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </html>
        `,
        text: `
New Website Contact Submission
==============================
From:       ${cleanName} <${cleanEmail}>
Department: ${deptLabel}
Subject:    ${cleanSubject || "(No subject)"}
Date:       ${new Date().toISOString()}

Message:
--------
${cleanMessage}

---
Reply directly to: ${cleanEmail}
        `.trim(),
      });

      // 5. Optional Audience Contact Sync
      const audienceId = process.env.RESEND_AUDIENCE_ID;
      if (audienceId) {
        try {
          const parts = cleanName.split(" ");
          await resend.contacts.create({
            audienceId,
            email: cleanEmail,
            firstName: parts[0] || cleanName,
            lastName: parts.slice(1).join(" ") || "",
            unsubscribed: false,
          });
        } catch (audErr: any) {
          console.warn("[Contact API] Audience contact sync note:", audErr?.message);
        }
      }
    } else {
      console.info("[Contact API] RESEND_API_KEY is not configured; message preserved in local backup.");
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been submitted successfully.",
    });
  } catch (error: any) {
    console.error("[Contact API] Error handling submission:", error);
    return NextResponse.json(
      { error: "Unable to submit inquiry. Please try again or email info@getly.qa." },
      { status: 500 }
    );
  }
}
