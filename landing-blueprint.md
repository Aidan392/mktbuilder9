# Landing.html Implementation Blueprint
**Date**: 2026-04-06  
**Agent**: Asset Integrator  
**Purpose**: Zero-ambiguity technical specification for generator to implement landing.html

---

## Executive Summary

This blueprint provides complete specifications for implementing **landing.html** — the www.tridge.com main page redesign. The page introduces Tridge's company story and two core solutions (Tridge Eye for buyers, Export Solution for exporters) with enterprise B2B credibility.

**Base Reference**: tridge-landing_2.html (structural foundation)  
**Key Improvements**: Execution-gap messaging, functional CTAs, corrected statistics, SVG icons, customer logos, solutions section  
**Target Audience**: Global trade professionals (buyers, procurement, exporters, sellers)  
**Design Philosophy**: Dark enterprise B2B (Palantir-inspired), scannable hierarchy, trust-first architecture

---

## File Structure & Technical Requirements

### Document Type
- Single HTML5 file
- All CSS inline in `<style>` block
- All JavaScript inline in `<script>` block
- No external dependencies except Google Fonts and CDN customer logos

### Responsive Design
- Mobile-first approach
- Primary breakpoint: 768px
- Secondary breakpoint: 1024px
- Tertiary breakpoint: 1280px
- Use CSS Grid and Flexbox for layouts
- Fluid typography with `clamp()` function

### Performance Requirements
- Page load target: < 3 seconds
- Minimal JavaScript (progressive enhancement)
- Optimized images (compress before deployment)
- Intersection Observer for scroll animations

### Accessibility
- Semantic HTML5 elements
- ARIA labels where needed
- Reduced motion support (`prefers-reduced-motion`)
- Keyboard navigation
- Color contrast ratios WCAG AA compliant

---

## Color Palette & Design Tokens

### Primary Colors
```css
--color-primary-blue: #171CFD;
--color-primary-black: #0A0A18;
--color-primary-white: #FFFFFF;
--color-pure-black: #000000;
```

### Accent Colors (Use Sparingly)
```css
--color-accent-cyan: #34c6ee;
--color-accent-green: #0edba5;
--color-accent-yellow: #f4d03f;
--color-accent-muted-cyan: rgba(52, 198, 238, 0.1);
--color-accent-muted-green: rgba(14, 219, 165, 0.1);
```

### Background Colors
```css
--bg-dark: #0A0A18;
--bg-darker: #000000;
--bg-light: #FFFFFF;
--bg-gray-light: #f4f4f8;
--bg-gray-medium: #e5e5e5;
```

### Text Colors
```css
--text-primary: #0A0A18;
--text-secondary: #666666;
--text-on-dark: #FFFFFF;
--text-muted: #999999;
```

### Typography
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Font Weights */
--font-ultra-light: 200;
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;

/* Responsive Font Sizes */
--font-hero-headline: clamp(36px, 11vw, 72px);
--font-section-title: clamp(26px, 8vw, 52px);
--font-subsection-title: clamp(20px, 5vw, 32px);
--font-body: clamp(14px, 3.5vw, 16px);
--font-small: clamp(12px, 3vw, 14px);
```

---

## Navigation Structure

### Desktop Navigation (>768px)
```
[TRIDGE LOGO]  Solutions ▼  Resources ▼  [Get started]  [Get a demo]
```

### Navigation HTML Structure
```html
<nav class="nav-container">
  <div class="nav-inner">
    <a href="/" class="logo">TRIDGE</a>
    
    <div class="nav-links">
      <div class="nav-dropdown">
        <button class="nav-link-dropdown">Solutions ▼</button>
        <div class="dropdown-menu">
          <a href="tridge-eye.html">
            <strong>Tridge Eye</strong>
            <span>For Buyers & Procurement</span>
          </a>
          <a href="export-solution.html">
            <strong>Export Solution</strong>
            <span>For Exporters & Sellers</span>
          </a>
        </div>
      </div>
      
      <div class="nav-dropdown">
        <button class="nav-link-dropdown">Resources ▼</button>
        <div class="dropdown-menu">
          <a href="#">Blog</a>
          <a href="#">Case Studies</a>
          <a href="#">Documentation</a>
        </div>
      </div>
    </div>
    
    <div class="nav-ctas">
      <a href="https://eye.tridge.com" class="btn-secondary">Get started</a>
      <a href="contact-sales.html" class="btn-primary">Get a demo</a>
    </div>
    
    <button class="mobile-menu-toggle" aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</nav>
