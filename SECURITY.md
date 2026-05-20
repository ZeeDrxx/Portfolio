# Security Policy

## Scope

This repository contains a **purely static** personal portfolio (HTML, CSS,
JavaScript). It has no backend, no database, no authentication, no user
input, and no server-side code. All content is public by design.

## Supported Versions

Only the latest version on the `main` branch is supported.

| Version | Supported |
| ------- | --------- |
| `main`  | ✅        |
| older   | ❌        |

## Reporting a Vulnerability

If you discover a security issue (for example: an XSS vector in the gallery
or certifications loader, a malicious file rendered unsafely, a leaked
secret, or a supply-chain concern), please report it privately.

- **Email:** zeedrxx@gmail.com
- **Subject:** `[security] portfolio — <short description>`

Please include:

1. A clear description of the issue.
2. Steps to reproduce (URL, file, or minimal proof-of-concept).
3. The impact you believe it has.
4. Optionally, a suggested fix.

**Please do not** open a public GitHub issue for security problems, and do
not disclose the issue publicly until it has been addressed.

## Response Expectations

- Acknowledgement: within **72 hours**.
- Initial assessment: within **7 days**.
- Fix or mitigation: as soon as reasonably possible, depending on severity.

You will be credited in the commit or release notes for any valid report,
unless you prefer to remain anonymous.

## Out of Scope

- Findings that require physical access to a user's device.
- Social-engineering attacks against the author.
- Issues in third-party services the site links to (LinkedIn, GitHub, etc.).
- Best-practice recommendations with no demonstrable impact.

## Hardening Notes

Because the site is static and content is author-controlled:

- Only files the author drops into `images/` and `certifications/` and lists
  in the corresponding `*.json` manifest are loaded.
- PDFs are rendered using the browser's native PDF viewer inside an
  `<iframe>` — no third-party PDF parsing library is bundled.
- No analytics, trackers, or external scripts are loaded beyond Google Fonts.

Thank you for helping keep this project safe.
