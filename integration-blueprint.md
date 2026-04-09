# Integration Blueprint: Tridge Eye Hub + tridge.com Trust Assets
## Project: index.html Creation

**Date**: 2026-04-06  
**Integrator**: Asset Integrator Agent  
**Base File**: tridge_eye_hub.html  
**Trust Asset Source**: tridge-landing_2.html  
**Target**: index.html (unified landing page)

---

## Executive Summary

This blueprint specifies how to integrate tridge_eye_hub.html (MVP) with trust assets from tridge-landing_2.html to create a B2B-optimized landing page. The integration maintains the core headline and persona-driven structure from Eye Hub while adding trust indicators, comparison tables, and problem-solution framing from the tridge.com landing.

**Integration Principle**: USE Eye Hub as BASE + INJECT trust assets from Landing

---

## Section-by-Section Specifications

### 1. HERO SECTION

#### Source
- **Base Structure**: tridge_eye_hub.html (lines 192-290)
- **Trust Stats**: tridge-landing_2.html + CLAUDE.md master stats
- **CTA Language**: tridge-landing_2.html (direct conversion approach)

#### Layout
```
Grid: 2 columns (desktop) / 1 column (mobile)
├─ LEFT COLUMN
│  ├─ Live Indicator dot
│  ├─ Headline (h1)
│  ├─ Description (p)
│  ├─ CTAs (2 buttons)
│  └─ Stats (4 boxes inline)
└─ RIGHT COLUMN
   └─ Dashboard Mock (Eye Hub asset)
```

#### Content Specifications

**Live Indicator**
```html
<div class="hero-dot">Live Intelligence</div>
```
- Style: 6px cyan dot with blink animation
- Copy: "LIVE INTELLIGENCE"
- Font: 11px, 500 weight, 0.1em letter-spacing, uppercase

**Headline** (DO NOT CHANGE)
```html
<h1>Research Stops Short. <em>Execution</em> Is the Gap.</h1>
```
- Copy: Exact as specified in CLAUDE.md (line 13)
- `<em>` tag on "Execution" styled in var(--blue)
- Font: 72px (desktop) / 42px+ responsive
- Weight: 800
- Letter-spacing: -0.04em
- Color: white

**Description**
```html
<p class="hero-desc">12+ years of verified market data, AI-powered outreach, and human intelligence — integrated into one execution layer for global trade.</p>
```
- Copy: From Eye Hub (line 246)
- Font: 17px, 300 weight
- Color: rgba(255,255,255,.5)
- Max-width: 520px

**Primary CTA** (CHANGE from Eye Hub)
```html
<a href="https://eye.tridge.com" class="btn-primary">Get Started</a>
```
- Text: "Get Started" (not "Find Your Use Case")
- Link: https://eye.tridge.com (as per CLAUDE.md line 16)
- Style: Blue background, white text, 13px, 600 weight
- Hover: opacity .85

**Secondary CTA**
```html
<a href="#how" class="btn-ghost">See How It Works</a>
```
- Text: "See How It Works" (from Landing, clearer than "See the Value Stack")
- Link: #how (anchor to How It Works section)
- Style: White border, white text, 13px, 500 weight

**Stats Bar** (CRITICAL UPDATE)
```html
<div class="hero-stats">
  <div class="hero-stat">
    <div class="hero-stat-n"><em>1M+</em></div>
    <div class="hero-stat-l">Users</div>
  </div>
  <div class="hero-stat">
    <div class="hero-stat-n"><em>180+</em></div>
    <div class="hero-stat-l">Countries</div>
  </div>
  <div class="hero-stat">
    <div class="hero-stat-n"><em>12+</em> Years</div>
    <div class="hero-stat-l">Trade Data</div>
  </div>
  <div class="hero-stat">
    <div class="hero-stat-n"><em>350K+</em></div>
    <div class="hero-stat-l">Companies</div>
  </div>
</div>
```
- Display: 4 boxes inline, flex gap 32px
- Stats: Use CLAUDE.md master version (line 36-41)
- UPDATE: 140+ → 180+ countries, ADD 1M+ users
- Border-top: 1px solid rgba(255,255,255,.07)
- Padding-top: 24px

