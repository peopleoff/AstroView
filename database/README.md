# AstroView Database Schema

This directory contains the database schema and setup files for the AstroView astrology application.

## Database Structure

AstroView uses PostgreSQL with the following main tables:

### Tables

#### `Horoscopes`
Stores daily horoscope content for all zodiac signs.

| Column | Type | Description |
|--------|------|-------------|
| `id` | bigint | Primary key (auto-increment) |
| `sign` | text | Zodiac sign with date range (e.g., "Aries (March 21 - April 19)") |
| `horoscope` | text | Daily horoscope content |
| `created_at` | date | Date the horoscope was created (defaults to current date) |

#### `questions`
Contains predefined questions that users can ask the astrology chatbot.

| Column | Type | Description |
|--------|------|-------------|
| `id` | bigint | Primary key (auto-increment) |
| `question` | text | Predefined question text |
| `created_at` | timestamp with time zone | When the question was added (defaults to now) |

## Setup Instructions

### Prerequisites
- PostgreSQL 12 or higher
- Supabase account (recommended) or local PostgreSQL installation

### Option 1: Using Supabase (Recommended)

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. In your Supabase dashboard, go to the SQL Editor
3. Run the schema creation script:
   ```sql
   -- Copy and paste the contents of schema.sql
   ```
4. Optionally, run the seed data script:
   ```sql
   -- Copy and paste the contents of seed_data.sql
   ```
5. Update your `.env` file with your Supabase credentials:
   ```
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_anon_key
   ```

### Option 2: SQLite (Local Development)

1. Create a new SQLite database:
   ```bash
   sqlite3 astroview.db < database/schema.sql
   ```
2. Optionally, insert sample data:
   ```bash
   sqlite3 astroview.db < database/seed_data.sql
   ```

### Option 3: MySQL

1. Create a new database:
   ```sql
   CREATE DATABASE astroview;
   USE astroview;
   ```
2. Run the schema script:
   ```bash
   mysql -u username -p astroview < database/schema.sql
   ```
3. Optionally, insert sample data:
   ```bash
   mysql -u username -p astroview < database/seed_data.sql
   ```

### Option 4: PostgreSQL

1. Create a new database:
   ```bash
   createdb astroview
   ```
2. Run the schema script:
   ```bash
   psql -d astroview -f database/schema.sql
   ```
3. Optionally, insert sample data:
   ```bash
   psql -d astroview -f database/seed_data.sql
   ```

## Environment Variables

Make sure to set these environment variables in your `.env` file:

```
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
# OR for local PostgreSQL:
DATABASE_URL=postgresql://username:password@localhost:5432/astroview
```

## Usage Notes

- The `Horoscopes` table is populated by the `/api/createHoroscopes` endpoint using OpenAI
- The `questions` table provides random questions for users through `/api/getRandomQuestions`
- Both tables use auto-incrementing IDs with PostgreSQL sequences
- The application expects the `sign` field to include both the sign name and date range

## Sample Data

The `seed_data.sql` file includes:
- 10 sample questions for the astrology chatbot
- 5 sample horoscopes for different zodiac signs
- Proper sequence resets to maintain data integrity

This sample data is useful for development and testing purposes.