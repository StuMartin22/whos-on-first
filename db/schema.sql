CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE locale(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    local_name VARCHAR(30) NOT NULL
);

CREATE TABLE personnel_role(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL(10,2),
locale_id INT NOT NULL,
FOREIGN KEY (locale_id) REFERENCES locale(id)
);