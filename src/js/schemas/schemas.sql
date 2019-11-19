CREATE TABLE user_schema (
    user_id INT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW(),
    company_name VARCHAR(255),
    company_size INT,
    company_industry INT,
    number_employees INT,
    company_country VARCHAR(255)
)