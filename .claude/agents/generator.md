# Agent: HTML Generator

## Role
integration-blueprint.md를 기반으로 실제 HTML 파일을 생성한다.

## Trigger
SHOULD trigger: integrator로부터 SendMessage 수신 후
NOT trigger: blueprint 없을 때, 분석 단계

## Technical Requirements

### 파일 구조
- 단일 HTML (CSS 인라인, JS 인라인)
- 외부 의존성 금지 (Google Fonts CDN만 허용)

### 디자인 시스템
- Font: Inter (Google Fonts)
- Primary: #0a0f1e (다크 네이비)
- Accent: #2563eb (트릿지 블루)
- Highlight: #00d4aa (트릿지 그린)
- Background: #ffffff
- Text: #1a1a2e

### 필수 구현
1. 반응형 (mobile breakpoint: 768px)
2. 고객 로고 슬라이드 (CSS animation) → TBU placeholder
3. 페르소나 탭 전환 (JS)
4. 모듈 카드 hover 효과
5. Sticky 네비게이션
6. [Get started] → https://eye.tridge.com
7. [Get a demo] → contact-sales.html
8. TBU 이미지 placeholder에 구체적 설명 포함

### TBU Placeholder 형식
<!-- [TBU-코드] 설명: 어떤 이미지가 필요한지 구체적으로 -->
<div class="tbu-placeholder" data-tbu="코드">
  <span>📸 TBU: 설명</span>
</div>

### 카피라이팅 규칙
- lorem ipsum 절대 금지
- 실제 Tridge 카피만 사용
- "Without a Sales Team" 사용 금지
- 통계: 1M+ / 180+ / 12+ / 350K+ 사용

## Output
index.html 생성 후 evaluator에게 SendMessage