**Dashboard Mock** (KEEP from Eye Hub)
- Source: tridge_eye_hub.html (lines 251-289)
- Keep entire structure: mock-wrap, mock-header, mock-tabs, mock-blocks
- Tabs: Price Intel, Suppliers, Trade Flows, Outreach (keep active state on "Price Intel")
- Mock data: Keep all (Cocoa Benchmark, Indonesia 42%, AI Outreach 12 sent / 3 opened)
- TBU Placeholder: NOT needed (this is illustrative mock, not real screenshot)

#### Design Specifications
- Background: var(--black) #0A0A18
- Grid background: linear-gradient with 56px × 56px blue grid at 6% opacity
- Glow effect: Radial gradient 700px blue glow top-right
- Min-height: 85vh
- Padding: 80px 5% 60px

---

### 2. TRUST BAR

#### Source
- **Full Asset**: tridge-landing_2.html (lines 678-694)

#### Content Specification
```html
<div class="trust-bar">
  <span class="trust-label">Trusted by</span>
  <div class="trust-scroll">
    <span class="trust-item">Food &amp; Agriculture</span>
    <span class="trust-item">Global Procurement</span>
    <span class="trust-item">Trade Finance</span>
    <span class="trust-item">Supply Chain</span>
    <span class="trust-item">Export Markets</span>
    <span class="trust-item">Commodity Trading</span>
    <!-- Repeat for scrolling animation -->
    <span class="trust-item">Food &amp; Agriculture</span>
    <span class="trust-item">Global Procurement</span>
    <span class="trust-item">Trade Finance</span>
    <span class="trust-item">Supply Chain</span>
    <span class="trust-item">Export Markets</span>
    <span class="trust-item">Commodity Trading</span>
  </div>
</div>
```

#### Design Specifications
- Background: var(--black)
- Padding: 13px 0
- Label: "Trusted by" in rgba(255,255,255,0.3), 10px, 600 weight, uppercase
- Items: 11px, 600 weight, uppercase, gap 40px
- Animation: Horizontal scroll 18s linear infinite
- CSS keyframe: translateX(0) → translateX(-50%)

---

### 3. TRUSTED BY (Customer Logos)

#### Source
- **Structure**: tridge-landing_2.html (section concept)
- **Content**: TBU Placeholder per CLAUDE.md (line 32)

#### Content Specification
```html
<section class="trusted-by">
  <div class="section-eyebrow">Trusted By</div>
  <h2 class="section-title">The Global Trade Ecosystem</h2>
  <p class="section-sub">Millions of buyers and suppliers already operate on Tridge.</p>
  
  <!-- [TBU-LOGO-01] Customer logo grid
       Requirements:
       - 8-12 logos in responsive grid
       - Grayscale filter (opacity 0.5, hover 1.0)
       - Max width per logo: 140px
       - Grid: 4 columns (desktop), 2 columns (mobile)
       - Logos must be approved by marketing
       - Format: PNG or SVG, transparent background
  -->
  <div class="logo-grid">
    <div class="logo-placeholder">Logo 1</div>
    <div class="logo-placeholder">Logo 2</div>
    <div class="logo-placeholder">Logo 3</div>
    <div class="logo-placeholder">Logo 4</div>
    <div class="logo-placeholder">Logo 5</div>
    <div class="logo-placeholder">Logo 6</div>
    <div class="logo-placeholder">Logo 7</div>
    <div class="logo-placeholder">Logo 8</div>
  </div>
</section>
```

#### Design Specifications
- Background: var(--white)
- Padding: 80px 5%
- Logo placeholders: 
  - Border: 1px dashed var(--line)
  - Padding: 40px 20px
  - Text-align: center
  - Color: var(--gray)
  - Font-size: 12px
  - Aspect-ratio: 3/2

