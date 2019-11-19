const schema = module.exports = {};

schema.userSchema = `CREATE TABLE user_schema (
    user_id INT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW(),
    company_name VARCHAR(255),
    company_size INT,
    company_industry INT,
    number_employees INT,
    company_country VARCHAR(255)
)`;

schema.questionSchema = `CREATE TABLE question_schema (
    question VARCHAR(255),
    q_id INT PRIMARY KEY,
    q_type VARCHAR(255),
    q_weight INT,
    recommendation_low VARCHAR(255),
    recommendation_high VARCHAR(255),
    capability VARCHAR(255)
)`

