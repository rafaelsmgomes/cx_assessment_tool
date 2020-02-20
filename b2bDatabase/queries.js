const sql = module.exports = {};

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
answers.recommendation = IF (answers.ans_value >= 50,
    (SELECT questions.rec_high FROM questions WHERE questions.id= question_id),
    (SELECT questions.rec_low FROM questions WHERE questions.id= question_id)) 
WHERE user_id = ?
`

sql.insertResults = `
INSERT INTO results
SET user_id = ?,
BroadcastScore = IF ((SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'broadcast') >= 25, (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'broadcast'), 25),
RelationshipScore = IF ((SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'relationship') >= 25, (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'relationship'), 25),
ResponsiveScore = IF ((SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'responsive') >= 25, (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'responsive'), 25),
LifecycleScore = IF ((SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'lifecycle') >= 25, (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'lifecycle'), 25),
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

sql.sendDataToPDF = `SELECT ans_value, question_id, ans_section FROM answers WHERE user_id = ? ORDER BY question_id ASC;
SELECT companyName, id FROM users WHERE id = ?;
SELECT BroadcastScore, ResponsiveScore, RelationshipScore, LifecycleScore FROM results WHERE user_id = ?
`

