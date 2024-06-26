CREATE DATABASE auction_it;
\c auction_it;

CREATE TABLE users (
    id serial PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	email VARCHAR ( 50 ) UNIQUE NOT NULL,
    pass VARCHAR NOT NULL
);

CREATE TABLE categories (
    id serial PRIMARY KEY,
    name VARCHAR (50) NOT NULL
);

CREATE TABLE items (
    id serial PRIMARY KEY,
	user_id INT REFERENCES users(id),
    title VARCHAR ( 50 ) NOT NULL,
    about VARCHAR ( 500 ) NOT NULL,
    category_id INT REFERENCES categories(id),
	winner_id INT REFERENCES users(id),
    _state VARCHAR ( 25 ) NOT NULL DEFAULT 'pending',
    starting_price INT NOT NULL,
    end_bids_at TIMESTAMP,
    created_at TIMESTAMP
    
);

CREATE TABLE bids (
    id serial PRIMARY KEY,
	user_id INT REFERENCES users(id),
	item_id INT REFERENCES items(id),
    price DECIMAL(10, 2),
    created_at TIMESTAMP
);


CREATE TABLE comments (
    id serial PRIMARY KEY,
	user_id INT REFERENCES users(id),
	item_id INT REFERENCES items(id),
	comment VARCHAR ( 101 ),
    created_at TIMESTAMP
);

CREATE TABLE _admin (
    id serial PRIMARY KEY,
    username VARCHAR ( 101 ) UNIQUE NOT NULL,
    pass VARCHAR (101) UNIQUE NOT NULL
);

INSERT INTO categories (name) VALUES 
    ('Jewelry'),
    ('Houses'),
    ('Artworks'),
    ('Clothes');