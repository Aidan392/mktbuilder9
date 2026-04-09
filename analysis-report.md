# B2B Conversion Analysis Report
## Tridge Eye Hub vs. Tridge Landing Integration

**Date**: 2026-04-06  
**Analyst**: Site Analyst Agent  
**Files Analyzed**: tridge_eye_hub.html, tridge-landing_2.html

---

## Executive Summary

### Key Findings
1. **Value Clarity**: tridge_eye_hub.html has superior headline clarity ("Research Stops Short. Execution Is the Gap.") vs. generic "AI That Executes Global Trade"
2. **Trust Signals**: tridge-landing_2.html contains stronger trust indicators (1M+ users, 180+ countries) vs. Eye Hub (350K+ companies, 140+ countries)
3. **CTA Effectiveness**: Both files have weak CTA implementation - Eye Hub uses placeholder email links, Landing uses alert() dialogs
4. **Structure Gap**: Eye Hub has persona-based navigation and interactive dashboard mock; Landing has comparison table and 4-pillar solution structure

### Integration Priority
**Use tridge_eye_hub.html as BASE** and inject trust assets from tridge-landing_2.html

---

## 1. Value Clarity Analysis

### tridge_eye_hub.html (STRONG)
**Headline**: "Research Stops Short. Execution Is the Gap."
- **Readability**: 5 seconds ✓
- **Persona Identification**: Immediate (Buyers, Exporters, Operators)
- **Differentiator**: Clear gap positioning (research → execution)
- **Score**: 9/10

**Supporting Elements**:
- Subheadline clearly explains the integration: "12+ years of verified market data, AI-powered outreach, and human intelligence"
- Dashboard mock visualization immediately shows platform capability
- Persona-based navigation section ("What Are You Trying to Do?") with 3 clear paths

### tridge-landing_2.html (WEAK)
**Headline**: "AI That Executes Global Trade"
- **Readability**: 3 seconds ✓
- **Persona Identification**: Delayed (generic "trade" framing)
- **Differentiator**: Not clear (sounds like any AI trade tool)
- **Score**: 6/10

**Supporting Elements**:
- Subheadline focuses on features, not gap/outcome
- Network visualization is abstract, not actionable
- No persona-based entry points

**Recommendation**: Keep Eye Hub headline and persona structure

---

## 2. Trust Signals Analysis

### Numerical Indicators

| Metric | tridge_eye_hub.html | tridge-landing_2.html | CLAUDE.md Master | Integration Decision |
|--------|---------------------|------------------------|------------------|----------------------|
| Users | - | 1M+ | 1M+ | ADD from Landing |
| Companies | 350K+ | - | 350K+ | KEEP from Eye Hub |
| Countries | 140+ | 180+ | 180+ | UPDATE to 180+ |
| Years of Data | 12+ | 12+ | 12+ | KEEP (consistent) |
| Categories | 6,500+ | 10K+ | 6,500+ | KEEP 6,500+ per master |

**Critical Gap**: Eye Hub shows 140+ countries, but master version specifies 180+

### Trust Bar Comparison

**tridge_eye_hub.html**: NO trust bar
**tridge-landing_2.html**: YES - black background with scrolling industry labels
- "Trusted by" label
- Industries: Food & Agriculture, Global Procurement, Trade Finance, Supply Chain, Export Markets, Commodity Trading
- Animation: horizontal scroll (18s infinite)

**Recommendation**: Add Landing's trust bar below Eye Hub hero

### Customer Logo Section

**tridge_eye_hub.html**: NO customer logos
**tridge-landing_2.html**: Section exists but NO logos rendered
- Section title: "Trusted by the Global Trade Ecosystem"
- Context: "Millions of buyers and suppliers already operate on Tridge"
- Location: After "How It Works" section

**Recommendation**: Add customer logo section with TBU placeholder per CLAUDE.md line 32

### Social Proof Placement

**tridge_eye_hub.html**:
- Hero stats (inline, 4 boxes)
- No external validation

**tridge-landing_2.html**:
- Hero stats (inline, 3 boxes)
- Trust bar (immediately below hero)
- Scale section (dedicated, after How It Works)

