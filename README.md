# Domain Powers - Official Corporate Website

[![Industrial Engineering](https://img.shields.io/badge/Engineering-Industrial%20Power-E31E24)](https://domainpowers.in)
[![Tech Stack](https://img.shields.io/badge/Stack-React%20%2B%20Vite%20%2B%20Framer%20Motion-black)](https://react.dev)

A high-fidelity, professional web application for **Domain Powers**, India's leading manufacturer of Automatic Power Factor Correction (APFC) panels. This site is engineered to reflect the company’s 25+ years of technical excellence in LT/HT power distribution and harmonic mitigation.

---

## 🏗️ Architecture & Core Components

- **Frontend:** React.js with Vite for lightning-fast HMR and build performance.
- **Styling:** Modular Vanilla CSS with a global industrial design system (`src/index.css`).
- **Animations:** Advanced scroll-reveal and micro-interactions powered by `framer-motion`.
- **Navigation:** Intelligent sticky Navbar with a categorized **Mega Dropdown** for 22+ technical products.

## ✨ Key Features

- **Technical Product Catalogue:** Comprehensive listing of 22 products including LT/HT APFC Panels, Hybrid SVG Systems, and Motor Control Centers.
- **Industrial Design System:** A precise Red (#E31E24), Carbon Black (#0F0F0F), and Pure White palette.
- **Technical Excellence Section:** High-contrast display of core engineering capabilities (Thyristor switching, RS-485/GSM monitoring).
- **Responsive Engineering:** Fully optimized for Mobile, Tablet, and Desktop with specific industrial grid layouts.
- **Interactive Stats:** Real-time animated counters for "Years of Trust" and "Successful Projects".

## 🚀 Technical Implementation Details

### Product Navigation System
The site uses a hash-scrolling mechanism (`useLocation` + `useEffect`) to allow seamless navigation from the Navbar dropdown directly to specific technical product entries on the `/products` page.

### Motion Design
- **Hero Reveal:** Staggered text animations for a premium first impression.
- **Scanline Effect:** A subtle CSS-based technical overlay on the Hero section for an "engineering dashboard" feel.
- **Viewport Triggers:** Component-level `whileInView` animations for scroll-reveal performance.

## 📁 Project Structure

```bash
src/
├── assets/          # Official branding (Logo, Product Renders)
├── components/      # Modular UI components (Navbar, Stats, TechSpecs)
├── data/            # Centralized product and service definitions
├── pages/           # High-fidelity page layouts (Home, Products, Services)
└── App.jsx          # Routing and layout wrapper
```

## 🛠️ Development

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Local Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

---

*Precision-engineered by Domain Powers Technical Team.*
