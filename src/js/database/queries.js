const sql = module.exports = {};

// schema.dropAllSchemas = `
//     SET FOREIGN_KEY_CHECKS = 0
//     DROP TABLE users, questions, answers, results
//     SET FOREIGN_KEY_CHECKS = 1
// `;

/**
 * Schemas
 */

sql.userSchema = `CREATE TABLE users (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW(),
    user_name VARCHAR(255) UNIQUE,
    size INT,
    industry VARCHAR(100),
    number_employees INT,
    country VARCHAR(255)
)`;

sql.questionSchema = `CREATE TABLE questions (
    id INTEGER PRIMARY KEY,
    question TEXT,
    q_type VARCHAR(20),
    q_weight DECIMAL(5,4),
    recommendation_low TEXT,
    recommendation_high TEXT,
    marketing_type VARCHAR(40),
    capability VARCHAR(255)
)`

sql.answersSchema = `CREATE TABLE answers (
    user_id INTEGER NOT NULL, -- test this NOT NULL
    question_id INTEGER NOT NULL,
    ans_value INT,
    ans_text TEXT,

    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(question_id) REFERENCES questions(id),

    PRIMARY KEY (user_id, question_id)
);`

sql.resultsSchema = `CREATE TABLE results (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    user_id INTEGER,
    broadcast_res INT,
    responsive_res INT,
    relationship_res INT,
    lifecycle_res INT,
    broadcast_rec TEXT,
    responsive_rec TEXT,
    relationship_rec TEXT,
    lifecycle_rec TEXT,
    created_at TIMESTAMP DEFAULT NOW(),

    FOREIGN KEY(user_id) REFERENCES users(id)
);`


/**
 * Insert Data
 */

// sql.insertAnswer = `INSERT INTO answers(
//     user_id,
//     question_id,
//     ans_value,
//     ans_text
// ) VALUES (
//     ?,
//     ?,
//     ?,
//     ?
// )`
sql.insertAnswer = `
INSERT INTO answers (
    user_id,
    question_id,
    ans_value,
    ans_text
) Values ?
`

sql.updateAnswers = `
UPDATE answers
SET weighted = ((SELECT questions.q_weight FROM questions WHERE answers.question_id = questions.id) * ans_value),
ans_section = (SELECT questions.marketing_type FROM questions WHERE answers.question_id = questions.id),
answers.recommendation = IF (answers.ans_value >= 75,
    (SELECT questions.recommendation_high FROM questions WHERE questions.id= question_id),
    (SELECT questions.recommendation_low FROM questions WHERE questions.id= question_id)) 
WHERE user_id = ?
`

sql.insertResults = `
INSERT INTO results
SET user_id = ?,
recommendation_broadcast = CASE
        WHEN (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'broadcast') >= 75 THEN (SELECT overall_recommendations.high FROM overall_recommendations WHERE overall_recommendations.section = 'broadcast')
        WHEN (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'broadcast') >= 50 THEN (SELECT overall_recommendations.mid FROM overall_recommendations WHERE overall_recommendations.section = 'broadcast')
        ELSE (SELECT overall_recommendations.low FROM overall_recommendations WHERE overall_recommendations.section = 'broadcast')
    END,
broadcast_results = (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'broadcast'),
recommendation_relationship = CASE
        WHEN (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'relationship') >= 75 THEN (SELECT overall_recommendations.high FROM overall_recommendations WHERE overall_recommendations.section = 'relationship')
        WHEN (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'relationship') >= 50 THEN (SELECT overall_recommendations.mid FROM overall_recommendations WHERE overall_recommendations.section = 'relationship')
        ELSE (SELECT overall_recommendations.low FROM overall_recommendations WHERE overall_recommendations.section = 'relationship')
    END,
relationship_results = (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'relationship'),
recommendation_responsive = CASE
        WHEN (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'responsive') >= 75 THEN (SELECT overall_recommendations.high FROM overall_recommendations WHERE overall_recommendations.section = 'responsive')
        WHEN (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'responsive') >= 50 THEN (SELECT overall_recommendations.mid FROM overall_recommendations WHERE overall_recommendations.section = 'responsive')
        ELSE (SELECT overall_recommendations.low FROM overall_recommendations WHERE overall_recommendations.section = 'responsive')
    END,
responsive_results = (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'responsive'),
recommendation_lifecycle = CASE
        WHEN (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'lifecycle') >= 75 THEN (SELECT overall_recommendations.high FROM overall_recommendations WHERE overall_recommendations.section = 'lifecycle')
        WHEN (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'lifecycle') >= 50 THEN (SELECT overall_recommendations.mid FROM overall_recommendations WHERE overall_recommendations.section = 'lifecycle')
        ELSE (SELECT overall_recommendations.low FROM overall_recommendations WHERE overall_recommendations.section = 'lifecycle')
    END,
lifecycle_results = (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'lifecycle')
`

sql.insertUser = `INSERT INTO users (
    id,
    user_name,
    size,
    industry,
    number_employees,
    country
) VALUES (
    ?,
    ?,
    ?,
    ?,
    ?,
    ?
)`
