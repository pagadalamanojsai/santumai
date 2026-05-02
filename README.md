# SanctumAI

SanctumAI is a funeral home, cemetery, and crematorium management platform. The project is split into a Next.js frontend and a FastAPI backend.

## Project Structure

```text
sanctumai-project/
  sanctumai-frontend/   Next.js app
  sanctumai-backend/    FastAPI API
```

## Tech Stack

- Frontend: Next.js, TypeScript, Tailwind CSS, shadcn/ui
- Backend: FastAPI, SQLAlchemy, Pydantic
- Database: PostgreSQL, configured through Supabase

## Frontend Setup

```bash
cd sanctumai-frontend
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

Available frontend pages include:

- `/`
- `/dashboard`
- `/cases`
- `/contacts`
- `/plots`
- `/schedule`
- `/documents`
- `/invoices`
- `/reports`
- `/settings`

## Backend Setup

```bash
cd sanctumai-backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Open:

```text
http://localhost:8000
```

API docs:

```text
http://localhost:8000/docs
```

## Environment Variables

Create a `.env` file inside `sanctumai-backend/`:

```env
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@YOUR_SUPABASE_HOST:5432/postgres
```

For Supabase, the transaction pooler connection string is often the best option for local development if the direct connection is not IPv4 compatible.

Do not commit `.env` files. They are ignored by Git.

## Backend Endpoints

Root health check:

```text
GET /
```

Cases:

```text
POST /cases/
GET /cases/
GET /cases/{case_id}
```

## Development Notes

- Start the frontend and backend in separate terminal windows.
- Keep the backend virtual environment activated when running FastAPI commands.
- If Supabase is unreachable, the API may still start but will print a database startup warning.
- Local files such as `venv/`, `.env`, `.next/`, `node_modules/`, and `*.db` are ignored by Git.

## GitHub

Repository:

```text
https://github.com/pagadalamanojsai/santumai
```
