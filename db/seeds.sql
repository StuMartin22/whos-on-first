INSERT INTO department(department_name) VALUES ('Sales'),
('Upper Management'),
('Middle Management'),
('Pretend Management'),
('Human Resources');


INSERT INTO personnel_role(title, salary, locale_id)
VALUES ('Sales', '75000', 4),
('Head Honcho', '250000', 1),
('Middle Management', '100000', 2),
('Assistant to the assistant to the regional manager', '85000', 3),
('HR', '75000', 5);

INSERT INTO employee_info(id, first_name, last_name, role_id, manager_id)
VALUES