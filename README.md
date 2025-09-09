# AstroView 🌟

A modern astrology web application that provides daily horoscopes and AI-powered astrological guidance. Built with Nuxt 3, Vue.js, and powered by OpenAI.

## Features

- **Daily Horoscopes**: AI-generated daily horoscopes for all 12 zodiac signs
- **Interactive Chat**: Ask personalized astrology questions and get AI responses
- **Beautiful UI**: Responsive design with zodiac sign themes and animations
- **Random Questions**: Curated list of astrology questions to spark conversations

## Tech Stack

- **Frontend**: Nuxt 3, Vue.js, TailwindCSS
- **Backend**: Nuxt Server API
- **Database**: Supabase (PostgreSQL) / SQLite / MySQL compatible
- **AI**: OpenAI GPT-4
- **Styling**: TailwindCSS, Headless UI, Heroicons

## Prerequisites

- Node.js 18+ 
- Database (Supabase account recommended, or local SQLite/MySQL)
- OpenAI API key

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/AstroView.git
   cd AstroView
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Fill in your credentials:
   ```
   OPENAI_API_KEY=your_openai_api_key
   SUPABASE_URL=your_supabase_url  
   SUPABASE_KEY=your_supabase_anon_key
   ```

4. **Set up the database**
   - For Supabase: Run the SQL files in `/database/` in your Supabase SQL Editor
   - For SQLite: `sqlite3 astroview.db < database/schema.sql && sqlite3 astroview.db < database/seed_data.sql`
   - See [database/README.md](database/README.md) for detailed setup instructions

5. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000)

## Database Setup

The application requires two tables:
- `Horoscopes` - stores daily horoscope content
- `questions` - contains predefined astrology questions

See [database/README.md](database/README.md) for complete setup instructions supporting SQLite, MySQL, PostgreSQL, and Supabase.

## API Endpoints

- `GET /api/getHoroscopes` - Fetch horoscope by sign and date
- `POST /api/createHoroscopes` - Generate new daily horoscopes (uses OpenAI)
- `GET /api/getRandomQuestions` - Get 3 random astrology questions
- `POST /api/askQuestion` - Chat with AI about astrology

## Development

```bash
# Run development server
npm run dev

# Build for production  
npm run build

# Preview production build
npm run preview

# Run tests
npm run test
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with [Nuxt 3](https://nuxt.com/)
- AI powered by [OpenAI](https://openai.com/)
- Database hosted on [Supabase](https://supabase.com/)
- Icons by [Heroicons](https://heroicons.com/)
