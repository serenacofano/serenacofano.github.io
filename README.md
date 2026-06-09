# serenacofano.github.io

Personal website of Serena Cofano — security researcher and PhD in software supply chain security.

Live at **[serenacofano.github.io](https://serenacofano.github.io)**

![Secret Scanning](https://github.com/serenacofano/serenacofano.github.io/actions/workflows/secret-scanning.yml/badge.svg?branch=master)
![OSV Scanner](https://github.com/serenacofano/serenacofano.github.io/actions/workflows/osv-scanner.yml/badge.svg?branch=master)
![CodeQL](https://github.com/serenacofano/serenacofano.github.io/actions/workflows/codeql.yml/badge.svg?branch=master)
![SBOM](https://github.com/serenacofano/serenacofano.github.io/actions/workflows/sbom.yml/badge.svg?branch=master)
![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/serenacofano/serenacofano.github.io/badge)

---

## What's on the site

- Bio and research focus
- Experience and education timeline
- Publications on SBOM and software supply chain security
- Conference and workshop activity
- A world map of places I've been (because why not)
- The parts of life that exist outside the lab

---

## Tech stack

- **[Astro](https://astro.build)** — static site generator, fast by default
- **TypeScript** — profile data and content types
- **Tailwind CSS** — custom color palette (mint, coral, forest, ink)
- **GitHub Pages** — hosting and deployment

---

## Security pipeline

This repo is also a practical exercise in security-by-design on a static site. Every change to `master` goes through:

| Tool | What it does |
|---|---|
| [gitleaks](https://github.com/gitleaks/gitleaks) | Secret scanning on every push |
| [osv-scanner](https://github.com/google/osv-scanner) | Dependency vulnerability check (push + weekly) |
| [Semgrep](https://semgrep.dev) | SAST on pull requests |
| [CodeQL](https://codeql.github.com) | Deep static analysis (push + weekly) |
| [cdxgen](https://github.com/CycloneDX/cdxgen) | SBOM generation in CycloneDX 1.6 format |
| [OpenSSF Scorecard](https://securityscorecards.dev) | Repository security posture scoring |
| [Dependabot](https://docs.github.com/en/code-security/dependabot) | Automated dependency update PRs |

All GitHub Actions are pinned to full commit SHAs. Branch protection requires signed commits and passing status checks before merge.

---

## License

Content © Serena Cofano. Code is MIT.
