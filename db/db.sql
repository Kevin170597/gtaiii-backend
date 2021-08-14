CREATE DATABASE IF NOT EXISTS gta_iii;

USE gta_iii;

CREATE TABLE items_basics (
	id INT(11) NOT NULL,
    name VARCHAR(45),
    description VARCHAR(300)
);

ALTER TABLE items_basics MODIFY description VARCHAR(500);

DESCRIBE items_basics;

INSERT INTO items_basics VALUES
	(1, "Health", "heart item"),
    (2, "Star", "star item");

SELECT * FROM items_basics;

DELETE FROM items_basics WHERE id=2;

INSERT INTO items_basics VALUES (4, "Pill", "pill item");

UPDATE items_basics SET name="Píldora" WHERE id=4;
