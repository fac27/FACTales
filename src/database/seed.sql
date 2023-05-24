BEGIN;

INSERT INTO users (user_name) VALUES
    ('Cameo'),
    ('Alphonso'),
    ('Mark'),
    ('Zakarie'),
    ('Tom'),
    ('Niete'),
    ('Simon'),
    ('Beth'),
    ('Taha')
ON CONFLICT DO NOTHING;


INSERT INTO
    movies (movie_title, director)
VALUES
    ('Romeo and Juliet', 'Baz Lurhrmann'),
    ('Hamlet', 'Kenneth Branagh') 
ON CONFLICT DO NOTHING;


INSERT INTO
    books (book_title, author)
VALUES
    ('Of Mice and Men', 'John Steinbeck'),
    ('An Inspector Calls', 'J. B. Priestly') 
ON CONFLICT DO NOTHING;

        
INSERT INTO movie_recommendations (user_id, movie_id) VALUES
    (4, 1),
    (2, 1),
    (4, 2) 
ON CONFLICT DO NOTHING;


INSERT INTO book_recommendations (user_id, book_id) VALUES
    (4, 2),
    (7, 1),
    (6, 2) 
ON CONFLICT DO NOTHING;

COMMIT;