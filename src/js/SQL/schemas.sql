-- USER SCHEMA
CREATE TABLE users (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW(),
    user_name VARCHAR(255) UNIQUE,
    size INT,
    industry INT,
    number_employees INT,
    country VARCHAR(255)
);

-- QUESTION SCHEMA
CREATE TABLE questions (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    question TEXT,
    q_type VARCHAR(20),
    q_weight DECIMAL(3,3),
    recommendation_low TEXT,
    recommendation_high TEXT,
    marketing_type VARCHAR(40),
    capability VARCHAR(255)
);

-- ANSWER SCHEMA
CREATE TABLE answers (
    user_id INTEGER NOT NULL, -- test this NOT NULL
    question_id INTEGER NOT NULL,
    ans_value INT,
    ans_text TEXT,

    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(question_id) REFERENCES questions(id),

    PRIMARY KEY (user_id, question_id)
);

-- RESULTS SCHEMA
CREATE TABLE results (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    user_id INTEGER,
    broadcast_results INT,
    responsive_results INT,
    relationship_results INT,
    beyond_results INT,
    recommendation_broadcast TEXT,
    recommendation_responsive TEXT,
    recommendation_relationship TEXT,
    recommendation_beyond TEXT,
    created_at TIMESTAMP DEFAULT NOW(),

    FOREIGN KEY(user_id) REFERENCES users(id)
);

