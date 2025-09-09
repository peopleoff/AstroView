-- AstroView Database Schema
-- Generic SQL schema compatible with SQLite, MySQL, and PostgreSQL

-- Create the Horoscopes table
CREATE TABLE Horoscopes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sign TEXT,
    horoscope TEXT,
    created_at DATE DEFAULT CURRENT_DATE
);

-- Create the questions table
CREATE TABLE questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);