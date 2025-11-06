Notion Middleware API

This app exposes endpoints to create data in Notion databases used by UW Trivia.

Environment variables (in project .env):
- NOTION_API_KEY
- NOTION_DATABASE_EVENTS
- NOTION_DATABASE_QUESTIONS
- NOTION_DATABASE_PRIZES
- NOTION_DATABASE_PLACEMENTS

Endpoints (mount these under a URL prefix in the project):
- POST api/events/ → { title, description?, starts_at?, location? }
- POST api/questions/ → { event_id, text, choice_a, choice_b, choice_c?, choice_d?, correct_choice }
- POST api/prizes/ → { event_id, name, description?, rank, value? }
- POST api/placements/ → { event_id, participant_name, score?, rank }

All responses are JSON. This app has no templates or models; it proxies directly to Notion.

