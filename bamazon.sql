DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(45) NULL,
    department_name VARCHAR(45) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INTEGER(4),
    PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Beats by Dr Dre", "Electronics", 99.99, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Frozen Stawberries", "Grocery", 7.99, 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Nike AirMax", "Clothing", 160.00, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Star Wars Lightsaber", "Toys", 29.99, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Xbox One", "Electronics", 299.99, 5);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Ninja Blender", "Home & Kitchen", 129.99, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Sprite", "Grocery", 2.99, 1000);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Jordan Shorts", "Clothing", 34.99, 25);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Samsung Galaxy S8", "Electronics", 740.99, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Jack Links Beef Jerky", "Grocery", 4.99, 5000);
