-- USER SCHEMA
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW(),
    name VARCHAR(255),
    size INT,
    industry INT,
    number_employees INT,
    country VARCHAR(255)
);

-- QUESTION SCHEMA
CREATE TABLE questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT,
    q_type VARCHAR(20),
    q_weight INT,
    recommendation_low TEXT,
    recommendation_high TEXT,
    marketing_type VARCHAR  NOT NULL,
    capability VARCHAR(255)
);

-- ANSWER SCHEMA
CREATE TABLE answers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    question_id INT,
    answer_01 DECIMAL (10, 7),
    answer_02 DECIMAL (10, 7),
    answer_03 DECIMAL (10, 7),
    answer_04 DECIMAL (10, 7),
    answer_05 DECIMAL (10, 7),
    answer_06 DECIMAL (10, 7),
    answer_07 DECIMAL (10, 7),
    answer_08 DECIMAL (10, 7),
    answer_09 DECIMAL (10, 7),
    answer_10 DECIMAL (10, 7),
    answer_11 DECIMAL (10, 7),
    answer_12 DECIMAL (10, 7),
    answer_13 DECIMAL (10, 7),
    answer_14 DECIMAL (10, 7),
    answer_15 DECIMAL (10, 7),
    answer_16 DECIMAL (10, 7),
    answer_17 DECIMAL (10, 7),
    answer_18 DECIMAL (10, 7),
    answer_19 DECIMAL (10, 7),
    answer_20 DECIMAL (10, 7),
    answer_21 DECIMAL (10, 7),
    answer_22 DECIMAL (10, 7),
    answer_23 DECIMAL (10, 7),
    answer_24 DECIMAL (10, 7),
    answer_25 DECIMAL (10, 7),
    answer_26 DECIMAL (10, 7),
    answer_27 DECIMAL (10, 7),
    answer_28 DECIMAL (10, 7),
    answer_29 DECIMAL (10, 7),
    answer_30 DECIMAL (10, 7),
    answer_31 DECIMAL (10, 7),
    answer_32 DECIMAL (10, 7),
    answer_33 DECIMAL (10, 7),
    answer_34 DECIMAL (10, 7),
    answer_35 DECIMAL (10, 7),
    answer_36 DECIMAL (10, 7),
    answer_37 DECIMAL (10, 7),
    answer_38 DECIMAL (10, 7),
    answer_39 DECIMAL (10, 7),
    answer_40 DECIMAL (10, 7),
    created_at TIMESTAMP DEFAULT NOW(),

    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(question_id) REFERENCES questions(id)
);

-- RESULTS SCHEMA
CREATE TABLE results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    ans_id INT,
    broadcast_results INT,
    responsive_results INT,
    relationship_results INT,
    beyond_results INT,
    recommendation_broadcast TEXT,
    recommendation_responsive TEXT,
    recommendation_relationship TEXT,
    recommendation_beyond TEXT,
    created_at TIMESTAMP DEFAULT NOW(),

    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(ans_id) REFERENCES answers(id)
);


