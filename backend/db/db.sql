CREATE DATABASE auction_it;
USE auction_it;

CREATE TABLE users (
    id serial PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	email VARCHAR ( 50 ) UNIQUE NOT NULL,
    user_pass VARCHAR ( 50 ) NOT NULL
);

CREATE TABLE items (
    id serial PRIMARY KEY,
	user_id INT REFERENCES users(id),
	winner_id INT REFERENCES users(id),
    starting_price DECIMAL(10, 2),
    end_bids_at TIMESTAMP,
    created_at TIMESTAMP
    
);

CREATE TABLE bids (
    id serial PRIMARY KEY,
	user_id INT REFERENCES users(id),
	item_id INT REFERENCES items(id),
    price DECIMAL(10, 2),
    created_at TIMESTAMP,
);


CREATE TABLE comments (
    id serial PRIMARY KEY,
	user_id INT REFERENCES users(id),
	item_id INT REFERENCES items(id),
	comment VARCHAR ( 101 ),
    created_at TIMESTAMP,
);

CREATE TABLE _admin (
    id serial PRIMARY KEY,
    username VARCHAR ( 101 ) UNIQUE NOT NULL,
    pass VARCHAR (101) UNIQUE NOT NULL
);

INSERT INTO _admin (username, pass) VALUES ('admin', 'admin');