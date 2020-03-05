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
ans_section = (SELECT questions.section FROM questions WHERE answers.question_id = questions.id),
WHERE user_id = ?
`

sql.insertResults = `
INSERT INTO results
SET user_id = ?,
InboundScore = IF ((SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'broadcast') >= 25, (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'broadcast'), 25),
FoundationalScore = IF ((SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'relationship') >= 25, (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'relationship'), 25),
AdvancedScore = IF ((SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'responsive') >= 25, (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'responsive'), 25),
AutonomousScore = IF ((SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'lifecycle') >= 25, (SELECT SUM(answers.weighted) FROM answers WHERE user_id = ? AND answers.ans_section = 'lifecycle'), 25),
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
SELECT InboundScore, FoundationalScore, AdvancedScore, AutonomousScore FROM results WHERE user_id = ?
`

