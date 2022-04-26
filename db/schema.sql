CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE personnel_role(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL(10,2),
department_id INT NOT NULL,
FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee_info(
id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30),
last_name: VARCHAR(30),
role_id INT not NULL,
manager_id:INT to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)
)