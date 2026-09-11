"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2, ArrowRight, Mail, HelpCircle } from "lucide-react";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [botField, setBotField] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    department: "support",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          botField,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit inquiry. Please try again.");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again or email info@getly.qa.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      department: "support",
      subject: "",
      message: "",
    });
    setBotField("");
    setErrorMessage("");
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[var(--line)] shadow-soft text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-flat border border-emerald-100">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2 max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-[var(--navy)]">{t("successTitle")}</h3>
          <p className="text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed">
            {t("successMessage")}
          </p>
        </div>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-3 rounded-full bg-[var(--canvas)] hover:bg-[var(--line)] text-xs sm:text-sm font-bold text-[var(--navy)] transition-colors"
          >
            {t("submitAnother")}
          </button>
          <a
            href="mailto:info@getly.qa"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--blue)] hover:bg-[var(--blue-600)] text-white text-xs sm:text-sm font-bold shadow-flat transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>{t("emailDirect")}</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[var(--line)] shadow-soft space-y-8">
      <div className="space-y-2">
        <h3 className="text-2xl sm:text-3xl font-bold text-[var(--navy)]">{t("title")}</h3>
        <p className="text-sm sm:text-base text-[var(--ink-soft)]">{t("subtitle")}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Anti-spam honeypot - invisible to real users */}
        <div style={{ display: "none" }} aria-hidden="true">
          <input
            type="text"
            name="botField"
            value={botField}
            onChange={(e) => setBotField(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {errorMessage && (
          <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium animate-in fade-in duration-200">
            {errorMessage}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[var(--navy)]">
              {t("fullName")} <span className="text-[var(--blue)]">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder={t("fullNamePlaceholder")}
              className="w-full px-4 py-3.5 rounded-2xl bg-[var(--canvas)] border border-[var(--line)] text-sm text-[var(--ink)] placeholder:text-[var(--mist)] focus:outline-none focus:ring-2 focus:ring-[var(--blue)]/20 focus:border-[var(--blue)] transition-all"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[var(--navy)]">
              {t("email")} <span className="text-[var(--blue)]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={t("emailPlaceholder")}
              className="w-full px-4 py-3.5 rounded-2xl bg-[var(--canvas)] border border-[var(--line)] text-sm text-[var(--ink)] placeholder:text-[var(--mist)] focus:outline-none focus:ring-2 focus:ring-[var(--blue)]/20 focus:border-[var(--blue)] transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="department" className="block text-xs font-bold uppercase tracking-wider text-[var(--navy)]">
              {t("department")}
            </label>
            <div className="relative">
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="w-full px-4 py-3.5 rounded-2xl bg-[var(--canvas)] border border-[var(--line)] text-sm text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--blue)]/20 focus:border-[var(--blue)] transition-all appearance-none cursor-pointer"
              >
                <option value="support">{t("departments.support")}</option>
                <option value="partnership">{t("departments.partnership")}</option>
                <option value="press">{t("departments.press")}</option>
                <option value="compliance">{t("departments.compliance")}</option>
                <option value="other">{t("departments.other")}</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[var(--mist)]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[var(--navy)]">
              {t("subject")} <span className="text-[var(--blue)]">*</span>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder={t("subjectPlaceholder")}
              className="w-full px-4 py-3.5 rounded-2xl bg-[var(--canvas)] border border-[var(--line)] text-sm text-[var(--ink)] placeholder:text-[var(--mist)] focus:outline-none focus:ring-2 focus:ring-[var(--blue)]/20 focus:border-[var(--blue)] transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[var(--navy)]">
            {t("message")} <span className="text-[var(--blue)]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder={t("messagePlaceholder")}
            className="w-full px-4 py-3.5 rounded-2xl bg-[var(--canvas)] border border-[var(--line)] text-sm text-[var(--ink)] placeholder:text-[var(--mist)] focus:outline-none focus:ring-2 focus:ring-[var(--blue)]/20 focus:border-[var(--blue)] transition-all resize-y"
          />
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[var(--mist)]">
            <HelpCircle className="w-4 h-4 text-[var(--blue)]" />
            <span>{t("responseTime")}</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[var(--blue)] hover:bg-[var(--blue-600)] text-white text-sm font-bold shadow-flat hover:shadow-soft transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span>{isSubmitting ? t("submitting") : t("submit")}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