**Recommendation**: 3-layer trust architecture
1. Hero: inline stats (1M+ / 180+ / 12+ / 350K+)
2. Trust Bar: immediately below hero (industries)
3. Scale Section: before final CTA (customer logos TBU)

---

## 3. CTA Effectiveness Analysis

### CTA Inventory

#### tridge_eye_hub.html
| Location | Type | Text | Destination | Implementation | Issue |
|----------|------|------|-------------|----------------|-------|
| Nav | Primary | "Request Demo" | #hub-cta | Anchor link | OK |
| Hero | Primary | "Find Your Use Case" | #navigate | Anchor link | Indirect |
| Hero | Ghost | "See the Value Stack" | #stack | Anchor link | Indirect |
| Footer CTA | Primary | "Request a Demo" | mailto placeholder | Email link | Broken |
| Footer CTA | Ghost | "Explore Tridge Eye" | https://eye.tridge.com | External | OK |

**Issues**:
- No direct demo request in hero
- Email links use placeholder format (requires JS to decode)
- 2 clicks to request demo from hero (via #navigate)

#### tridge-landing_2.html
| Location | Type | Text | Destination | Implementation | Issue |
|----------|------|------|-------------|----------------|-------|
| Nav | Primary | "Request Demo" | alert() | JavaScript | Non-functional |
| Hero | Primary | "Request Demo" | alert() | JavaScript | Non-functional |
| Hero | Ghost | "See How It Works" | #how | Anchor link | OK |
| Final CTA | White | "Request Executive Demo" | alert() | JavaScript | Non-functional |
| Final CTA | Outline | "Talk to Sales" | alert() | JavaScript | Non-functional |

**Issues**:
- ALL demo CTAs are placeholder alerts
- No actual conversion path
- "Request Executive Demo" is good copy but non-functional

### CTA Hierarchy

**tridge_eye_hub.html**: 3-tier (Find Use Case → See Stack → Request Demo)
- Strength: Self-qualification journey
- Weakness: Too many steps to conversion

**tridge-landing_2.html**: 2-tier (Request Demo / See How It Works)
- Strength: Direct conversion path
- Weakness: No self-service qualification

### CTA Language Comparison

| Context | Eye Hub | Landing | Best Choice | Rationale |
|---------|---------|---------|-------------|-----------|
| Primary | "Request a Demo" | "Request Demo" | "Request Demo" | Shorter, more urgent |
| Executive | - | "Request Executive Demo" | "Request Executive Demo" | Better for final CTA |
| Alt CTA | "Explore Tridge Eye" | "Talk to Sales" | "Talk to Sales" | More human, less product-centric |
| Nav | "Request Demo" | "Request Demo" | "Request Demo" | Consistent |

### Drop-off Prevention

**tridge_eye_hub.html**:
- Persona-based routing reduces mismatch drop-off
- Interactive finder (market + module selection) keeps engagement
- Multiple anchor links create scroll depth

**tridge-landing_2.html**:
- Scroll reveal animations maintain attention
- Comparison table (Generic AI vs Tridge) addresses objections
- Vision section creates FOMO ("operate this system or compete against it")

**Recommendation**: Combine persona routing (Eye Hub) + comparison table (Landing) + direct CTA (Landing structure, Eye Hub links)

---

## 4. Structure Gap Analysis

### What Exists ONLY in tridge_eye_hub.html

#### 1. Persona Navigation Section
```
- "What Are You Trying to Do?"
- 3 personas: Buyers/Procurement, Exporters/Sellers, Operators/Traders
- Each persona links to relevant pages
- Interactive self-qualification
```
**Value**: Reduces bounce by matching visitor to relevant content immediately
**Integration**: KEEP as Section 2 (after hero + trust bar)

#### 2. Value Stack Section
```
- "Four Layers. Each Valuable Alone. Compounding Together."
- Layered visualization: Market Intelligence → Supplier Discovery → Price Benchmarking → Outreach
- Each layer has standalone value + compounding effect
```
**Value**: Explains platform depth without overwhelming
**Integration**: KEEP as Section 3

#### 3. Atomic Modules Grid
```
- 6 clickable cards: Market Intelligence, Supplier Discovery, Price Benchmarking, Purchase Development, Export Solution, Trade Execution
- Each links to dedicated page
```
**Value**: Hub structure for deep navigation
**Integration**: KEEP as Section 4 (after stack)

#### 4. Formula Section
```
- "Intelligence That Scales to Any Market or Role"
- Variable selector: Market × Module = Relevant Intelligence
```
**Value**: Demonstrates flexibility/customization
**Integration**: KEEP as Section 5

#### 5. Interactive Market/Module Finder
```
- Clickable buttons: Cocoa, Soybean, Palm Oil (some TBU)
- Module filters: MI, SD, PB, PD, ES, TE
- Dynamic filtering
```
**Value**: Interactive qualification, increases engagement
**Integration**: KEEP as Section 6

#### 6. Hero Dashboard Mock
```
- Live intelligence dashboard visualization
- Price benchmarks, supply share, AI outreach status
- Tabs: Price Intel, Suppliers, Trade Flows, Outreach
```
**Value**: Immediately shows platform capability (not just concept)
**Integration**: KEEP in hero right column

### What Exists ONLY in tridge-landing_2.html

#### 1. Mission Section
```
- "From Food & Agriculture to All Global Trade"
- Expansion timeline: Data → Intelligence → Agents
```
**Value**: Legitimacy through origin story
**Integration**: ADD as early section (after persona nav, before problem)

#### 2. Problem Section
```
- "Global Trade Is Still Broken"
- 4 pain points: Data Fragmentation, Discovery Friction, Execution Gaps, Scale Barriers
- Problem statement: "Companies don't lack opportunities — they lack execution intelligence"
```
**Value**: Problem-aware positioning (enters conversation in prospect's mind)
**Integration**: ADD before solution pillars

#### 3. Solution Pillars (4-pillar structure)
```
- 01: Proprietary Data Foundation (12+ years)
- 02: AI-Native Execution Agents
- 03: Verified Global Network (1M+ users)
- 04: Domain-Specific Intelligence
```
**Value**: Structured differentiation
**Integration**: MERGE with Eye Hub's value stack (create hybrid)

#### 4. Benefits Section
```
- "Grow Faster. Operate Smarter."
- 4 benefits: Speed, Precision, Scale, Intelligence
- Color-coded tags (cyan, blue, green, yellow)
```
**Value**: Outcome-focused (vs. feature-focused)
**Integration**: ADD after solution, before why-us

#### 5. Comparison Table
```
- Generic AI vs Tridge
- 5 rows: General-purpose vs Built for trade, Scraped vs Native data, Insights vs Execution, Customization vs Ontology ready, No network vs Millions active
```
**Value**: Direct competitive positioning
**Integration**: ADD in Why Us section (merge with Eye Hub's differentiators)

#### 6. Differentiators (4 points)
```
- 01: 12+ Years of Native Intelligence
- 02: We Understand Trade Better
- 03: Millions of Users. Real Activity
- 04: Outcomes, Not Suggestions
```
**Value**: Addresses "why us" with specificity
**Integration**: KEEP all 4, add after comparison table

#### 7. How It Works (3 steps)
```
- 01: Define Your Needs → domain ontology
- 02: AI Agents Activate → orchestrate workflows
- 03: Execute & Scale → close deals + data advantage
```
**Value**: Simplifies complex platform into linear flow
**Integration**: ADD before Scale section

#### 8. Scale Section
```
- "Trusted by the Global Trade Ecosystem"
- 4 metrics in grid: 1M+ users, 12+ years, 180+ countries, 10K+ categories
```
**Value**: Network effect positioning
**Integration**: ADD before Vision section (NOTE: use 6,500+ not 10K+ per master)

#### 9. Vision Section
```
- "Trade Will Be Run by Autonomous Agents"
- Future positioning: "operate this system or compete against it"
- 3 layers: Data Layer, Execution Layer, Network Layer
```
**Value**: Thought leadership + FOMO
**Integration**: ADD before final CTA

#### 10. Trust Bar (industries)
```
- Black background scrolling bar
- "Trusted by" + industry labels
```
**Value**: Immediate credibility signal
**Integration**: ADD below hero

### What's Common (Keep Best Version)

| Element | Eye Hub Version | Landing Version | Keep |
|---------|-----------------|-----------------|------|
| Hero headline | "Research Stops Short. Execution Is the Gap." | "AI That Executes Global Trade" | Eye Hub |
| Hero stats | 4 boxes (350K, 6.5K, 140, 12) | 3 boxes (1M+, 12+, 180+) | Hybrid: 4 boxes with Landing numbers |
| Hero CTA primary | "Find Your Use Case" | "Request Demo" | Landing (direct) |
| Hero CTA secondary | "See the Value Stack" | "See How It Works" | "See How It Works" (clearer) |
| Final CTA title | "Real Intelligence. Real Action. Start Today." | "Start Transforming Your Trade Operations Today" | Landing (stronger) |
| Final CTA primary | "Request a Demo" | "Request Executive Demo" | Landing (more specific) |
| Final CTA secondary | "Explore Tridge Eye" | "Talk to Sales" | Landing (more human) |
| Footer | Standard | Standard | Merge (use Landing's structure) |

---

## 5. Synergy Points for Integration

### High-Value Combinations

#### 1. Hero Section Hybrid
**Combine**:
- Eye Hub: Headline ("Research Stops Short. Execution Is the Gap.") + Dashboard Mock
- Landing: Trust stats (1M+, 180+, 12+) + Direct CTA ("Request Demo")

**Structure**:
```
Hero
├─ Left: Headline + Sub + CTA (Request Demo / See How It Works) + Stats (1M+/180+/12+/350K+)
└─ Right: Dashboard Mock (from Eye Hub)
```

#### 2. Trust Signal Stack
**Layer 1**: Hero stats (inline, 4 boxes)
**Layer 2**: Trust bar (Landing, immediately below hero)
**Layer 3**: Scale section (Landing, before final CTA) + Customer logos TBU

#### 3. Problem-Solution Bridge
**Flow**:
1. Persona Nav (Eye Hub) → self-qualification
2. Mission (Landing) → legitimacy
3. Problem (Landing) → problem-aware positioning
4. Value Stack (Eye Hub) → solution architecture
5. Solution Pillars (Landing) → differentiation details

#### 4. Qualification + Conversion
**Flow**:
1. Interactive Finder (Eye Hub) → engagement
2. How It Works (Landing) → process clarity
3. Vision (Landing) → thought leadership
4. Final CTA (Landing copy + Eye Hub links) → conversion

---

## 6. Specific Recommendations for Integration

### A. Assets to Extract from tridge_eye_hub.html

#### MUST KEEP (Core IP)
1. Headline: "Research Stops Short. Execution Is the Gap."
2. Hero Dashboard Mock (live intelligence visualization)
3. Persona Navigation Section (3-path self-qualification)
4. Value Stack Section (4 layers, compounding)
5. Atomic Modules Grid (6 cards with links)
6. Formula Section (market × module selector)
7. Interactive Finder (market + module filtering)

#### CAN ENHANCE
1. Hero CTA: Change "Find Your Use Case" → "Request Demo" (more direct)
2. Stats: Update 140+ → 180+ countries
3. Stats: Add "1M+ Users" (missing)

### B. Assets to Extract from tridge-landing_2.html

#### MUST ADD (Missing from Eye Hub)
1. Trust bar (black, scrolling industries)
2. Mission section (Food & Ag → All Trade)
3. Problem section (4 pain points + problem statement)
4. Benefits section (4 outcomes with color tags)
5. Comparison table (Generic AI vs Tridge)
6. Differentiators (4 points with numbering)
7. How It Works (3 steps simplified)
8. Scale section (network effect + metrics grid)
9. Vision section (autonomous agents future)

#### MUST UPDATE
1. Stats: 10K+ → 6,500+ categories (per master)
2. CTA links: alert() → actual contact-sales.html

### C. Assets to Create (Not in Either)

#### 1. Customer Logo Section
**Location**: Scale section (after How It Works)
**Format**: TBU placeholder with note
```html
<!-- [TBU-LOGO-01] Customer logo grid: 8-12 logos, grayscale, 140px width, approved logos only -->
```

#### 2. Functional CTA Links
**Primary CTA**: https://eye.tridge.com
**Secondary CTA**: contact-sales.html (to be created separately)

#### 3. Hybrid Stats Bar
**Format**: 4-box inline (below hero CTA)
**Content**: 1M+ Users | 180+ Countries | 12+ Years | 350K+ Companies

---

## 7. Priority Improvements

### Critical (P0) - Blocking Conversion

#### 1. Fix CTA Implementation
**Issue**: Eye Hub uses mailto placeholder, Landing uses alert()
**Fix**: 
- Primary CTA "Get Started" → https://eye.tridge.com
- Secondary CTA "Request Demo" → contact-sales.html
- Remove all alert() and email placeholders

#### 2. Update Trust Indicators
**Issue**: Eye Hub shows 140+ countries (master specifies 180+)
**Fix**: Update all instances to 180+

#### 3. Add Trust Bar
**Issue**: Eye Hub has no trust signal between hero and content
**Fix**: Insert Landing's trust bar immediately below hero

#### 4. Unify Stats Display
**Issue**: Eye Hub shows 4 metrics, Landing shows 3, neither shows complete set
**Fix**: Create 4-box display: 1M+ | 180+ | 12+ | 350K+

### High Priority (P1) - Conversion Optimization

#### 5. Add Comparison Table
**Issue**: Eye Hub doesn't address "why not generic AI" objection
**Fix**: Insert Landing's comparison table in Why Us equivalent section

#### 6. Add Problem Section
**Issue**: Eye Hub jumps to solution without establishing pain
**Fix**: Insert Landing's problem section after persona nav

#### 7. Simplify Hero CTA
**Issue**: Eye Hub's "Find Your Use Case" is indirect
**Fix**: Change to "Request Demo" (direct conversion)

#### 8. Add Customer Logos
**Issue**: Neither file has actual customer logos (trust gap)
**Fix**: Add TBU placeholder in Scale section

### Medium Priority (P2) - Engagement

#### 9. Add Vision Section
**Issue**: Eye Hub doesn't position future/thought leadership
**Fix**: Insert Landing's Vision section before final CTA

#### 10. Add Benefits Section
**Issue**: Eye Hub focuses on features, not outcomes
**Fix**: Insert Landing's Benefits section after solution

#### 11. Merge Solution Structures
**Issue**: Eye Hub has "Value Stack", Landing has "Solution Pillars" (redundant)
**Fix**: Create hybrid section (4 layers + 4 pillars = unified architecture)

### Low Priority (P3) - Polish

#### 12. Optimize Final CTA Copy
**Issue**: Eye Hub's "Real Intelligence. Real Action." is weaker
**Fix**: Use Landing's "Start Transforming Your Trade Operations Today"

#### 13. Standardize Section Eyebrows
**Issue**: Inconsistent eyebrow styling/copy
**Fix**: Audit and align (Eye Hub uses more creative labels)

---

## 8. Integration Roadmap

### Recommended Section Order for index.html

```
01. Hero (Eye Hub headline + Landing stats + Eye Hub dashboard + Landing direct CTA)
02. Trust Bar (Landing - industries scrolling)
03. Persona Navigation (Eye Hub - 3 paths)
04. Mission (Landing - legitimacy)
05. Problem (Landing - pain points)
06. Value Stack (Eye Hub - 4 layers) + Solution Pillars (Landing - merge)
07. Benefits (Landing - 4 outcomes)
08. Atomic Modules (Eye Hub - 6 cards)
09. Why Us (Eye Hub differentiators) + Comparison Table (Landing)
10. Formula (Eye Hub - market × module)
11. Interactive Finder (Eye Hub - engagement)
12. How It Works (Landing - 3 steps)
13. Scale (Landing - network + metrics) + Customer Logos (TBU)
14. Vision (Landing - future positioning)
15. Final CTA (Landing copy + correct links)
16. Footer (Landing structure)
```

### File Size Estimate
- Eye Hub: 486 lines
- Landing: 1068 lines
- Integrated (estimated): 1200-1400 lines (after deduplication)

---

## 9. Conversion Funnel Mapping

### Current Funnels

#### tridge_eye_hub.html
```
Entry → Hero → Persona Nav → Atomic Grid → Finder → Footer CTA
Drop-off points:
- Hero (no direct conversion)
- Persona Nav (3-layer qualification = friction)
- Footer CTA (email link broken)
```

#### tridge-landing_2.html
```
Entry → Hero → Trust Bar → Mission → Problem → Solution → Benefits → How → CTA
Drop-off points:
- All CTAs non-functional
- No persona routing (high mismatch risk)
- No interactive elements (scroll fatigue)
```

### Optimized Integrated Funnel

```
Entry
├─ HERO (Research Stops Short + Dashboard + Request Demo CTA)
├─ TRUST BAR (industries)
├─ PERSONA NAV (self-qualify: Buyer/Exporter/Operator)
│  └─ Each persona sees relevant atomic cards highlighted
├─ PROBLEM (if scrolled past nav = high intent)
├─ SOLUTION (value stack + pillars)
├─ BENEFITS (outcomes)
├─ COMPARISON (objection handling)
├─ INTERACTIVE FINDER (re-engagement)
├─ HOW IT WORKS (process clarity)
├─ SCALE + LOGOS (social proof)
├─ VISION (thought leadership)
└─ FINAL CTA (Request Executive Demo / Talk to Sales)

Conversion exits:
1. Hero CTA (direct, high intent)
2. Persona Nav (qualified, medium intent)
3. Interactive Finder (engaged, medium-high intent)
4. Final CTA (convinced, high intent)
```

---

## 10. B2B Scorecard Summary

### Value Clarity
| Criterion | Eye Hub | Landing | Integrated Target |
|-----------|---------|---------|-------------------|
| 5-second headline test | 9/10 | 6/10 | 9/10 |
| Persona identification | 9/10 | 5/10 | 9/10 |
| Differentiator clarity | 7/10 | 8/10 | 9/10 |
| **Subtotal** | **25/30** | **19/30** | **27/30** |

### Trust Signals
| Criterion | Eye Hub | Landing | Integrated Target |
|-----------|---------|---------|-------------------|
| Numerical credibility | 6/10 | 8/10 | 9/10 |
| Customer logos | 0/10 | 0/10 | 5/10 (TBU) |
| Social proof placement | 4/10 | 8/10 | 9/10 |
| **Subtotal** | **10/30** | **16/30** | **23/30** |

### CTA Effectiveness
| Criterion | Eye Hub | Landing | Integrated Target |
|-----------|---------|---------|-------------------|
| CTA clarity | 6/10 | 8/10 | 9/10 |
| Clicks to demo | 5/10 | 8/10 | 9/10 |
| Drop-off prevention | 8/10 | 6/10 | 9/10 |
| **Subtotal** | **19/30** | **22/30** | **27/30** |

### Structure Efficiency
| Criterion | Eye Hub | Landing | Integrated Target |
|-----------|---------|---------|-------------------|
| Content hierarchy | 8/10 | 9/10 | 9/10 |
| Engagement elements | 9/10 | 5/10 | 9/10 |
| Conversion funnel | 6/10 | 7/10 | 9/10 |
| **Subtotal** | **23/30** | **21/30** | **27/30** |

### Overall B2B Conversion Score
- **tridge_eye_hub.html**: 77/120 (64%)
- **tridge-landing_2.html**: 78/120 (65%)
- **Integrated Target**: 104/120 (87%)

---

## Key Takeaways for Integration

1. **Use Eye Hub as BASE**: Headline, persona nav, dashboard mock, interactive elements
2. **Inject Landing TRUST**: Stats (1M+/180+), trust bar, comparison table, scale section
3. **Fix ALL CTAs**: Remove placeholders, link to eye.tridge.com + contact-sales.html
4. **Add MISSING**: Customer logos (TBU), problem section, benefits section, vision section
5. **Update STATS**: 140+ → 180+ countries, add 1M+ users, keep 6,500+ categories
6. **Merge SOLUTIONS**: Combine value stack (Eye Hub) + solution pillars (Landing) into unified architecture

**Next Agent**: Integrator (use this report as specification)
