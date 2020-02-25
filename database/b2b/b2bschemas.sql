-- USER SCHEMA
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW(),
    companyName VARCHAR(255),
    size BIGINT,
    industry VARCHAR(100),
    number_employees INT,
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
    marketing_type VARCHAR(40),
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

INSERT INTO overall_recommendations (
    section,
    low,
    mid,
    high
) VALUES (
    "Broadcast",
    "Organizations just getting adept at this process are only beginning to see the benefits of marketing automation and some efficiency-driving capabilities like templates and blueprints. As you continue to advance and develop your broadcast marketing skills, consider incorporating more batch-and-blast style email communications to achieve scale, while also ensuring you're maximizing your ROI from basic marketing channels like email and web. You'll also want to consider integration with your CRM to increase capacity, scale, and yield of your marketing efforts.",
    "Rome wasn't built in a day, and neither can your marketing capabilities, but you're certainly on the road to mastering \"Broadcast Marketing.\" You're finding ways to improve efficiency and scale by taking advantage of time-saving capabilities built into your marketing automation platform. Consider how you can continue to maximize the ROI of basic channel marketing like email and web, as well as integration with your CRM to increase capacity, scale, and yield of your marketing efforts.",
    "Congratulations! Your company joins top performers in \"Broadcast Marketing.\" It's clear from what you have accomplished that you have made marketing automation a priority. You have already started experiencing many of its benefits including automating marketing processes, reducing the cost of lead and customer acquisition, and improving marketing efficiencies. One Oracle CX Marketing customer, BMW Group New Zealand, indicated they were able to  deliver more than 65,000 emails to their customers and prospects in the first six months and the cost savings from this alone covered the cost of the new marketing automation platform. And according to Litmus, return on investment for email marketing programs is 38:1. Hopefully you're seeing similar ROI on your programs. Keep up the good work."
), (
    "Responsive",
    "You're on the way to being a \"Responsive Marketer\" and having  more of a conversation than a one way push. Consider now adding capabilities that help you focus on improving conversion rates and optimizing sales funnels and paths. Some capabilities to consider if you aren't already engaging in them is lead scoring, segmentation, behavioral re-targeting, A\B email testing, and testing and optimization for landing pages and websites.",
    "You're on the way to being a \"Responsive Marketer\" and having  more of a conversation than a one way push. Consider now adding capabilities that help you focus on improving conversion rates and optimizing sales funnels and paths. Some capabilities to consider if you aren't already engaging in them is behavioral re-targeting, A\B email testing, and testing and optimization for landing pages and websites.",
    "Congratulations! Your company joins top performers in \"Responsive Marketing.\" You're clearly recognizing the many benefits of improving conversion rates and optimizing sales funnels and paths. According to Gartner,  integrating four or more channels can improve campaign performance by 300%. And Accenture says 91% of customers are more likely to shop with brands that recognize, remember, and provide them with relevant offers and recommendations. One Oracle CX Marketing customer, Schibsted Media Group, indicated that targeting specific segments of subscribers to better personalize experiences netted a 23% increase in subscriber digital usage and a 5% average revenue increase per user. Hopefully you're seeing similar or even better results!"
), (
    "Relationship",
    "You're on the way to being a \"Relationship Marketer\" and successfully messaging across channels to create a seamless customer experience to increase engagement. Consider adding or improving on capabilities that let you embrace more AI-driven decision-making to increase repeat purchases and implementing a strong ABM program to increase marketing and sales alignment. In addition, AI-driven offers and intelligent orchestration should help develop your relationship marketing capabilities  to increase repeat purchasing and deepen account engagement.",
    "You're on the way to being a \"Relationship Marketer\" and successfully messaging across channels to create a seamless customer experience to increase engagement. Consider adding or improving on capabilities that let you embrace more AI-driven decision-making to increase repeat purchases. Further leveraging AI-driven offers and intelligent orchestration should help develop your relationship marketing capabilities to increase repeat purchasing and deepen account engagement.",
    "Your company gets top scores in  \"Relationship Marketing,\" but as we know, marketing is an iterative process that involves continuous measurement and management of your strategy and related marketing tactics. According to Gartner, 90% of marketers struggle to seamlessly connect more than three channels at a time. You're clearly recognizing the many benefits of more data-driven decision-making to increase engagement by connecting experiences across channels, and increasing the relevancy of your marketing programs and offers.  With all these great results it might seem like you can stop there, but the reality is, if you continuously set targets for your team you will be set to maximize both outputs and results from your marketing effort. Keep up the great work."
), (
    "Lifecycle",
    "You're on your way to delivering a unified brand experience across all customer touchpoints! Breaking down the silos is the only way to gain business insights and drive economic value from CX investments. The first step to breaking down the silos is to create a comprehensive, connected customer profile. To drive revenue growth in the experience economy, activating that customer intelligence in each of the micro-moments your customers engage is critical. These micro-moments occur on your customers’ terms and your CX strategy must enable whoever touches your customer first. This could be on your website today, but it could be a chatbot or a hand gesture tomorrow, and you need to be ready when you customers force you to be. The point is, with this connected approach, you are better armed to deliver the kind of experiences your customers have come to expect. In the Experience Economy, it’s your customers who dictate how and when they engage.",
    "You're on your way to delivering a unified brand experience across all customer touchpoints!  You're already breaking down the silos to gain business insights and drive economic value from CX investments. To drive revenue growth in the experience economy, activating that customer intelligence in each of the micro-moments your customers engage is critical. These micro-moments occur on your customers’ terms and your CX strategy must enable whoever touches your customer first. This could be on your website today, but it could be a chatbot or a hand gesture tomorrow, and you need to be ready when your customers force you to be. The point is, with this connected approach, you will be better armed to deliver the kind of experiences your customers have come to expect. In the Experience Economy, it’s your customers who dictate how and when they engage.",
    "Congratulations! Your company joins top performers in \"Beyond Marketing.\" You're a CX leader and creating truly connected experiences through connected data and insights, which is no small feat. According to Experian, the top three challenges to building a single customer profile for each customer with the highest accuracy are inability to link different technologies (40%), poor data quality (34%), and lack of relevant technology (32%). But according to Forrester, leaders in CX marketing tend to drive five times better revenue growth and outperform CX laggards on stock price growth by 29% points. Hopefully you're seeing similar or better results. Keep up the great work!"
);