---

### 4. WHO IT'S FOR (Persona Navigation)

#### Source
- **Full Asset**: tridge_eye_hub.html (lines 292-338)

#### Content Specification
Keep exact structure with 3 persona cards:

**Card 1: Buyers / Procurement**
- Border-top: 3px var(--blue)
- Label: "BUYERS / PROCUREMENT"
- Title: "Find verified suppliers and benchmark prices in real-time."
- Body: "Access 12+ years of trade data, discover suppliers by origin and capacity, and use AI to generate market-specific outreach."
- Links (3 panels):
  - SOURCING: Market Intelligence →, Supplier Discovery →, Price Benchmarking →
  - DEVELOPMENT: Purchase Development →
  - OPERATIONS: [TBU] →

**Card 2: Exporters / Sellers**
- Border-top: 3px var(--green)
- Label: "EXPORTERS / SELLERS"
- Title: "Reach active buyers without cold calling."
- Body: "AI identifies buyers matching your product, generates personalized outreach at scale, and tracks engagement — all using Tridge's verified network."
- Links (3 panels):
  - LEAD GEN: Export Solution →
  - ANALYTICS: Market Intelligence →, Price Benchmarking →
  - [TBU]: [TBU] →

**Card 3: Operators / Traders**
- Border-top: 3px var(--yellow)
- Label: "OPERATORS / TRADERS"
- Title: "Execute more deals with less overhead."
- Body: "Real-time market monitoring, AI-driven sourcing, and execution workflows — built for fast-moving commodity markets."
- Links (3 panels):
  - MONITORING: Market Intelligence →, Price Benchmarking →
  - EXECUTION: [TBU] →, [TBU] →
  - [TBU]: [TBU] →

#### Link Destinations
- Market Intelligence → tridge_market_intelligence.html
- Supplier Discovery → tridge_supplier_discovery.html
- Price Benchmarking → tridge_price_benchmarking.html
- Purchase Development → tridge_purchase_development.html
- Export Solution → tridge_export_solution.html
- [TBU] → href="#" with pointer-events: none

#### Design Specifications
- Background: var(--bg) #F5F5FA
- Section eyebrow: "Who It's For" in var(--blue)
- Grid: 3 columns (desktop) / 2 columns (tablet) / 1 column (mobile)
- Gap: 16px
- Card background: var(--white)
- Card border: 1.5px solid var(--line)
- Card padding: 28px
- Hover: No transform (keep static, links have hover)

---

### 5. VALUE STACK

#### Source
- **Full Asset**: tridge_eye_hub.html (lines 340-373)

#### Content Specification
Section title:
```html
<div class="eyebrow">Value Stack</div>
<h2 class="section-title">Four Layers. Each Valuable Alone.<br>Compounding Together.</h2>
```

4-layer grid structure (keep exact copy from Eye Hub):

