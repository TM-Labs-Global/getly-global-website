import fs from "fs";
import path from "path";

const BANNED_TERMS = [
  { term: "send", regex: /\bsend\b/i },
  { term: "transfer", regex: /\btransfer\b/i },
  { term: "bank-grade", regex: /\bbank-grade\b/i },
  { term: "usdc", regex: /\busdc\b/i },
  { term: "stablecoin", regex: /\bstablecoin\b/i },
];

const WARN_TERMS = [
  { term: "account", regex: /\baccount\b/i }
];

// Folders and files to scan
const SCAN_TARGETS = ["app", "features", "shared", "public/llms.txt"];
const VALID_EXTENSIONS = [".ts", ".tsx", ".json", ".txt", ".md", ".mdx"];

// Load allowlist
const allowlistPath = path.join(__dirname, "brand-lint-allowlist.json");
let allowlist: string[] = [];
if (fs.existsSync(allowlistPath)) {
  try {
    const allowlistData = JSON.parse(fs.readFileSync(allowlistPath, "utf-8"));
    allowlist = allowlistData.allowedTerms || [];
  } catch (e) {
    console.warn("Could not parse brand-lint-allowlist.json");
  }
}

function shouldScanFile(filePath: string): boolean {
  const ext = path.extname(filePath);
  return VALID_EXTENSIONS.includes(ext) && !filePath.includes("node_modules") && !filePath.includes(".next");
}

function scanFile(filePath: string): { errors: string[]; warnings: string[] } {
  const errors: string[] = [];
  const warnings: string[] = [];
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");

  lines.forEach((line, index) => {
    // Check if line contains any allowed exceptions
    const isAllowlisted = allowlist.some((allowed) => line.includes(allowed));
    if (isAllowlisted) return;

    // Check banned terms
    BANNED_TERMS.forEach(({ term, regex }) => {
      if (regex.test(line)) {
        errors.push(`Line ${index + 1}: Found forbidden term "${term}" -> "${line.trim()}"`);
      }
    });

    // Check warn terms
    WARN_TERMS.forEach(({ term, regex }) => {
      if (regex.test(line)) {
        warnings.push(`Line ${index + 1}: Found warn term "${term}" -> "${line.trim()}"`);
      }
    });
  });

  return { errors, warnings };
}

function scanDirectory(dirOrFile: string): { totalErrors: number; totalWarnings: number } {
  let totalErrors = 0;
  let totalWarnings = 0;

  const fullPath = path.resolve(dirOrFile);
  if (!fs.existsSync(fullPath)) return { totalErrors: 0, totalWarnings: 0 };

  const stat = fs.statSync(fullPath);
  if (stat.isFile()) {
    if (shouldScanFile(fullPath)) {
      const { errors, warnings } = scanFile(fullPath);
      if (errors.length > 0 || warnings.length > 0) {
        console.log(`\n📄 ${path.relative(process.cwd(), fullPath)}`);
        errors.forEach((err) => console.error(`  ❌ ${err}`));
        warnings.forEach((warn) => console.warn(`  ⚠️  ${warn}`));
      }
      totalErrors += errors.length;
      totalWarnings += warnings.length;
    }
  } else if (stat.isDirectory()) {
    const entries = fs.readdirSync(fullPath);
    entries.forEach((entry) => {
      const res = scanDirectory(path.join(fullPath, entry));
      totalErrors += res.totalErrors;
      totalWarnings += res.totalWarnings;
    });
  }

  return { totalErrors, totalWarnings };
}

console.log("🔍 Running Getly Brand & Regulatory Compliance Check...");
let globalErrors = 0;
let globalWarnings = 0;

SCAN_TARGETS.forEach((target) => {
  const { totalErrors, totalWarnings } = scanDirectory(target);
  globalErrors += totalErrors;
  globalWarnings += totalWarnings;
});

console.log("\n----------------------------------------");
console.log(`Compliance Check Complete: ${globalErrors} error(s), ${globalWarnings} warning(s).`);

if (globalErrors > 0) {
  console.error("❌ BRAND COMPLIANCE FAILED! Fix all banned term errors before committing or building.");
  process.exit(1);
} else {
  console.log("✅ Brand Compliance Checks PASSED!");
  process.exit(0);
}
