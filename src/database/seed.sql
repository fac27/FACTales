BEGIN;

<<<<<<< HEAD
INSERT INTO
    users (user_id, user_name)
VALUES
    (1, 'Cameo'),
    (2, 'Alphonso'),
    (3, 'Mark'),
    (4, 'Zakarie'),
    (5, 'Tom'),
    (6, 'Niete'),
    (7, 'Simon'),
    (8, 'Beth'),
    (9, 'Taha') ON CONFLICT DO NOTHING;
=======
INSERT INTO users (name) VALUES
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
>>>>>>> fly-volumes

INSERT INTO
    movies (movie, director)
VALUES
    ('Romeo and Juliet', 'Baz Lurhrmann'),
    ('Hamlet', 'Kenneth Branagh') ON CONFLICT DO NOTHING;

INSERT INTO
    books (book, author)
VALUES
    ('Of Mice and Men', 'John Steinbeck'),
<<<<<<< HEAD
    ('An Inspector Calls', 'J. B. Priestly') ON CONFLICT DO NOTHING;

INSERT INTO
    movie_recommendations (user_id, movie_id)
VALUES
=======
    ('An Inspector Calls', 'J. B. Priestly')
ON CONFLICT DO NOTHING;
        
INSERT INTO movie_recommendations (user_id, movie_id) VALUES
>>>>>>> fly-volumes
    (4, 1),
    (2, 1),
    (4, 2) ON CONFLICT DO NOTHING;

<<<<<<< HEAD
INSERT INTO
    book_recommendations (user_id, book_id)
VALUES
=======
INSERT INTO book_recommendations (user_id, book_id) VALUES
>>>>>>> fly-volumes
    (4, 2),
    (7, 1),
    (6, 2) ON CONFLICT DO NOTHING;

COMMIT;