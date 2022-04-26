INSERT INTO department(department_name) VALUES ('Sales'),
('Upper Management'),
('Middle Management'),
('Pretend Management'),
('Other'),
('Human Resources');

INSERT INTO personnel_role(title, salary, department_id)
VALUES ('Sales', '75000', 4),
('Head Honcho', '250000', 1),
('Middle Management', '100000', 2),
('Assistant to assistant to RM', '85000', 3),
('HR', '75000', 5);

INSERT INTO employee_info(id, first_name, last_name, role_id, manager_id)
VALUES (1, 'Mike', 'Honcho', 1, NULL),
(2, 'Michael', 'Scott', 2, 1),
(3, 'Dwight', 'Schrute', 3, 2),
(4, 'Jim', 'Halpert', 4, 2),
(5, 'Pam', 'Halpert', 4, 2),
(6, 'Holly', 'Flax', 5, 2),
(7, 'Toby', 'Flenderson', 5, 2);