```

### Navigation Styling Requirements
- Fixed position on scroll
- Background: rgba(10, 10, 24, 0.95) with backdrop blur
- Height: 72px desktop, 64px mobile
- Logo: White, font-weight 800, 24px
- Dropdown: Appears on hover (desktop) or click (mobile)
- Dropdown background: White with subtle shadow
- Mobile: Hamburger menu, full-screen drawer

---

## Section 1: Hero

### Layout
- Two-column grid (desktop): 50% copy / 50% visual
- Single column (mobile): Copy → CTA → Visual
- Background: Dark (#0A0A18) with subtle grid pattern
- Padding: 120px top (desktop), 80px top (mobile)

### Content Structure
```html
<section class="hero">
  <div class="hero-inner">
    <div class="hero-content">
      <span class="hero-tag">AI-Powered Trade Execution</span>
      <h1 class="hero-headline">
        <span class="hero-headline-light">The Execution Layer</span>
        <span class="hero-headline-bold">for Global Trade</span>
      </h1>
      <p class="hero-subheadline">
        12+ years of verified market data, AI-powered automation, and global network infrastructure — turning intelligence into executed deals.
      </p>
      
      <div class="hero-ctas">
        <a href="https://eye.tridge.com" class="btn-primary-large">Get Started</a>
        <a href="#how" class="btn-secondary-large">See How It Works</a>
      </div>
      
      <div class="hero-stats">
        <div class="stat-box">
          <div class="stat-number">1M+</div>
          <div class="stat-label">Global Users</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">180+</div>
          <div class="stat-label">Countries</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">12+</div>
          <div class="stat-label">Years Data</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">350K+</div>
          <div class="stat-label">Companies</div>
        </div>
      </div>
    </div>
    
    <div class="hero-visual">
      <img src="Eye_speaker_black.jpg" alt="Tridge Platform Interface" />
    </div>
  </div>
</section>
```

### Copy Specifications
- **Tag**: "AI-Powered Trade Execution" (12px, uppercase, cyan #34c6ee, semibold)
- **Headline**: "The Execution Layer for Global Trade"
  - "The Execution Layer" = font-weight 200 (ultra-light)
  - "for Global Trade" = font-weight 800 (extrabold)
  - Size: clamp(36px, 11vw, 72px)
  - Line height: 1.1
- **Subheadline**: "12+ years of verified market data, AI-powered automation, and global network infrastructure — turning intelligence into executed deals."
  - Font-weight: 300 (light)
  - Size: clamp(16px, 4vw, 20px)
  - Line height: 1.6
  - Color: rgba(255, 255, 255, 0.85)
- **CTA Copy**: "Get Started" (primary), "See How It Works" (secondary)

### Button Styling
```css
.btn-primary-large {
  background: #171CFD;
  color: #FFFFFF;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
}
.btn-primary-large:hover {
  background: #0f14c7;
}

.btn-secondary-large {
  background: transparent;
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s;
}
.btn-secondary-large:hover {
  border-color: #FFFFFF;
  background: rgba(255, 255, 255, 0.05);
}
```

### Stats Grid Styling
- Display: Grid, 4 columns (desktop), 2 columns (mobile)
- Gap: 24px
- Each stat box:
  - Background: rgba(255, 255, 255, 0.05)
  - Border: 1px solid rgba(255, 255, 255, 0.1)
  - Border-radius: 8px
  - Padding: 20px
  - Text-align: center
- Stat number: 32px, font-weight 700, white
- Stat label: 12px, font-weight 400, rgba(255, 255, 255, 0.7)

### Hero Visual
- Image: Eye_speaker_black.jpg
- Desktop: Right column, max-width 600px
- Mobile: Below CTA, max-width 100%, margin-top 48px
- Border-radius: 12px
- Box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3)

---

## Section 2: Trust Bar

### Layout
- Full-width section
- Background: Pure black (#000000)
- Padding: 32px 0
- Scrolling marquee animation (infinite loop)

### Content Structure
```html
<section class="trust-bar">
  <div class="trust-bar-inner">
    <div class="trust-bar-label">Trusted by</div>
    <div class="trust-bar-marquee">
      <div class="trust-bar-scroll">
        <span>Food & Agriculture</span>
        <span>Global Procurement</span>
        <span>Trade Finance</span>
        <span>Supply Chain</span>
        <span>Export Markets</span>
        <span>Commodity Trading</span>
        <!-- Duplicate for seamless loop -->
        <span>Food & Agriculture</span>
        <span>Global Procurement</span>
        <span>Trade Finance</span>
        <span>Supply Chain</span>
        <span>Export Markets</span>
        <span>Commodity Trading</span>
      </div>
    </div>
  </div>
</section>
```

### Styling Requirements
- Label: "Trusted by" — 14px, rgba(255, 255, 255, 0.5), uppercase, margin-right 24px
- Marquee items: 16px, white, separated by vertical bar |
- Animation: Scroll left continuously, 18s duration
- CSS animation:
```css
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

---

## Section 3: Customer Logo Slide

