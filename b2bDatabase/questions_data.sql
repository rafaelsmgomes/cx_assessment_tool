------------------------------------------------------------------------------------
-- QUESTIONS DATA
------------------------------------------------------------------------------------

INSERT INTO questions (
    id,
    question, 
    q_type, 
    q_weight, 
    rec_low, 
    rec_high, 
    marketing_type, 
    capability
) 
VALUES 
    (
        0,
        "What percentage of your sales marketing effort is automated (lead flow, website, campaigns)?", 
        "Slider", 
        .1667, 
        "Marketing Automation: Leveraging more automation is vital to transforming and streamlining your sales and marketing processes. To maximize the business benefit from marketing automation, it's important to take a holistic view and transform as many of your old processes as possible, including manual processes around email and campaign management to automating lead flow.",
        "Your organization is already taking advantage of Marketing Automation. Continue to look at your manual processes in order to continually realize efficiencies.", 
        "Broadcast",
        "Marketing Automation"
    ),
    (
        1,
        "How would you rank your use of features that are designed to give time back to marketing teams (e.g. templates, campaign blueprints, webforms etc)?", 
        "Slider", 
        .1667, 
        "Blueprints, Templates, and More: We encourage you to take more advantage of your entire Marketing Automation platform. This helps save time and money and will be key to your success. Templates, campaign blueprints, webforms, and landing pages deliver results immediately in the form of improved marketing scale, efficiency, and brand experience.",
        "Your teams are saving time because you have integrated the use of pre-built campaign blueprints and templates to standardize and scale your marketing strategy.", 
        "Broadcast",
        "Templates"
    ),
    (
        2,
        "Do you send batch and blast style communications to wide audiences? 
            A. yes
            B. sometimes
            C. no", 
        "Vertfc", 
        .1666, 
        "Batch-and-Blast: A \"batch-and-blast\" approach is a natural place to start as you learn the new system. After all, you have to learn how to walk before you can run. And for key communications and customer updates, \"batch-and-blast\" is a good option before you take advantage of more complex, time-intensive segmentation efforts.",
        "You've impemented \"batch-and-blast\" to handle customer and company wide announcements. Now it's time to consider personalization.", 
        "Broadcast",
        "Batch and Blast Emails"
    ),
    (
        3,
        "Do you send targeted emails specific to a segmented group of contacts regarding their specific interests?
            A. yes
            B. sometimes
            C. no, not really", 
        "Vertfc", 
        .1666, 
        NULL,
        NULL, 
        "Broadcast",
        "Targeted Emails"
    ),
    (
        4,
        "How would you rate your use of email and your website as marketing channels?", 
        "Dial", 
        .1666, 
        "Basic Channels (Email and Web): Email is still ranked as the single most effective tactic for engagment and retention (Gigaom Research). When it comes to web, 90% of searchers are undecided before starting their search (Omnicore Agency). That's why  you need to understand how to continue to maximize value from these two core channels.",
        "Keep up the momentum! You've streamlined your email and web marketing campaigns.", 
        "Broadcast",
        "Basic Channels (E-mail and Web)"
    ),
    (
        5,
        "Is your email/ marketing automation platform currently integrated with your CRM application?
            A. No
            B. Yes", 
        NULL, 
        .1666, 
        "CRM Integration: Marketing automation helps teams increase capacity, scale, and yield of any marketing effort. And when you integrate your CRM application, it amplifies these benefits further. For sales, this means better action lists of prospects, leads, and opportunities. For marketing, this translates to a more accurate view into the entire pipeline.",
        "Based on your response on CRM integration, you should be seeing real change in the form of better sales and marketing alignment and visibility.", 
        "Broadcast",
        "CRM Integration"
    ),
    (
        6,
        "What metrics do you track to show success in your marketing programs? 
            Click all that apply: 
            email opens 
            click-throughs 
            downloads 
            form completions 
            subscribes/unsubscribes 
            web or landing page traffic 
            event participation
            None", 
        NULL, 
        NULL, 
        NULL,
        NULL, 
        "Broadcast",
        "no score - Informational Only"
    ),
    (
        7,
        "How many marketers are on your team?
            a. 1-2
            b. 3-5
            c. 5-10
            d. 10+ ", 
        NULL, 
        NULL, 
        NULL,
        NULL, 
        "Broadcast",
        "no score - Informational Only"
    ),
    (
        8,
        "Our marketing programs are  focused towards (click all that apply)
            A. Business to Business or large considered purchases
            B. Business to in the moment Consumer purchases 
            C. Brand Awareness
            D. Business to Business to Consumer (B2B2C) purchases", 
        NULL, 
        NULL, 
        NULL,
        NULL, 
        "Broadcast",
        "no score - Informational Only"
    ),
    (
        9,
        "What is your current unsubscribe rate?
            a. Less than 0.2%
            b. Greater than 0.5%
            c. We don't track unsubscribe rates", 
        NULL, 
        NULL, 
        NULL,
        NULL, 
        "Broadcast",
        "no score - Informational Only"
    ),
    (
        10,
        "Are you coordinating across more than 2 channels (i.e. Email, web, social) in your marketing campaigns?
            a. No
            b. Sometimes 
            c. Always", 
        NULL, 
        .1, 
        "Multichannel Marketing: According to McKinsey, when using multiple channels to engage buyers, open rates increase by 84%. Gartner research indicates integrating four or more channels can improve campaign performance by 300%. And remember it's still all about the right content at the right time on the right channel.",
        "You have realized the benefit of coordinating your marketing across multiple channels. Keep up the good work.", 
        "Responsive",
        "Multichannel marketing"
    ),
    (
        11,
        "What level of automation exists in your programs/campaigns?
            a. None, we deploy manually
            b. A few
            c. Almost all", 
        NULL, 
        .1, 
        "Campaign automation: As you already know, automating campaigns can greatly increase efficiency. Adding an \"always on\" nurture campaign lets you engage prospects who have signaled their interest allowing you to intelligently add them into an adaptive nurture campaign and keep them engaged at just the right level.",
        "It's great to see you have taken the next step to gain greater efficiencies by automating campaigns where possible. Many marketers have realized great benefits running \"always on\" nurture campaigns.", 
        "Responsive",
        "Campaign Automation"
    ),
    (
        12,
        "Do your campaing allow you to automatically move a contact from one campaign into another based on their interactions?
            a. Yes
            b. No", 
        NULL, 
        .1, 
        "Adaptive Campaign Nurture Programs: Adaptive nurture campaigns leverage the predictive capabilities of machine learning to deliver different paths for different buyers, personalizing experiences with dynamic content. And when research indicates that 55% of the total emails sent across the globe are marked as SPAM (Inboxarmy), this is critical to ensuring your message gets received. ",
        "You're becoming an expert at automation. Using data- driven adaptive nurture campaigns that leverage machine learning can increase your message delivery by up to 55% (Inboxarmy).", 
        "Responsive",
        "Adaptive Campaign Nurturing"
    ),
    (
        13,
        "How personalized is your marketing content across your marketing channels?
            a. Same content for everyone
            b. Minimal, such as 'first name' or 'company'
            c. Highly personalized based on behavior", 
        NULL, 
        .1, 
        "Personalization: When you build segments based on customer intent you deliver more personalized experiences to customers and prospects.  As a result, according to McKinsey, marketers who personalize their customers' experiences can see a lift in revenue of ~15%, improve their efficiencies by 10-30%, and decrease acquisition costs by 50%.",
        "Now we're talking - it's great to see that your company has realized personalization could increase revenue by up to 15%, improve efficiencies by 10-30%, and decrease acquisition costs by 50% (McKinsey).", 
        "Responsive",
        "Personalization"
    ),
    (
        14,
        "Do you perform lead scoring to identify high value buyers?
            a. Never
            b. Sometimes
            c. Always", 
        NULL, 
        .1, 
        "Basic Lead Scoring: According to a lead scoring survey by Demand Gen Report, 41% of respondents saw improved conversion rates, 43% saw an increase in the number of marketing qualified leads, and 32% saw a rise in sales-ready leads. And organizationally, 53% of those surveyed experienced improved marketing and sales alignment with lead scoring.",
        "You get top marks for using lead scoring!", 
        "Responsive",
        "Basic Lead Scoring"
    ),
    (
        15,
        "Does your marketing automation platform score leads based on behavioral activities and profile data?
            a. Only behavioral activities
            b. Only profile data
            c. Both behavioral activities and profile data
            d. We don't use lead scoring to qualify leads", 
        NULL, 
        .1, 
        "Adaptive Lead Scoring: Integrating more of a data-driven, algorithmic lead scoring methodology takes out human bias and its resulting subjectivity. An adaptive lead scoring model combines huge amounts of historical and behavioral data with predictive modeling to instantly identify the sales leads that are most likely to convert, resulting in greater precision and outcomes.",
        "You have joined an elite group of customers that has taken their lead scoring to the next level with data-driven adaptive lead scoring.", 
        "Responsive",
        "Adaptive Lead Scoring"
    ),
    (
        16,
        "What level of segmentation drives your campaigns?
            a. wide audience or list 
            b. basic customer persona defined segments
            c. advanced segments based on profile and behavioral data", 
        NULL, 
        .1, 
        "Segmentation: According to DMA, segmented and targeted emails generate 58% of all revenue, which presents a huge opportunity for marketing teams. It allows them to move from sending a broadcast message to one that is tailored and relevant to your audiences based on behavior, personal data, or company information for improved campaign performance and ROI.",
        "Your company understands the power of segmentation - specifically it can drive up to 58% of all revenue (DMA)", 
        "Responsive",
        "Segmentation"
    ),
    (
        17,
        "Do you currently incorporate behavioral re-targeting in your marketing campaigns?
            a. never
            b. sometimes
            c. always", 
        NULL, 
        .1, 
        "Behavioral Re-Targeting: It's good you are retargeting your leads using behavioral data, but are you able to do this in real-time? The speed at which you can re-target and engage renewed interest with accurate, real-time data will determine your ultimate success at buyer acquisition through close of sale.",
        "It's great to hear that your marketing team is looking at behaviors and micro moments to gauge user intent.", 
        "Responsive",
        "Behavioral retargeting"
    ),
    (
        18,
        "Do you perform A/B email testing?  
            a. yes
            b. no", 
        NULL, 
        .1, 
        "A/B Email Testing: According to LinkedIn, 63% of companies say A/B testing is valuable for conversion rate optimization. Start by identifying one element of an email to test, e.g., focus on content elements like subject lines, headlines, or calls to action, or design elements like color choice, button design, etc., and optimize based on testing. ",
        "You're becoming a pro! Congratulations on your successful integration of email testing.", 
        "Responsive",
        "A/B Email testing"
    ),
    (
        19,
        "Do you currently use testing and optimization tools on your landing pages and website? 
            a. Yes 
            b. No",
        NULL, 
        .1, 
        "Testing and Optimization for Landing Pages and Websites: According to Taylor & Frances Group, it takes about 50 milliseconds (that’s 0.05 seconds) for users to form an opinion about your website and decide whether they’ll stay or leave. Website testing efforts can be worthwhile and, according to Steelhouse, when done correctly, can boost conversions by 300% or more.",
        "You get top scores for all the work you have been doing around testing and optimizing landing pages and websites.", 
        "Responsive",
        "Testing and Optimization for Landing Pages and Websites"
    ),
    (
        20,
        "How advanced are your targeting and segmentation processes?
            a. We haven't had the opportunity to advance in this area
            b. We create a number of filters and audiences based on profile and behavioral attributes
            c. We use an audience builder to target very specific segments and use inclusion/exclusion criteria in our model
            d. We have highly specific audience filters that target buyers in real time based on changing profile and behavior data", 
        NULL, 
        .0833, 
        "Advanced segmentation: According to Dun & Bradstreet, <20% of marketers are extremely confident their segmented campaign lists actually represent their target audience. Advanced segmentation empowers marketers to use segmentation tools and audience filters to target and engage buyers with more personalized, real-time communications based on changing profile and behavior data.",
        "It's great to see you're leveraging advanced segmentation! Hopefully you're recognizing an increase in your MQLs as a result. Keep up the good work!", 
        "Relationship",
        "Advanced Segmentation"
    ),
    (
        21,
        "Do you use any form of data science to derive segments?
            A. No
            b. We use look-a-like modeling to find prospects
            c. We use account scores and signals to identify the best prospects", 
        NULL, 
        .0833, 
        "Account Signals and Scoring: An account scoring model simplifies target prioritization in your market and identifies an account’s changing propensity to buy. Tracking important account signals provides an opportunity to engage at the right time with the right people in that account instead of relying on outdated information.",
        "Great job! With account scoring in place, you're giving your teams a better opportunity to engage at the right time with the right people in the account. ", 
        "Relationship",
        "Account signals and scoring"
    ),
    (
        22,
        "Do you orchestrate your campaigns across 4 or more digital channels (email, mobile, SMS, display ads, web, and social) to create a connected experience?
            a. yes
            b. no", 
        NULL, 
        .0833, 
        "Cross-channel orchestration: To create seamless experiences, marketers have to meet customers with consistent messaging, intent, and imagery on their preferred channels (social, web, email, events, or online advertising). B2B buyers who consume highly consistent information across multiple supplier channels are over 4x likelier to complete a high-value, low-regret purchase (Gartner).",
        "Your customers are getting a more consistent experience because you've adopted cross-channel orchestration. They're 4x more likely now to complete a high-value, low-regret purchase (Gartner).", 
        "Relationship",
        "Cross-channel orchestration"
    ),
    (
        23,
        "Do you deliver a personalized account experience across channels for contacts within that organization?
            a. Never
            b. Sometimes
            c. Yes! Always!
            d. Not applicable to our business", 
        NULL, 
        .0833, 
        "Account personalization: A successful ABM approach requires a shift from topical content designed to get the highest number of clicks, to hyper-targeted account-based content that appeals to the buying committees. With this, you can shift from developing content around the individual's interests to those of a range of stakeholders. ",
        "Well done! By personalizing content at the account level, you're better able to appeal to the buying committees your sales teams are engaged with.", 
        "Relationship",
        "Account personalization"
    ),
    (
        24,
        "Do you have an account-based marketing (ABM) program? 
            a. No.
            b. Just started one
            c. Yes, it's great
            d. Not applicable to our business", 
        NULL, 
        .0833, 
        "Account based marketing: ABM drives more revenue than any other marketing approach. According to ITSMA, up to 45% of those who incorporate ABM see at least 2x ROI. ABM is now table stakes as it shifts the success metric towards Account Lifetime Value with its increased cross-sell and up-sell opportunities. ",
        "You're a superstar! According to ITSMA, as many as 45% of those who incorporate an ABM strategy are seeing at least double the ROI.", 
        "Relationship",
        "Account based marketing"
    ),
    (
        25,
        "Do you leverage machine learning or artificial intelligence to optimize any part of your marketing campaigns? 
            a. Yes
            b. no",
        NULL, 
        .0833, 
        "Machine Learning and AI: Technology is transforming marketing faster than ever before. Add AI to the mix and marketers experience another layer of complexity. According to eMarketer, AI can help organizations bring new insights and data analysis, feed creativity, and improve organizational decision-making, all while crafting a better customer experience throughout.",
        "According to eMarketer, marketers who successfully deploy AI into their digital marketing strategy will most certainly rise above the rest. You're a rising star!", 
        "Relationship",
        "Intelligence/ Machine Learning"
    ),
    (
        26,
        "What kinds of AI do you use in your marketing program? Check all that apply: 
            None
            Send time optimization
            Offer recommendations
            Predictive lead scoring
            Content recommendations
            Other
            We do not currently use AI features", 
        NULL, 
        .0833, 
        "Intelligent recommendations: AI-driven decision-making increases the relevancy of your marketing programs and offers. Smart personalization engines used to recognize customer intent will enable digital businesses to increase profits by up to 15% (Gartner). AI that analyzes data about users, items, and interactions enables you to make real-time, data-driven suggestions. ",
        "Profits must be going way up! According to Gartner, smart personalization engines used to recognize customer intent will enable digital businesses to increase their profits by up to 15%.", 
        "Relationship",
        "Intelligent Recommendations"
    ),
    (
        27,
        "Do you send emails to buyers optimized based on when they are most likely open?
            a. yes
            b. no
            c. I don't know", 
        NULL, 
        .0833, 
        "Send time optimization: Get buyers' attention when they are historically most attentive to their emails. Send time optimization is a data-driven approach to ensure messages are sent at the contact's optimal time for engagement. Oracle CX Marketing sees a ~25% point increase in engagement when optimizing messaging by send time.",
        "Your emails aren't ending up in a SPAM folder because you're using send time optimization. That's smart marketing! ", 
        "Relationship",
        "Send time optimization"
    ),
    (
        28,
        "Do you provide real-time online personalization for customers or prospects based on their (interests) behavior on your website?
            a. Yes
            b. Only basic
            c. No", 
        NULL, 
        .0833, 
        "Real-time personalization: Real-time data empowers you to adjust content and offers based on customer behavior at that moment. It provides insight into visitor movement to, from, and within a site, and helps you and your team understand where modifying messaging, content, and/or offers may be needed.",
        "You're getting real-time actionable insights from buyer behaviors and activity, which helps inform how you can modify messaging, content, and/or offers for more precise personalization. Good job!", 
        "Relationship",
        "Real-time personalization"
    ),
    (
        29,
        "How do you standardize data and improve data quality in your marketing database?
            a. we have no data-standardization in place
            b. we have defined standards, but don't always apply them
            c. we use a 3rd party solution to clean and append data
            d. we have a process in place that supports data quality and standards in real time", 
        NULL, 
        .0833, 
        "Real-time data insights: Understanding customer interactions across all touchpoints is still the number one challenge facing marketers today (Forrester and DMA) and the key to this is clean accurate customer data. Companies who adopt data-driven marketing are six times more likely to be profitable year-over-year (Forbes). ",
        "You've got a leg up over your competition. According to Forbes, you're 6x more likely be profitable year-over-year having adopted real-time data insights. ", 
        "Relationship",
        "Real-time data quality"
    ),
    (
        30,
        "How do you measure your marketing efforts?
            A. Generate basic reports
            b. Some consistent means of measuring campaigns with some deep analysis in specific areas
            c. Able to see marketing's contribution to sales' success across each channel and activity within sales (closed loop reporting)",
        NULL, 
        .0833, 
        "Marketing Measurement: There's no \"one size fits all\" approach. Marketers need to understand their marketing dollar spend, social media's impact, volume of qualified leads coming in and their source, etc. Marketers also must look from acquisition to sale to get the true measure and impact of marketing programs on revenue.",
        "Congratulations! With detailed marketing reports and closed loop reporting in place, you've got your finger on your marketing spend, the impact of social media, and insight into how many MQLs turn into a sale.", 
        "Relationship",
        "Marketing measurement"
    ),
    (
        31,
        "How integrated is your marketing data?
            a. All of our marketing data is siloed
            b. We have integrated some customer data, but using and manipulating it  is a manual process.
            c. We have a unified customer database that automates some essential online and offline data", 
        NULL, 
        .0833, 
        "Marketing data integrations: Integrating data across marketing channels and incorporating offline data allows multiple strands of information across different platforms to be cross-referenced for a deeper understanding of the customer. This provides a stronger base for targeting and scoring your buyers and a more holistic insight into their interest.",
        "According to Bain and Company, marketing leaders in North America are 1.6x more likely than laggards to prioritize integrating their platforms. You're a leader. ", 
        "Relationship",
        "Marketing data integrations"
    ),
    (
        32,
        "Do you have data connections that allow you to have a full 360 degree view of your customer across marketing, sales, and service?
            a. We connect our marketing and sales data only 
            b. We connect our marketing and service data only
            c. Yes! We have data connections for all three. 
            d. No, we are not able to connect the data between any of these systems. ",
        NULL, 
        .125, 
        "Unified Customer Profile: Connecting all your data sources allows you to build a single customer profile for each customer with the highest accuracy. A single view of your customer enables timely, relevant, and consistent experiences across every customer interaction and simplifies the integration of online, offline, and third-party data sources.",
        "Great job! With a single view of your customer, you ensure timely, relevant, and consistent experiences across every customer interaction.", 
        "Lifecycle",
        "Unified Customer Profile"
    ),
    (
        33,
        "Do you leverage unified customer profiles across marketing, sales and service to provide personalized experiences for your customers?
            A. No
            B. Yes",
        NULL, 
        .125, 
        "Advanced personalization: Customers expect real-time, personalized and contextual experiences when they want them and how they want them, and for marketers to know them better than they do. But to really know them, marketers must access all customer journey data like marketing, sales, and service, to drive true personalization.",
        "Congratulations! According to McKinsey, by providing personalized experiences, marketers experienced a ~ 15% lift in revenue, a 10-30% increase in efficiencies, and acquisition costs decreased by as much as 50%. ", 
        "Lifecycle",
        "Advanced personalization"
    ),
    (
        34,
        "Do you run marketing programs to drive sales on a B2B commerce site for repeat or low-consideration purchases?
            a. No
            b. Yes, our commerce site has been integrated into our overall marketing strategy",
        NULL, 
        .125, 
        "B2B Commerce: B2B buyers prefer an easier buying experience similar to their consumer experience. For repeat purchases and low consideration ancillary products/services, buyers don’t want to speak with a rep – they prefer to shop online when possible. Your competitors are already moving this direction and taking market share daily.",
        "You're a smart B2B marketer who recognizes that B2B buyers demand a buying experience that more closely resembles the consumer experience. ", 
        "Lifecycle",
        "B2B Commerce"
    ),
    (
        35,
        "Do you run marketing programs targeted specifically to your loyalty program members?
            a. No
            B. Yes, but it's a separate team who runs the loyalty program
            c. Yes, loyalty has been integrated into our overall marketing strategy",
        NULL, 
        .125, 
        "Customer Loyalty:  According to Gartner, 80% of all future profits will come from 20% of existing customers. You have a greater chance of selling to an existing customer than a new one. It can cost up to 7x more to acquire a new account than to keep one. ",
        "According to Gartner, 80% of all future profits will come from 20% of existing customers. You understand the importance of customer retention. ", 
        "Lifecycle",
        "Customer Loyalty"
    ),
    (
        36,
        "Do you have an automated way to stop or pause marketing promotions to specific customers when they are experiencing important service issues with your organization?
            a. No, unfortunately, we have no insight into service issues
            c. We have some insight, but it's not reliable
            b. Yes, we have an amazing line of communication and data sharing between marketing and service",
        NULL, 
        .125, 
        "Service Aware Marketing: To the customer, the “service experience” isn't limited to their contact center interaction. It extends across every touchpoint of your brand.  Ensuring your marketing teams are automatically informed of ongoing customer concerns can help avoid unwanted \"unsubscribes\" to new offers due to their frustration in-the-moment.  ",
        "Great work ensuring your marketing teams are armed well with automatic customer service concerns. You're not targeting customers in the heat of a bad moment.", 
        "Lifecycle",
        "Service Aware Marketing"
    ),
    (
        37,
        "Are your customer service reps empowered with personalized recommendations and marketing promotions for upsell or cross-sell opportunities?
            a. yes, our service reps have visibility into a customer's recent purchases and interests and can make recommended offers
            b. no, our service reps are strictly focused on service and not empowered to do any cross-sell or upsell
            c. I don't know",
        NULL, 
        .125, 
        "Empowered Service: 89% of brands expect to be competing mostly or completely on the basis of customer experience (Gartner). The asset of customer data is unique to your company. Giving your service reps in-the-moment insights may provide the perfect opportunity to upsell something that would suit them perfectly.",
        "Congratulations! By empowering your service teams with data, you're in a strong position to compete on customer experience, AND drive upsell. ", 
        "Lifecycle",
        "Empowered service"
    ),
    (
        38,
        "Do your sales reps have insight into the most recent service interactions so they can be aware of any concerns prior to approaching the customer?
            a. No, there is no data shared between sales and service
            b. Yes, sales reps have access to any service interactions and concerns
            c. I don't know",
        NULL, 
        .125, 
        "Service Aware Sales: Every customer wants to feel like they have been heard when they have an issue, including by their sales rep. Connecting the critical digital touchpoints across sales and service interactions will position your sales team to provide relevant interactions that will lead to better experiences.",
        "Connecting critical digital touchpoints across sales and service interactions positions your sales team to provide relevant interactions, timed appropriately, that lead to better experiences. ", 
        "Lifecycle",
        "Service aware sales"
    ),
    (
        39,
        "Do you track, measure and analyze customer lifetime value? 
            a. No, we don't do this.
            b. Yes, we view reports to diagnose what happened in the past.
            c. Yes, we use predictive algorithms to identify next best actions based on customer churn 
            d. Yes, our systems are automatically improving how we engage based on customer metrics to understand customer lifetime value",
        NULL, 
        .125, 
        "Measure Customer Lifetime Value: it's good you are measuring customer lifetime value measures a customer's revenue over the duration of your business relationship. This insight helps to prioritize your marketing efforts and spend, while maintaining profitability. And it can help identify trends that could predict propensity to buy or if their business becomes a flight risk. Keep improving your insights using real-time customer metrics to better anticipate opportunities and reduce churn.",
        "Understanding your customer across their many touchpoints with your brand creates better experiences than your competition. You're also building higher customer lifetime value, and more defensible, long-term customer relationships.", 
        "Lifecycle",
        "Measure Customer Lifetime Value"
    );
