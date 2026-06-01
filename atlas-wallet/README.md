# Atlas WALLET

## Private Institutional Interface for Green Mining Processing and Governance

---

### Description

Atlas WALLET is a private, multilingual institutional interface presenting the Atlas Green Processing Facility, the Atlas Mining SARL portfolio, the HYRION governance layer, and the Akanil company. It provides qualified institutional partners with a structured, controlled pathway to project documentation and private data room access.

### Purpose

To present a green mining processing project, a production-linked offtake model, and a controlled NDA-based data room access process to qualified institutional users — including institutional investors, development finance institutions, mining partners, engineering consultants, and financial institutions.

---

### What This Platform Is

- A private institutional interface for a green mining processing project
- A presentation layer for the Atlas Green Processing Facility
- A controlled access gateway for qualified institutional partners
- A governance presentation interface for the HYRION methodology
- A data room access facilitation tool (MVP simulation, no backend)
- A multilingual (English, Arabic, French) institutional communication interface

### What This Platform Is Not

- Not a public investment website
- Not a crypto wallet or token platform
- Not a securities exchange or trading dashboard
- Not a crowdfunding portal or public fundraising tool
- Not a blockchain platform
- Not a mining license sales platform
- Not a retail financial product

---

### Technology Stack

| Tool | Purpose |
|------|---------|
| Vite | Build tooling and dev server |
| React 18 | UI framework |
| TypeScript | Type safety |
| Tailwind CSS 3 | Utility-first styling |
| React Router v6 | Client-side routing |

No backend. No database. No paid APIs. No authentication system.

---

### Project Structure

```
atlas-wallet/
├── README.md
├── package.json
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── public/
│   └── docs/
│       ├── atlas-wallet-executive-summary.pdf  (placeholder)
│       └── atlas-wallet-nda-template.pdf       (placeholder)
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── context/
    │   └── LanguageContext.tsx
    ├── data/
    │   ├── translations.ts
    │   └── projectMetrics.ts
    ├── components/
    │   ├── Navbar.tsx
    │   ├── LanguageSwitcher.tsx
    │   ├── MetricCard.tsx
    │   ├── DisclaimerBox.tsx
    │   ├── ProcessFlow.tsx
    │   ├── GovernanceCard.tsx
    │   ├── AccessCodeGenerator.tsx
    │   └── Footer.tsx
    └── pages/
        ├── Home.tsx
        ├── ProcessingFacility.tsx
        ├── HyrionGovernance.tsx
        ├── Akanil.tsx
        ├── AtlasMining.tsx
        ├── OfftakeModel.tsx
        ├── PrivateDataRoom.tsx
        └── Contact.tsx
```

---

### Installation

```bash
# Clone the repository
git clone https://github.com/moenabil112/atlas-portfolio.git
cd atlas-portfolio/atlas-wallet

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Build

```bash
npm run build
```

Output is generated in the `dist/` directory.

### Preview Build

```bash
npm run preview
```

---

### Deployment

#### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Set framework preset to **Vite**
4. Set root directory to `atlas-wallet`
5. Deploy

#### GitHub Pages

1. Install the GitHub Pages plugin: `npm install -D gh-pages`
2. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
3. Set `base` in `vite.config.ts` to your repo path
4. Run `npm run build && npm run deploy`

---

### Multilingual Support

| Language | Code | Direction |
|----------|------|-----------|
| English  | `en` | LTR |
| Arabic   | `ar` | RTL |
| French   | `fr` | LTR |

All translations are managed in `src/data/translations.ts`.

---

### Document Placeholders

Replace the following placeholder files with actual documents before deployment:

- `public/docs/atlas-wallet-executive-summary.pdf` — Executive Summary
- `public/docs/atlas-wallet-nda-template.pdf` — NDA Template

---

### Legal Disclaimer

Atlas WALLET is an institutional MVP interface. All figures are indicative MVP targets and remain subject to technical, geological, legal, financial, and engineering validation. The interface does not constitute an investment offer, public solicitation, financial advice, securities platform, crypto wallet, token platform, crowdfunding portal, or mining title sale.

Figures shown are indicative MVP targets for structuring and presentation purposes only. They remain subject to technical validation, geological review, legal review, engineering studies, and independent due diligence.

---

*Developed and maintained by Akanil — Moroccan IP company and digital transformation actor.*