**Layer 01: Market Intelligence**
- Icon: 📊
- Title: "Market Intelligence" (color: #6B8FFF)
- Body: "12+ years of verified trade data across 6,500+ agri-food categories. Prices, trade flows, supplier networks — structured and updated daily."
- Link: "Explore Market Intelligence →"

**Layer 02: Supplier Discovery**
- Icon: 🔍
- Title: "Supplier Discovery" (color: var(--green))
- Body: "Filter by origin, capacity, product spec, and trade history. Every supplier is connected to real transactions — not scraped directories."
- Link: "Explore Supplier Discovery →"

**Layer 03: Price Benchmarking**
- Icon: 📈
- Title: "Price Benchmarking" (color: var(--cyan))
- Body: "Real-time price comparison across markets, grades, and shipment terms. Know if you're paying fair value before you negotiate."
- Link: "Explore Price Benchmarking →"

**Layer 04: AI-Powered Outreach**
- Icon: ⚡
- Title: "AI-Powered Outreach" (color: var(--yellow))
- Body: "AI generates outreach campaigns using your search criteria, sends personalized messages to verified buyers or suppliers, and tracks engagement."
- Link: "Learn About Outreach →"

**Compounding Arrow Section** (below layers)
```html
<div class="stack-arrow">
  <div class="stack-arrow-step">
    <div class="stack-arrow-label">DATA</div>
  </div>
  <div class="stack-arrow-sep">+</div>
  <div class="stack-arrow-step">
    <div class="stack-arrow-label">AI</div>
  </div>
  <div class="stack-arrow-sep">+</div>
  <div class="stack-arrow-step">
    <div class="stack-arrow-label">NETWORK</div>
  </div>
  <div class="stack-arrow-sep">=</div>
  <div class="stack-arrow-step">
    <div class="stack-arrow-label">EXECUTION</div>
  </div>
</div>
```

#### Design Specifications
- Background: var(--black)
- Section eyebrow: var(--cyan)
- Section title: white, 40px
- Grid: 4 columns (desktop) / 2 columns (tablet) / 1 column (mobile)
- Gap: 1px with rgba(255,255,255,.2) background (creates grid lines)
- Layer background: #0D0D1F
- Layer hover: rgba(255,255,255,.05)
- Layer padding: 32px 24px
- Arrow section: Blue tint background, centered, 4 steps with + = separators

---

### 6. WHY TRIDGE (Comparison Table)

#### Source
- **Comparison Table**: tridge-landing_2.html (lines 852-873)
- **Section Framing**: New (combine both files' "why us" concepts)

#### Content Specification

**Section Header**
```html
<section class="why-us">
  <div class="eyebrow">Why Tridge</div>
  <h2 class="section-title">Built on Data. <strong>Not Just AI.</strong></h2>
  <p class="section-body">Generic AI tools fail in trade because they have no real domain data. Our foundation is irreplaceable — 12+ years of native, structured trade intelligence.</p>
</section>
```

**Comparison Table** (exact from Landing)
```html
<div class="comparison">
  <table class="comparison-table">
    <thead>
      <tr>
        <th class="th-others">Generic AI</th>
        <th class="th-vs">vs</th>
        <th class="th-us">Tridge</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="td-other">General-purpose models</td>
        <td class="td-mid">→</td>
        <td class="td-our">Built for trade, trained on 12+ years of real transactions</td>
      </tr>
      <tr>
        <td class="td-other">Scraped or synthetic data</td>
        <td class="td-mid">→</td>
        <td class="td-our">Native data from 1M+ users and verified supplier network</td>
      </tr>
      <tr>
        <td class="td-other">Insights only</td>
        <td class="td-mid">→</td>
        <td class="td-our">Execution layer: AI generates outreach, connects parties, closes gaps</td>
      </tr>
      <tr>
        <td class="td-other">You customize every query</td>
        <td class="td-mid">→</td>
        <td class="td-our">Domain ontology ready: cocoa, soybeans, palm oil, 6,500+ categories</td>
      </tr>
      <tr>
        <td class="td-other">No real network</td>
        <td class="td-mid">→</td>
        <td class="td-our">Millions of active buyers and suppliers already on platform</td>
      </tr>
    </tbody>
  </table>
</div>
```

#### Design Specifications
- Background: var(--white)
- Padding: 80px 5%
- Table: Full-width, min-width 300px for mobile scroll
- Header left (Generic AI): var(--light-gray) background, gray text
- Header middle (vs): Transparent, centered, 40px width
- Header right (Tridge): var(--blue) background, white text
- Body left: var(--light-gray) background, gray text
- Body middle: Transparent, centered, arrow "→"
- Body right: rgba(23,28,253,0.05) background, black text, 400 weight
- Border-top between rows: 1px solid rgba(0,0,0,0.06)
- Mobile: Horizontal scroll with -webkit-overflow-scrolling: touch

---

### 7. EXPLORE MODULES (6 Cards)

#### Source
- **Full Asset**: tridge_eye_hub.html (lines 375-419)

#### Content Specification

**Section Header**
```html
<div class="eyebrow">Explore Modules</div>
<h2 class="section-title">Atomic & Composable</h2>
<p class="section-sub">Each module solves a real problem. Use one or combine them into a custom intelligence workflow.</p>
```

**6 Module Cards** (keep exact copy):

1. **Market Intelligence**
   - Icon: 📊
   - Title: "Market Intelligence"
   - Body: "Real-time prices, trade flows, and supply-demand analysis across 6,500+ categories."
   - Action: "Explore →"
   - Link: tridge_market_intelligence.html

2. **Supplier Discovery**
   - Icon: 🔍
   - Title: "Supplier Discovery"
   - Body: "Find verified suppliers by origin, capacity, and trade history — not scraped web data."
   - Action: "Explore →"
   - Link: tridge_supplier_discovery.html

3. **Price Benchmarking**
   - Icon: 📈
   - Title: "Price Benchmarking"
   - Body: "Compare prices across markets, grades, and terms. Know if you're paying fair value."
   - Action: "Explore →"
   - Link: tridge_price_benchmarking.html

4. **Purchase Development**
   - Icon: 🛒
   - Title: "Purchase Development"
   - Body: "Structure procurement projects, track supplier conversations, and close deals faster."
   - Action: "Explore →"
   - Link: tridge_purchase_development.html

5. **Export Solution**
   - Icon: 🌍
   - Title: "Export Solution"
   - Body: "AI-powered buyer discovery and outreach. Reach active importers at scale without cold calling."
   - Action: "Explore →"
   - Link: tridge_export_solution.html

6. **Trade Execution** [TBU]
   - Icon: ⚡
   - Title: "Trade Execution"
   - Body: "End-to-end execution layer coming soon."
   - Action: "[TBU]"
   - Link: # (no link, pointer-events: none)
   - Style: Opacity 0.4, cursor default

#### Design Specifications
- Background: var(--bg)
- Grid: 3 columns (desktop) / 2 columns (tablet) / 1 column (mobile)
- Gap: 14px
- Card background: var(--white)
- Card border: 1px solid var(--line)
- Card padding: 22px
- Top border: 2px solid var(--blue) (all cards)
- Hover: translateY(-4px), box-shadow 0 12px 32px rgba(23,28,253,.08), border-color var(--blue)
- TBU card: No hover effect

---

### 8. FORMULA SECTION

#### Source
- **Full Asset**: tridge_eye_hub.html (lines 421-456)

#### Content Specification

**Section Header**
```html
<div class="eyebrow">Formula</div>
<h2 class="section-title">Intelligence That Scales<br>to Any Market or Role</h2>
<p class="section-sub">Pick a market. Pick a module. Get relevant intelligence instantly — no custom setup required.</p>
```

**Two-Column Layout**

**Left Column: Count Boxes** (3 boxes)

1. Markets
   - Tag: "MARKETS"
   - Examples: "Cocoa, Soybeans, Palm Oil, Coffee, Corn, Wheat, Sugar, Cotton..."

2. Modules
   - Tag: "MODULES"
   - Examples: "Market Intelligence, Supplier Discovery, Price Benchmarking, Purchase Development, Export Solution..."

3. Roles
   - Tag: "ROLES"
   - Examples: "Procurement, Trading, Export Sales, Supply Chain, Risk Management..."

**Right Column: Example Use Cases** (4 examples)

```html
<div class="formula-example">
  <strong>Cocoa Buyer</strong> → Market Intelligence + Supplier Discovery → "Show me West African cocoa suppliers with verified capacity and current benchmark prices"
</div>
<div class="formula-example">
  <strong>Soybean Exporter</strong> → Export Solution → "Find active importers in Southeast Asia and generate personalized outreach"
</div>
<div class="formula-example">
  <strong>Coffee Trader</strong> → Price Benchmarking + Market Intelligence → "Compare Arabica prices across Brazil, Colombia, Vietnam with real-time differentials"
</div>
<div class="formula-example">
  <strong>Procurement Manager</strong> → Purchase Development → "Track 12 supplier conversations for palm oil tender, score responses, close faster"
</div>
```

#### Design Specifications
- Background: var(--white)
- Grid: 2 columns (desktop) / 1 column (mobile)
- Gap: 52px
- Count boxes: 
  - Grid: 3 columns (desktop) / 1 column (mobile)
  - Border-top: 3px solid (blue, green, cyan)
  - Border: 1px solid var(--line)
  - Padding: 20px
  - Tag: 10px uppercase
  - Examples: 12px gray text
- Formula examples:
  - Background: var(--bg)
  - Border: 1px solid var(--line)
  - Border-left: 3px solid var(--blue)
  - Padding: 14px 16px
  - Strong: 600 weight, black
  - Body: 300 weight, gray

---

### 9. FINAL CTA

#### Source
- **Copy**: tridge-landing_2.html (better framing)
- **Links**: CLAUDE.md (correct destinations)

#### Content Specification

```html
<section class="hub-cta" id="hub-cta">
  <div class="hub-cta-bg"></div>
  <div class="hub-cta-inner">
    <h2 class="section-title">Real Intelligence. Real Action.<br>Start Today.</h2>
    <p class="section-sub">See how Tridge transforms trade execution for buyers, exporters, and operators worldwide.</p>
    <div class="hub-cta-btns">
      <a href="contact-sales.html" class="btn-primary">Get a Demo</a>
      <a href="https://eye.tridge.com" class="btn-ghost">Explore Tridge Eye</a>
    </div>
  </div>
</section>
```

#### Link Updates
- Primary CTA: "Get a Demo" → contact-sales.html (per CLAUDE.md line 17)
- Secondary CTA: "Explore Tridge Eye" → https://eye.tridge.com (per CLAUDE.md line 16)
- DO NOT use mailto: links (broken in Eye Hub)
- DO NOT use alert() (broken in Landing)

#### Design Specifications
- Background: var(--black)
- Text-align: center
- Padding: 80px 5%
- Radial gradient overlay: Ellipse 80% 60% at top, blue 20% opacity
- Title: White, max-width 540px, centered
- Sub: rgba(255,255,255,.4), centered
- Buttons: Centered flex, gap 12px
- Primary: Blue background, white text
- Ghost: White border, white text

---

## Navigation (GNB)

#### Source
- **Structure**: tridge_eye_hub.html (lines 194-211)
- **Updates**: Add "How It Works" anchor

#### Content Specification

**Layer 1** (Main Nav)
- Logo: TRIDGE
- Separator: /
- Product: Tridge Eye
- Modules (centered): Market Intelligence, Supplier Discovery, Price Benchmarking, Purchase Development, Export Solution, Trade Execution [TBU]
- CTA: "Request Demo" → contact-sales.html

**Layer 2** (Sub Nav)
- Links: Industries, Data Coverage, Case Studies [TBU], API [TBU], Pricing [TBU]
- Active state: None (for landing page)

#### Design Specifications
- Position: Fixed top
- Background: rgba(10,10,24,.98) with backdrop-filter blur 16px
- Layer 1 height: 56px
- Layer 2 height: 36px
- Border between layers: 1px solid rgba(255,255,255,.07)
- Mobile: Hide modules list, show hamburger

---

## Footer

#### Source
- **Structure**: tridge_eye_hub.html (lines 480-485)

#### Content Specification

```html
<footer>
  <a href="#" class="footer-wordmark">TRIDGE</a>
  <div class="footer-links">
    <a href="#">Privacy</a>
    <a href="#">Terms</a>
    <a href="#">Sitemap</a>
    <a href="#">Careers</a>
  </div>
  <div class="footer-copy">© 2026 Tridge. All rights reserved.</div>
</footer>
```

#### Design Specifications
- Background: var(--black)
- Border-top: 1px solid rgba(255,255,255,.05)
- Padding: 28px 5%
- Display: Flex, space-between, center align
- Wordmark: White, 15px, 700 weight
- Links: rgba(255,255,255,.28), 11px
- Links hover: rgba(255,255,255,.65)
- Copy: rgba(255,255,255,.18), 11px

---

## Removed Sections

### From tridge_eye_hub.html
- Interactive Market/Module Finder (lines 458-478) - Too complex for landing page, move to Eye platform

### From tridge-landing_2.html
- Mission section - Not critical for conversion funnel
- Problem section - Replaced by persona-driven approach in Eye Hub
- Benefits section - Covered by Value Stack
- Solution Pillars section - Merged into Value Stack
- Differentiators section - Replaced by Comparison Table
- How It Works section - Simplified into Value Stack explanation
- Vision section - Too forward-looking for conversion-focused landing
- Scale section metrics - Integrated into Hero stats and Trusted By section

---

## CSS Integration Notes

### Color Tokens (Unified)
```css
:root {
  --blue:       #171CFD;
  --black:      #0A0A18;
  --white:      #FFFFFF;
  --purple:     #7E43CD;
  --bluepurple: #5C42E5;
  --cyan:       #34C6EE;
  --green:      #0EDBA5;
  --yellow:     #FFD12D;
  --bg:         #F5F5FA;
  --tint:       #EAEAFF;
  --gray:       #6B6B8A;
  --line:       #D8D8F0;
}
```

### Typography
- Font: 'Inter', sans-serif (Google Fonts)
- Weights used: 200, 300, 400, 500, 600, 700, 800
- Base size: 16px
- Line-height: 1.6

### Breakpoints
- Desktop: Default (no media query)
- Tablet: max-width 960px
- Mobile: max-width 600px

### Animation Principles
- Hero fade-up: 0.6s ease stagger (0.1s, 0.2s, 0.3s delays)
- Hover transitions: 0.2s or 0.15s
- Trust bar scroll: 18s linear infinite
- Blink animation: 2s infinite

---

## TBU Placeholders Summary

### Images/Logos
1. **[TBU-LOGO-01]**: Customer logo grid (section 3)
   - 8-12 logos, grayscale, 140px width max
   - Grid: 4 columns desktop, 2 mobile
   - Requires approved marketing assets

### Future Modules
2. **Trade Execution module**: Card in Explore Modules (section 7)
   - Opacity 0.4, no hover, no link
   - Badge: "TBU" top-right

3. **Navigation sub-items**: Layer 2 GNB
   - Case Studies [TBU]
   - API [TBU]
   - Pricing [TBU]

4. **Persona card links**: Multiple [TBU] links in persona panels
   - Operations panel in Buyers card
   - Third panel in Exporters card
   - Execution links in Operators card

### Styling for TBU Elements
```css
.tbu {
  opacity: 0.38;
  cursor: default;
  pointer-events: none;
}

.tbu-badge {
  position: absolute;
  top: 10px; right: 10px;
  font-size: 9px; font-weight: 700;
  letter-spacing: 0.08em; text-transform: uppercase;
  background: var(--bg); border: 1px solid var(--line);
  color: var(--gray); padding: 2px 7px;
}
```

---

## Technical Requirements

### File Format
- Single HTML file
- CSS: Inlined in `<style>` tag within `<head>`
- JavaScript: Minimal, inlined in `<script>` tag before `</body>` (only for nav hamburger and smooth scroll)

### JavaScript Requirements
```javascript
// Hamburger menu toggle
// Scroll detection for nav shadow
// Smooth scroll for anchor links
// Trust bar infinite scroll (CSS animation, no JS)
```

### Meta Tags
```html
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Tridge Eye — The Intelligence Layer for Global Agri-Food Trade</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
```

### Accessibility
- All links must have href attribute (use href="#" for TBU items with pointer-events: none)
- All images must have alt text (TBU placeholders: alt="Customer logo placeholder")
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Buttons: Use `<a>` for navigation, `<button>` for interactions only

### Performance
- Critical CSS inlined
- Google Fonts preconnect
- Smooth scroll: CSS scroll-behavior, not JS
- No external CSS files
- No external JS libraries

---

## Content Verification Checklist

### Master Copy Compliance (CLAUDE.md)
- [ ] Headline: "Research Stops Short. Execution Is the Gap." (exact)
- [ ] Stats: 1M+ users (not 750K+)
- [ ] Stats: 180+ countries (not 140+ or 195+)
- [ ] Stats: 12+ Years
- [ ] Stats: 350K+ companies
- [ ] Stats: 6,500+ categories (not 10K+)
- [ ] CTA "Get Started" → https://eye.tridge.com
- [ ] CTA "Get a Demo" → contact-sales.html
- [ ] Export Solution framing: "At a Scale Your Team Can't Do Alone" (not "Without a Sales Team")
- [ ] No "within 2 business days" or "2~5 business days" language

### Link Integrity
- [ ] Hero primary CTA → https://eye.tridge.com
- [ ] Hero secondary CTA → #how (anchor)
- [ ] Nav CTA → contact-sales.html
- [ ] Final CTA primary → contact-sales.html
- [ ] Final CTA secondary → https://eye.tridge.com
- [ ] All module cards → respective HTML files (e.g., tridge_market_intelligence.html)
- [ ] All TBU items → href="#" with pointer-events: none

### Trust Assets Integration
- [ ] Trust bar with 6 industries (scrolling animation)
- [ ] Customer logo section with TBU placeholder
- [ ] Comparison table (Generic AI vs Tridge, 5 rows)
- [ ] Updated stats in hero (1M+, 180+, 12+, 350K+)

---

## Generator Instructions

### Build Order
1. Start with complete `<head>` section (meta, fonts, CSS)
2. Build `<body>` structure: nav, main, footer
3. Hero section (with dashboard mock)
4. Trust bar
5. Trusted by (with TBU placeholder)
6. Persona navigation
7. Value stack
8. Why Tridge (comparison table)
9. Explore modules
10. Formula section
11. Final CTA
12. Footer
13. JavaScript (minimal, nav + smooth scroll)

### Code Style
- Indentation: 2 spaces
- CSS: Grouped by section with comments (e.g., `/* ── HERO ── */`)
- HTML: Semantic tags, clear section IDs
- Comments: Use for TBU placeholders and section breaks
- Line length: Max 120 characters (for readability)

### Testing Requirements
- Validate HTML5
- Test responsive breakpoints (desktop 1440px, tablet 768px, mobile 375px)
- Test all CTA links
- Verify stats match master version
- Check TBU elements are properly disabled

---

## Success Criteria

This integration blueprint is considered complete when the generated index.html:

1. **Structure**: Uses Eye Hub as base with Landing trust assets injected in correct section order
2. **Content**: All copy matches CLAUDE.md master version (stats, headlines, CTAs)
3. **Trust Signals**: Includes trust bar, customer logos (TBU), comparison table, updated stats
4. **CTAs**: All links functional and point to correct destinations (eye.tridge.com, contact-sales.html)
5. **Design**: Maintains Eye Hub visual system (black hero, blue accents, dashboard mock)
6. **TBU**: All placeholders properly marked and styled
7. **Responsive**: Works on mobile, tablet, desktop
8. **Conversion**: Clear persona pathways, direct CTAs, removed friction

---

## Analyst Feedback Integration

Based on analysis-report.md findings, this blueprint specifically addresses:

- **Value Clarity** (9/10 target): Kept Eye Hub headline, added Landing comparison table
- **Trust Signals** (23/30 target): Added trust bar, updated stats, added logo placeholder
- **CTA Effectiveness** (27/30 target): Direct "Get Started" in hero, fixed all link destinations
- **Structure Efficiency** (27/30 target): Removed redundant sections, optimized conversion funnel

**Estimated Output**: 1,200-1,400 lines of HTML (including inline CSS and minimal JS)

---

**Ready for Generator Agent**: This blueprint contains all specifications needed to build index.html without ambiguity.
