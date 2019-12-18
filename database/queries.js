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
    companyName VARCHAR(255) UNIQUE,
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
    rec_low TEXT,
    rec_high TEXT,
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
    BroadcastScore INT,
    ResponsiveScore INT,
    RelationshipScore INT,
    LifecycleScore INT,
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
    (SELECT questions.rec_high FROM questions WHERE questions.id= question_id),
    (SELECT questions.rec_low FROM questions WHERE questions.id= question_id)) 
WHERE user_id = ?
`

sql.insertResults = `
INSERT INTO results
SET user_id = ?,
BroadcastScore = (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'broadcast'),
RelationshipScore = (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'relationship'),
ResponsiveScore = (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'responsive'),
LifecycleScore = (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'lifecycle'),
rec_lifecycle = CASE
        WHEN (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'lifecycle') >= 75 THEN (SELECT overall_recommendations.high FROM overall_recommendations WHERE overall_recommendations.section = 'lifecycle')
        WHEN (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'lifecycle') >= 50 THEN (SELECT overall_recommendations.mid FROM overall_recommendations WHERE overall_recommendations.section = 'lifecycle')
        ELSE (SELECT overall_recommendations.low FROM overall_recommendations WHERE overall_recommendations.section = 'lifecycle')
    END,
rec_broadcast = CASE
        WHEN (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'broadcast') >= 75 THEN (SELECT overall_recommendations.high FROM overall_recommendations WHERE overall_recommendations.section = 'broadcast')
        WHEN (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'broadcast') >= 50 THEN (SELECT overall_recommendations.mid FROM overall_recommendations WHERE overall_recommendations.section = 'broadcast')
        ELSE (SELECT overall_recommendations.low FROM overall_recommendations WHERE overall_recommendations.section = 'broadcast')
    END,
rec_relationship = CASE
        WHEN (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'relationship') >= 75 THEN (SELECT overall_recommendations.high FROM overall_recommendations WHERE overall_recommendations.section = 'relationship')
        WHEN (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'relationship') >= 50 THEN (SELECT overall_recommendations.mid FROM overall_recommendations WHERE overall_recommendations.section = 'relationship')
        ELSE (SELECT overall_recommendations.low FROM overall_recommendations WHERE overall_recommendations.section = 'relationship')
    END,
rec_responsive = CASE
        WHEN (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'responsive') >= 75 THEN (SELECT overall_recommendations.high FROM overall_recommendations WHERE overall_recommendations.section = 'responsive')
        WHEN (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'responsive') >= 50 THEN (SELECT overall_recommendations.mid FROM overall_recommendations WHERE overall_recommendations.section = 'responsive')
        ELSE (SELECT overall_recommendations.low FROM overall_recommendations WHERE overall_recommendations.section = 'responsive')
    END
`

sql.insertUser = `INSERT INTO users (
    id,
    companyName,
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
