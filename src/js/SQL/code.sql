CREATE TABLE user_schema (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW(),
    company_name VARCHAR(255),
    company_size INT,
    company_industry INT,
    number_employees INT,
    company_country VARCHAR(255)
);

CREATE TABLE question_schema (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question VARCHAR(255),
    q_type VARCHAR(255),
    q_weight INT,
    recommendation_low VARCHAR(255),
    recommendation_high VARCHAR(255),
    marketing_type VARCHAR  NOT NULL,
    capability VARCHAR(255)
);

