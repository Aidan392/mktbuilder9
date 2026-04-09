# Skill: Website Improver Orchestrator

## Purpose
4개 에이전트를 순서대로 조율하여 개선된 HTML을 완성한다.

## Execution Flow
START
↓
Node 1: analyst
→ analysis-report.md 생성
↓
Node 2: integrator
→ integration-blueprint.md 생성
↓
Node 3: generator
→ index.html 생성
↓
Node 4: evaluator
→ 80점 이상? → END
→ 80점 미만? → Node 3 반환 (최대 3회)

## Error Handling
- Node 1 실패: URL 접근 불가 → 로컬 HTML 파일로 대체
- Node 3 실패: blueprint 누락 → integrator 재실행
- Node 4 3회 실패: 최고점 버전으로 강제 완료

## Output Files
- analysis-report.md
- integration-blueprint.md
- index.html (최종 결과물)
- evaluation-report.md
