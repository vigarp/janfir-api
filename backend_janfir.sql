CREATE TABLE items (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(64), price INT, stock INT, images VARCHAR(500), PRIMARY KEY (id));

INSERT INTO items (name, price, stock, images) VALUES ("Sarung", 50000, 100, "sarung.jpg");
INSERT INTO items (name, price, stock, images) VALUES ("Peci", 25000, 50, "peci.jpg");
INSERT INTO items (name, price, stock, images) VALUES ("Koko", 500000, 500, "koko.jpg");