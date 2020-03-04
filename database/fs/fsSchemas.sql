-- USER SCHEMA 
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW(),
    companyName VARCHAR(255),
    size VARCHAR(255),
    industry VARCHAR(100),
    number_employees VARCHAR(255),
    country VARCHAR(255)
);

-- QUESTION SCHEMA
CREATE TABLE questions (
    id INTEGER PRIMARY KEY,
    question TEXT,
    q_type VARCHAR(20),
    q_weight DECIMAL(5,4),
    rec_low TEXT,
    rec_high TEXT,
    section VARCHAR(40),
    capability VARCHAR(255)
);

-- ANSWER SCHEMA
CREATE TABLE answers (
    user_id BIGINT NOT NULL, -- test this NOT NULL
    question_id INTEGER NOT NULL,
    ans_value INT,
    ans_text TEXT,
    weighted DECIMAL(8,5),
    ans_section VARCHAR(50),
    recommendation TEXT,

    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(question_id) REFERENCES questions(id),

    PRIMARY KEY (user_id, question_id)
);

-- RESULTS SCHEMA
CREATE TABLE results (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT,
    BroadcastScore INT,
    ResponsiveScore INT,
    RelationshipScore INT,
    LifecycleScore INT,
    rec_broadcast TEXT,
    rec_responsive TEXT,
    rec_relationship TEXT,
    rec_lifecycle TEXT,

    FOREIGN KEY(user_id) REFERENCES users(id)
);

-- OVERALL RECOMMENDATIONS
CREATE TABLE overall_recommendations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    section varchar(50),
	low TEXT,
    mid TEXT,
    high TEXT
);

