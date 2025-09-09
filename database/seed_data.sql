-- AstroView Sample Data
-- Sample questions and horoscopes for development and testing

-- Insert sample questions for the astrology chat feature
INSERT INTO questions (question, created_at) VALUES 
('What can you tell me about my personal relationships in the upcoming month?', '2023-08-25 04:28:01'),
('Will I experience any financial gains or losses in the near future?', '2023-08-25 04:28:01'),
('What does my horoscope suggest about my career prospects?', '2023-08-25 04:28:01'),
('Will I encounter any major obstacles or challenges in the next few weeks?', '2023-08-25 04:28:01'),
('Can you provide insights into my health and well-being?', '2023-08-25 04:28:01'),
('What spiritual guidance can you offer for my current situation?', '2023-08-25 04:28:01'),
('How will the current planetary alignments affect my mood and energy?', '2023-08-25 04:28:01'),
('What should I focus on for personal growth this month?', '2023-08-25 04:28:01'),
('Are there any travel opportunities in my future?', '2023-08-25 04:28:01'),
('What can you tell me about my creativity and artistic pursuits?', '2023-08-25 04:28:01');

-- Insert sample horoscopes for all zodiac signs
INSERT INTO Horoscopes (sign, horoscope, created_at) VALUES 
('Aries (March 21 - April 19)', 'Today is a perfect day for you to tap into your natural leadership qualities, Aries. You may find yourself taking charge in a group setting or guiding others towards success. Trust your instincts and don''t be afraid to showcase your confidence. It''s also a great day to pursue your personal goals and take action towards your dreams. Embrace your assertive side and make things happen!', '2023-08-15'),
('Taurus (April 20 - May 20)', 'Taurus, today is all about finding balance and harmony in your life. Take some time to focus on self-care and nurture yourself both mentally and physically. Avoid any conflicts or disagreements that may arise by practicing patience and understanding. Seek peace in nature or enjoy some quiet time alone. Remember, finding equilibrium within yourself will radiate to those around you.', '2023-08-15'),
('Gemini (May 21 - June 20)', 'Today will be a day of lively conversations and intellectual stimulation, Gemini. Your mind will be sharp and curious, so engage in discussions or activities that nourish your intellect. Connect with friends who inspire you and embrace their perspectives. However, be mindful of overthinking or information overload. Practice mindfulness and enjoy the journey of exploration.', '2023-08-15'),
('Cancer (June 21 - July 22)', 'Cancer, today may push you out of your comfort zone. Trust in your abilities and be open to embracing new experiences. Take risks and challenge yourself to overcome any fears or doubts that may hold you back. This is a wonderful time to set new goals and aspirations. Believe in yourself and unleash your creative potential. You may just surprise yourself with what you can achieve!', '2023-08-15'),
('Leo (July 23 - August 22)', 'Leos, today is a day to shine and be noticed. Your charming personality and magnetic energy will draw others towards you. Use this opportunity to network or collaborate with like-minded individuals who share your passions. Be confident and charismatic as you express yourself authentically. Remember, you have the power to inspire and lead others with your captivating presence.', '2023-08-15');