### Layout
- White background (#FFFFFF)
- Padding: 80px vertical
- Centered container, max-width 1280px
- Grid: 5 logos per row (desktop), 3 per row (tablet), 2 per row (mobile)

### Content Structure
```html
<section class="customer-logos">
  <div class="container">
    <h2 class="section-subtitle">Trusted by Leading Global Trade Companies</h2>
    <div class="logo-grid">
      <img src="https://cdn-new.tridge.com/assets/VOXPRPRW.png" alt="Customer logo" />
      <img src="https://cdn-new.tridge.com/assets/M2SKMYUX.png" alt="Customer logo" />
      <img src="https://cdn-new.tridge.com/assets/UXSCTPTJ.png" alt="Customer logo" />
      <img src="https://cdn-new.tridge.com/assets/2AV2V2AN.png" alt="Customer logo" />
      <img src="https://cdn-new.tridge.com/assets/KQTR5FMM.png" alt="Customer logo" />
      <img src="https://cdn-new.tridge.com/assets/5KOCBBSM.png" alt="Customer logo" />
      <img src="https://cdn-new.tridge.com/assets/UXRBP3PM.png" alt="Customer logo" />
      <img src="https://cdn-new.tridge.com/assets/FBMDYRMT.png" alt="Customer logo" />
      <img src="https://cdn-new.tridge.com/assets/I2WW6JPR.png" alt="Customer logo" />
      <img src="https://cdn-new.tridge.com/assets/2XEVYYKE.png" alt="Customer logo" />
      <img src="https://cdn-new.tridge.com/assets/RXPRGDIU.png" alt="Customer logo" />
      <img src="https://cdn-new.tridge.com/assets/VOINHDNB.png" alt="Customer logo" />
      <img src="https://cdn-new.tridge.com/assets/F6NVLDF5.png" alt="Customer logo" />
      <img src="https://cdn-new.tridge.com/assets/JKNHD6RU.png" alt="Customer logo" />
      <img src="https://cdn-new.tridge.com/assets/37HUSUQT.png" alt="Customer logo" />
      <img src="https://cdn-new.tridge.com/assets/VX53NU6U.png" alt="Customer logo" />
      <img src="https://cdn-new.tridge.com/assets/JHGDAJEM.png" alt="Customer logo" />
      <img src="https://cdn-new.tridge.com/assets/5XWJ2ROK.png" alt="Customer logo" />
      <img src="https://cdn-new.tridge.com/assets/VASZMBV3.png" alt="Customer logo" />
      <img src="https://cdn-new.tridge.com/assets/PL6URT7G.png" alt="Customer logo" />
      <img src="https://cdn-new.tridge.com/assets/Q4GQOMQA.png" alt="Customer logo" />
      <img src="https://cdn-new.tridge.com/assets/C55OS6IH.png" alt="Customer logo" />
      <img src="https://cdn-new.tridge.com/assets/KA6KIW7X.png" alt="Customer logo" />
      <img src="https://cdn-new.tridge.com/assets/VWA6XMBC.png" alt="Customer logo" />
      <img src="https://cdn-new.tridge.com/assets/P7NNUTVD.png" alt="Customer logo" />
    </div>
  </div>
</section>
```

### Styling Requirements
- Section subtitle: 20px, font-weight 600, color #666, text-align center, margin-bottom 48px
- Logo grid: CSS Grid, gap 40px (desktop), 24px (mobile)
- Each logo:
  - Max-width: 160px
  - Max-height: 80px
  - Object-fit: contain
  - Filter: grayscale(100%) opacity(0.5)
  - Transition: filter 0.3s
  - Hover: grayscale(0%) opacity(1.0)

---

## Section 4: The Problem

### Layout
- Background: Light gray (#f4f4f8)
- Padding: 120px vertical (desktop), 80px vertical (mobile)
- Centered container, max-width 1280px

### Content Structure
```html
<section class="problem">
  <div class="container">
    <span class="section-tag">The Challenge</span>
    <h2 class="section-title">Global Trade Is Still Broken</h2>
    <p class="section-intro">
      Companies don't lack opportunities — they lack the execution intelligence to capture them.
    </p>
    
    <div class="problem-grid">
      <div class="problem-card">
        <div class="problem-icon">
          <!-- SVG: Globe icon -->
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        </div>
        <h3 class="problem-title">Fragmented Information</h3>
        <p class="problem-description">
          Market data is scattered, unreliable, and constantly outdated. Decision-making is based on guesses, not intelligence.
        </p>
      </div>
      
      <div class="problem-card">
        <div class="problem-icon">
          <!-- SVG: Clock icon -->
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        </div>
        <h3 class="problem-title">Manual, Slow Execution</h3>
        <p class="problem-description">
          Everything requires human intervention — discovery, outreach, negotiation, follow-up. Teams can't scale.
        </p>
      </div>
      
      <div class="problem-card">
        <div class="problem-icon">
          <!-- SVG: Search icon -->
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </div>
        <h3 class="problem-title">Limited Network Access</h3>
        <p class="problem-description">
          Finding the right buyers or suppliers is manual research. Most opportunities remain invisible.
        </p>
      </div>
      
      <div class="problem-card">
        <div class="problem-icon">
          <!-- SVG: Dollar sign icon -->
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </div>
        <h3 class="problem-title">High Operational Costs</h3>
        <p class="problem-description">
          Scaling trade operations means scaling headcount. Growth hits a ceiling without massive investment.
        </p>
      </div>
    </div>
  </div>
</section>
```

### Styling Requirements
- Section tag: 12px, uppercase, cyan #34c6ee, semibold, margin-bottom 16px
- Section title: clamp(26px, 8vw, 52px), font-weight 700, color #0A0A18, margin-bottom 24px
- Section intro: 20px, font-weight 300, color #666, max-width 800px, margin-bottom 64px
- Problem grid: 2x2 grid (desktop), 1 column (mobile), gap 32px
- Problem card:
  - Background: white
  - Padding: 32px
  - Border-radius: 12px
  - Border: 1px solid #e5e5e5
  - Transition: transform 0.2s, box-shadow 0.2s
  - Hover: transform translateY(-4px), box-shadow 0 12px 24px rgba(0,0,0,0.1)
- Problem icon: 
  - Width: 48px, height 48px
  - Color: #171CFD
  - Margin-bottom: 16px
- Problem title: 20px, font-weight 600, color #0A0A18, margin-bottom 12px
- Problem description: 15px, font-weight 300, color #666, line-height 1.6

---

## Section 5: Two Solutions

### Layout
- Background: Dark (#0A0A18)
- Padding: 120px vertical (desktop), 80px vertical (mobile)
- Centered container, max-width 1280px

### Content Structure
```html
<section class="solutions">
  <div class="container">
    <span class="section-tag-light">Our Solutions</span>
    <h2 class="section-title-light">Built for How You Trade</h2>
    <p class="section-intro-light">
      Two powerful solutions designed for the specific workflows of buyers and exporters.
    </p>
    
    <div class="solutions-grid">
      <!-- Card 1: Tridge Eye -->
      <div class="solution-card">
        <div class="solution-tag">For Buyers & Procurement</div>
        <h3 class="solution-title">Intelligence That Closes Deals</h3>
        <p class="solution-description">
          Real-time market data, supplier discovery, and price benchmarking. Make informed sourcing decisions backed by 12+ years of verified trade intelligence.
        </p>
        <ul class="solution-features">
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Market price analysis across 180+ countries
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Verified supplier profiles with trade history
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Real-time trade flow visibility
          </li>
        </ul>
        <a href="tridge-eye.html" class="btn-solution-primary">
          Explore Tridge Eye
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
      
      <!-- Card 2: Export Solution -->
      <div class="solution-card">
        <div class="solution-tag">For Exporters & Sellers</div>
        <h3 class="solution-title">At a Scale Your Team Can't Do Alone</h3>
        <p class="solution-description">
          AI-powered buyer discovery and automated outreach at scale. Connect with qualified buyers globally without scaling your sales team.
        </p>
        <ul class="solution-features">
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            AI-driven buyer matching and discovery
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Automated outreach and follow-up
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Lead qualification and nurturing
          </li>
        </ul>
        <a href="export-solution.html" class="btn-solution-primary">
          Explore Export Solution
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
```

### Styling Requirements
- Section tag light: Same as tag but white with opacity 0.9
- Section title light: Same as section title but white
- Section intro light: Same as intro but rgba(255, 255, 255, 0.8)
- Solutions grid: 2 columns (desktop), 1 column (mobile), gap 40px
- Solution card:
  - Background: rgba(255, 255, 255, 0.05)
  - Border: 1px solid rgba(255, 255, 255, 0.1)
  - Border-radius: 16px
  - Padding: 48px
  - Transition: border-color 0.2s, background 0.2s
  - Hover: border-color rgba(255, 255, 255, 0.3), background rgba(255, 255, 255, 0.08)
- Solution tag: 12px, uppercase, cyan #34c6ee, semibold, margin-bottom 16px
- Solution title: 28px, font-weight 700, white, margin-bottom 16px
- Solution description: 16px, font-weight 300, rgba(255, 255, 255, 0.85), line-height 1.6, margin-bottom 24px
- Solution features (ul):
  - List-style: none
  - Each li: Display flex, align-items center, gap 8px, margin-bottom 12px
  - Icon: cyan #34c6ee
  - Text: 14px, rgba(255, 255, 255, 0.9)
- Button solution primary:
  - Background: #171CFD
  - Color: white
  - Padding: 14px 28px
  - Border-radius: 8px
  - Font-size: 15px
  - Font-weight: 600
  - Display: inline-flex, align-items center, gap 8px
  - Transition: background 0.2s
  - Hover: background #0f14c7

---

## Section 6: Why Tridge

### Layout
- Background: White (#FFFFFF)
- Padding: 120px vertical (desktop), 80px vertical (mobile)
- Centered container, max-width 1280px

### Content Structure
```html
<section class="why-tridge">
  <div class="container">
    <span class="section-tag">Differentiation</span>
    <h2 class="section-title">Built on Data. Not Just AI.</h2>
    <p class="section-intro">
      Generic AI tools lack the foundation to execute trade. Tridge is different.
    </p>
    
    <!-- Comparison Table -->
    <div class="comparison-table">
      <div class="comparison-header">
        <div class="comparison-col">Generic AI</div>
        <div class="comparison-col">Tridge</div>
      </div>
      
      <div class="comparison-row">
        <div class="comparison-col">General-purpose</div>
        <div class="comparison-col comparison-highlight">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Built for trade
        </div>
      </div>
      
      <div class="comparison-row">
        <div class="comparison-col">Scraped data</div>
        <div class="comparison-col comparison-highlight">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          12+ yrs native data
        </div>
      </div>
      
      <div class="comparison-row">
        <div class="comparison-col">Stops at insights</div>
        <div class="comparison-col comparison-highlight">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Executes end-to-end
        </div>
      </div>
      
      <div class="comparison-row">
        <div class="comparison-col">Needs customization</div>
        <div class="comparison-col comparison-highlight">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Ontology ready
        </div>
      </div>
      
      <div class="comparison-row">
        <div class="comparison-col">No network</div>
        <div class="comparison-col comparison-highlight">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Millions active
        </div>
      </div>
    </div>
    
    <!-- Differentiators -->
    <div class="differentiators-grid">
      <div class="differentiator-card">
        <div class="differentiator-number">01</div>
        <h3 class="differentiator-title">Data Foundation</h3>
        <h4 class="differentiator-subtitle">12+ Years of Native Intelligence</h4>
        <p class="differentiator-description">
          Not synthetic, not scraped. Deeply structured domain data accumulated over a decade, with high-quality ontology that mirrors how global trade actually works.
        </p>
      </div>
      
      <div class="differentiator-card">
        <div class="differentiator-number">02</div>
        <h3 class="differentiator-title">Domain Expertise</h3>
        <h4 class="differentiator-subtitle">We Understand Trade Better</h4>
        <p class="differentiator-description">
          Deep understanding of pricing structures, product specs, trade logistics, regulatory workflows, and the real complexity of cross-border execution.
        </p>
      </div>
      
      <div class="differentiator-card">
        <div class="differentiator-number">03</div>
        <h3 class="differentiator-title">Proven Network</h3>
        <h4 class="differentiator-subtitle">Millions of Users. Real Activity.</h4>
        <p class="differentiator-description">
          An already-active ecosystem of global buyers and suppliers that compounds in value with every new participant.
        </p>
      </div>
      
      <div class="differentiator-card">
        <div class="differentiator-number">04</div>
        <h3 class="differentiator-title">Execution Engine</h3>
        <h4 class="differentiator-subtitle">Outcomes, Not Suggestions</h4>
        <p class="differentiator-description">
          Most AI tools stop at analysis. We execute actual trade workflows — from discovery to deal closure — delivering measurable outcomes.
        </p>
      </div>
    </div>
  </div>
</section>
```

### Styling Requirements

**Comparison Table:**
- Background: #f4f4f8
- Border-radius: 12px
- Padding: 32px
- Margin-bottom: 64px
- Comparison header:
  - Display: grid, 2 columns (50% each)
  - Font-size: 18px, font-weight 700
  - Color: #0A0A18
  - Padding-bottom: 16px
  - Border-bottom: 2px solid #e5e5e5
- Comparison row:
  - Display: grid, 2 columns
  - Padding: 20px 0
  - Border-bottom: 1px solid #e5e5e5
  - Last row: no border
- Comparison col:
  - Font-size: 15px
  - Color: #666
- Comparison highlight:
  - Color: #0A0A18
  - Font-weight: 600
  - Display: flex, align-items center, gap 8px
  - SVG icon: cyan #34c6ee

**Differentiators Grid:**
- Display: grid, 2x2 (desktop), 1 column (mobile)
- Gap: 32px
- Differentiator card:
  - Padding: 32px
  - Border: 1px solid #e5e5e5
  - Border-radius: 12px
  - Transition: border-color 0.2s
  - Hover: border-color #171CFD
- Differentiator number:
  - Font-size: 48px
  - Font-weight: 200
  - Color: #171CFD
  - Margin-bottom: 16px
- Differentiator title:
  - Font-size: 16px
  - Font-weight: 700
  - Color: #0A0A18
  - Margin-bottom: 8px
- Differentiator subtitle:
  - Font-size: 20px
  - Font-weight: 600
  - Color: #0A0A18
  - Margin-bottom: 12px
- Differentiator description:
  - Font-size: 15px
  - Font-weight: 300
  - Color: #666
  - Line-height: 1.6

---

## Section 7: How It Works

### Layout
- Background: Light gray (#f4f4f8)
- Padding: 120px vertical (desktop), 80px vertical (mobile)
- Centered container, max-width 1280px

### Content Structure
```html
<section id="how" class="how-it-works">
  <div class="container">
    <span class="section-tag">Process</span>
    <h2 class="section-title">How It Works</h2>
    <p class="section-intro">
      Three simple steps to transform your trade operations.
    </p>
    
    <div class="steps-grid">
      <div class="step-card">
        <div class="step-number">01</div>
        <h3 class="step-title">Define Your Needs</h3>
        <p class="step-description">
          Input your sourcing requirements, sales targets, product specs, or market goals. Tridge's domain ontology structures your intent instantly — no complex setup required.
        </p>
      </div>
      
      <div class="step-card">
        <div class="step-number">02</div>
        <h3 class="step-title">AI Agents Activate</h3>
        <p class="step-description">
          Intelligent agents identify optimal matches, initiate outreach, manage communication, and orchestrate workflows across your global opportunity set simultaneously.
        </p>
      </div>
      
      <div class="step-card">
        <div class="step-number">03</div>
        <h3 class="step-title">Execute & Scale</h3>
        <p class="step-description">
          Close deals faster with full visibility and control. Scale operations without scaling headcount. Every deal strengthens your data advantage for the next one.
        </p>
      </div>
    </div>
  </div>
</section>
```

### Styling Requirements
- Steps grid: 3 columns (desktop), 1 column (mobile), gap 40px
- Step card:
  - Background: white
  - Padding: 40px
  - Border-radius: 12px
  - Border: 1px solid #e5e5e5
  - Position: relative
  - Transition: transform 0.2s
  - Hover: transform translateY(-8px)
- Step number:
  - Font-size: 72px
  - Font-weight: 200
  - Color: rgba(23, 28, 253, 0.1)
  - Position: absolute, top 24px, right 24px
- Step title:
  - Font-size: 24px
  - Font-weight: 700
  - Color: #0A0A18
  - Margin-bottom: 16px
  - Margin-top: 80px (to clear absolute number)
- Step description:
  - Font-size: 15px
  - Font-weight: 300
  - Color: #666
  - Line-height: 1.6

---

## Section 8: The Future

### Layout
- Background: Dark (#0A0A18)
- Padding: 120px vertical (desktop), 80px vertical (mobile)
- Centered container, max-width 900px (narrower for emphasis)
- Text-align: center

### Content Structure
```html
<section class="the-future">
  <div class="container-narrow">
    <span class="section-tag-light">Vision</span>
    <h2 class="section-title-light">Trade Will Be Run by Autonomous Agents</h2>
    <p class="future-description">
      The shift is already underway. Buyers will rely on agents for sourcing. Suppliers will deploy agents for sales. Transactions will execute autonomously on structured intelligence.
    </p>
    
    <div class="future-layers">
      <div class="future-layer">Data Layer</div>
      <div class="future-separator">•</div>
      <div class="future-layer">Execution Layer</div>
      <div class="future-separator">•</div>
      <div class="future-layer">Network Layer</div>
    </div>
    
    <p class="future-cta-text">
      Together, they form the foundation of AI-powered global commerce.<br>
      The only question: <strong>will you operate this system — or compete against it?</strong>
    </p>
  </div>
</section>
```

### Styling Requirements
- Container narrow: max-width 900px, text-align center
- Section tag light: Same as previous (white, cyan-ish)
- Section title light: Same as previous, margin-bottom 24px
- Future description:
  - Font-size: 20px
  - Font-weight: 300
  - Color: rgba(255, 255, 255, 0.85)
  - Line-height: 1.6
  - Margin-bottom: 48px
- Future layers:
  - Display: flex, justify-content center, align-items center, gap 16px
  - Flex-wrap: wrap (mobile)
  - Margin-bottom: 32px
- Future layer:
  - Font-size: 18px
  - Font-weight: 600
  - Color: #171CFD
  - Background: rgba(23, 28, 253, 0.1)
  - Padding: 12px 24px
  - Border-radius: 8px
- Future separator:
  - Font-size: 24px
  - Color: rgba(255, 255, 255, 0.3)
- Future CTA text:
  - Font-size: 18px
  - Font-weight: 300
  - Color: rgba(255, 255, 255, 0.8)
  - Line-height: 1.6
  - Strong: font-weight 600, color white

---

## Section 9: Final CTA

### Layout
- Background: White (#FFFFFF)
- Padding: 120px vertical (desktop), 80px vertical (mobile)
- Centered container, max-width 800px
- Text-align: center

### Content Structure
```html
<section class="final-cta">
  <div class="container-narrow">
    <h2 class="final-cta-title">Start Transforming Your Trade Operations Today</h2>
    <p class="final-cta-description">
      See how AI agents can scale your procurement and sales beyond what any team can achieve manually. Backed by 12+ years of unmatched trade data intelligence.
    </p>
    
    <div class="final-cta-buttons">
      <a href="contact-sales.html" class="btn-primary-large">Request Executive Demo</a>
      <a href="contact-sales.html" class="btn-secondary-large-dark">Talk to Sales</a>
    </div>
    
    <p class="final-cta-note">
      Response within 1 business day
    </p>
  </div>
</section>
```

### Styling Requirements
- Container narrow: max-width 800px, text-align center
- Final CTA title:
  - Font-size: clamp(28px, 7vw, 48px)
  - Font-weight: 700
  - Color: #0A0A18
  - Margin-bottom: 24px
- Final CTA description:
  - Font-size: 18px
  - Font-weight: 300
  - Color: #666
  - Line-height: 1.6
  - Margin-bottom: 40px
- Final CTA buttons:
  - Display: flex, justify-content center, gap 16px
  - Flex-wrap: wrap (mobile)
  - Margin-bottom: 24px
- Button secondary large dark:
  - Same as btn-secondary-large but:
  - Color: #0A0A18
  - Border: 1px solid #e5e5e5
  - Hover: border-color #0A0A18, background #f4f4f8
- Final CTA note:
  - Font-size: 14px
  - Color: #999
  - Font-style: italic

---

## Footer

### Layout
- Background: Pure black (#000000)
- Padding: 80px vertical (desktop), 60px vertical (mobile)
- Centered container, max-width 1280px

### Content Structure
```html
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <!-- Column 1: Company -->
      <div class="footer-col">
        <h4 class="footer-heading">Company</h4>
        <ul class="footer-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Press</a></li>
        </ul>
      </div>
      
      <!-- Column 2: Solutions -->
      <div class="footer-col">
        <h4 class="footer-heading">Solutions</h4>
        <ul class="footer-links">
          <li><a href="tridge-eye.html">Tridge Eye</a></li>
          <li><a href="export-solution.html">Export Solution</a></li>
          <li><a href="#">Use Cases</a></li>
          <li><a href="#">Industries</a></li>
        </ul>
      </div>
      
      <!-- Column 3: Resources -->
      <div class="footer-col">
        <h4 class="footer-heading">Resources</h4>
        <ul class="footer-links">
          <li><a href="#">Blog</a></li>
          <li><a href="#">Case Studies</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">API</a></li>
        </ul>
      </div>
      
      <!-- Column 4: Legal -->
      <div class="footer-col">
        <h4 class="footer-heading">Legal</h4>
        <ul class="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Security</a></li>
          <li><a href="#">Trust Center</a></li>
        </ul>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="footer-logo">TRIDGE</div>
      <div class="footer-copyright">
        © 2026 Tridge. All rights reserved.
      </div>
      <div class="footer-social">
        <a href="#" aria-label="LinkedIn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="#" aria-label="Twitter">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>
```

### Styling Requirements
- Footer grid: 4 columns (desktop), 2 columns (tablet), 1 column (mobile), gap 48px
- Footer heading:
  - Font-size: 14px
  - Font-weight: 700
  - Color: white
  - Text-transform: uppercase
  - Letter-spacing: 0.5px
  - Margin-bottom: 16px
- Footer links:
  - List-style: none
  - Each li: margin-bottom 12px
- Footer links a:
  - Color: rgba(255, 255, 255, 0.6)
  - Font-size: 14px
  - Text-decoration: none
  - Transition: color 0.2s
  - Hover: color white
- Footer bottom:
  - Display: flex, justify-content space-between, align-items center
  - Margin-top: 64px
  - Padding-top: 32px
  - Border-top: 1px solid rgba(255, 255, 255, 0.1)
  - Flex-wrap: wrap (mobile), gap 16px
- Footer logo:
  - Font-size: 24px
  - Font-weight: 800
  - Color: white
- Footer copyright:
  - Font-size: 14px
  - Color: rgba(255, 255, 255, 0.5)
- Footer social:
  - Display: flex, gap 16px
  - SVG: Color rgba(255, 255, 255, 0.6)
  - Hover: color white

---

## JavaScript Requirements

### Scroll Reveal Animation
```javascript
// Intersection Observer for scroll-reveal animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  section.classList.add('scroll-reveal');
  observer.observe(section);
});
```

### CSS for Scroll Reveal
```css
.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .scroll-reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

### Mobile Menu Toggle
```javascript
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav-container');

mobileMenuToggle.addEventListener('click', () => {
  nav.classList.toggle('menu-open');
  document.body.classList.toggle('menu-open');
});
```

### Smooth Scroll for Anchor Links
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
```

### Navigation Dropdown (Desktop)
```javascript
const dropdowns = document.querySelectorAll('.nav-dropdown');

dropdowns.forEach(dropdown => {
  const button = dropdown.querySelector('.nav-link-dropdown');
  const menu = dropdown.querySelector('.dropdown-menu');
  
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('is-open');
  });
  
  // Close on outside click
  document.addEventListener('click', () => {
    dropdown.classList.remove('is-open');
  });
});
```

---

## SEO & Meta Tags

### Required Meta Tags
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tridge - The Execution Layer for Global Trade</title>
  <meta name="description" content="12+ years of verified market data, AI-powered automation, and global network infrastructure. Transform trade intelligence into executed deals with Tridge.">
  <meta name="keywords" content="global trade, AI trade platform, trade execution, market data, supplier discovery, export solution, procurement">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Tridge - The Execution Layer for Global Trade">
  <meta property="og:description" content="12+ years of verified market data, AI-powered automation, and global network infrastructure.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.tridge.com">
  <meta property="og:image" content="https://www.tridge.com/og-image.jpg">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Tridge - The Execution Layer for Global Trade">
  <meta name="twitter:description" content="12+ years of verified market data, AI-powered automation, and global network infrastructure.">
  <meta name="twitter:image" content="https://www.tridge.com/twitter-image.jpg">
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="favicon.png">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
</head>
```

---

## Deployment Checklist

### Pre-Launch Validation
- [ ] All statistics match master version (1M+, 180+, 12+, 350K+, 6,500+)
- [ ] All CTAs link to correct destinations (no alert() functions)
- [ ] All 25 customer logo CDN URLs are implemented
- [ ] No emojis present (all replaced with SVG icons)
- [ ] Navigation dropdowns include persona indicators
- [ ] Mobile responsive at 768px, 1024px, 1280px breakpoints
- [ ] Scroll reveal animations working
- [ ] Reduced motion support active
- [ ] All anchor links (#how) functioning
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)

### Performance Validation
- [ ] Page load time < 3 seconds
- [ ] Images optimized and compressed
- [ ] No console errors
- [ ] Smooth scrolling performance
- [ ] Hover states functional on all interactive elements

### Content Validation
- [ ] No lorem ipsum text
- [ ] No generic AI copy
- [ ] Copywriting matches CLAUDE.md master version
- [ ] "At a Scale Your Team Can't Do Alone" (NOT "Without a Sales Team")
- [ ] Response time: "within 1 business day"
- [ ] Proofread for typos and grammatical errors

### Accessibility Validation
- [ ] Semantic HTML5 structure
- [ ] ARIA labels on icon-only buttons
- [ ] Color contrast ratios meet WCAG AA
- [ ] Keyboard navigation functional
- [ ] Screen reader tested (if possible)

---

## Implementation Notes

### File Naming
- Save as: `landing.html`
- Place in root directory (same level as index.html)

### Asset References
- Hero image: `Eye_speaker_black.jpg` (ensure file exists in same directory)
- Customer logos: 25 CDN URLs (hardcoded in HTML)
- All other graphics: Inline SVG

### Code Organization
1. HTML structure (semantic, clean)
2. CSS block (organized by section)
3. JavaScript block (at end before </body>)

### Comments
- Add HTML comments for each section boundary
- Mark TBU placeholders if any
- Document any browser-specific hacks

### Browser Support
- Modern browsers: Chrome, Firefox, Safari, Edge (last 2 versions)
- Graceful degradation for older browsers
- No IE11 support required

---

## Final Notes for Generator

This blueprint provides complete specifications for implementing landing.html. All copy, styling, layout, and technical requirements are defined with zero ambiguity. Follow this document exactly to create a production-ready landing page that:

1. Introduces Tridge's company story and two solutions
2. Establishes trust through data, statistics, and customer logos
3. Differentiates from generic AI tools with comparison table
4. Provides clear conversion paths for both PLG and sales-led motions
5. Matches enterprise B2B design standards (Palantir-inspired)
6. Functions perfectly on desktop and mobile devices

**Critical Reminders:**
- Use exactly 6,500+ for product categories (NOT 10K+)
- Include all 4 stats in hero (1M+, 180+, 12+, 350K+)
- Link primary CTAs to https://eye.tridge.com
- Link secondary CTAs to contact-sales.html
- Use all 25 customer logo CDN URLs provided
- Replace ALL emojis with SVG icons
- NO alert() functions — real links only

Proceed with implementation.
