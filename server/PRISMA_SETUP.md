# Prisma setup

1. From the repository root, install dependencies with `npm run setup` (or run `npm install` in `server/`).
2. In `server/`, copy `.env.example` to `.env` and replace the placeholder username/password with your local PostgreSQL credentials. Create the `threadbase` database first.
3. In `server/`, run:
   ```sh
   npx prisma migrate dev --name init
   ```
4. Start the API with `npm start` from `server/`. The terminal should print the Prisma connection message before the server listening message.
5. Keep `.env` private and never commit database credentials. Commit migration files, not your real environment file.

The Prisma schema defines the Thread model; the migration command creates the SQL migration, applies it to PostgreSQL, and generates Prisma Client. The existing in-memory routes are intentionally unchanged for this lesson; replacing their data operations is the next lesson.
