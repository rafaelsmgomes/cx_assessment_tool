-- ----------------------------------------------------------------------------------
-- QUESTIONS DATA
-- ----------------------------------------------------------------------------------

INSERT INTO questions (
    id,
    question, 
    q_weight, 
    rec_low, 
    rec_high, 
    section, 
    capability
) 
VALUES 
    (
        0,
        "What percentage of your Field Service operations is manual (scheduling, routing)?
            0-100% scale or dial", 
        .1428, 
        "Automation: Automation is vital to transforming and streamlining your Field Service operation. To maximize the business benefit from automation, it's important to digitize and transform as many of your paper-based processes as possible, including manual processes around scheduling and routing, customer sign-off, etc.",
        "Automation: Your organization is already taking advantage of the time-saving capabilities that come from automation. Continue to look at your manual processes in order to continually realize efficiencies.",
        "Inbound",
        "Automation"
    ),
    (
        1,
        "What channels are you currently using to interact with your customers? 
            Check all that apply: 
            Email 
            Phone 
            Web Self-Service 
            Social
            Other ",
        .1428, 
        "Channel Support: Your customers want to engage on the channel of their choosing, so adopting an omnichannel approach is key to providing the modern service experience they expect. Not only will it allow you to better respond to more customers, but you'll see a significant decrease in the number of calls forwarded to your contact center, saving time and money.",
        "Channel Support: Both your employees and your customers are benefiting from the omnichannel support you've been able to provide, increasing the speed and ease of issue resolution.",
        "Inbound",
        "Channel Support"
    ),
    (
        2,
        "How would you rank the use of traditional channels (calling into the service department)?  
            0-100 scale",
        .1428, 
        "Traditional Channels: Phone and email remain the most widely offered support channels industry-wide—according to Microsoft, 74% of Americans have used a landline to contact customer support. By automating how you route your calls and integrating your systems with your CRM, you can increase the efficiency of your contact center and alleviate the number of customers calling in, to create a more seamless customer experience overall.",
        "Traditional Channels: Your use of traditional channels to handle customer engagements is working for you.",
        "Inbound",
        "Traditional Channels"
    ),
    (
        3,
        "How would you rank your use of digital channels as a means to connect with your customers (chat, web, SMS, email, self-service, etc.)?",
        .1428, 
        "Digital Channels: Field Service teams are no longer restricted to waiting for the phone to ring to service their customers, who use a wide variety of channels to seek out support. Microsoft has found that over 66% of consumers have used three or more communication channels to contact customer service. Adopting an omnichannel approach and incorporating digital channels will help you serve more customers and deliver proactive support.",
        "Digital Channels: You are connecting with more customers through digital channels and running a leaner operation as a result of the time- and cost-saving capabilities that come from adopting an omnichannel approach.",
        "Inbound",
        "Digital Channels"
    ),
    (
        4,
        "How would you rank the knowledge and skills of your technicians? 
            Slider
            0-100% dial",
        .1428, 
        "Skills and Training: Fortune 500 companies lose roughly “$31.5 billion a year by failing to share knowledge” (Babcock, 2004, p. 46). Unifying your knowledge base is key to scaling your Field Service operations and unlocking the full potential of your mobile workforce.",
        "Skills and Training: You understand the importance of shared knowledge, and your entire business is benefiting from your efforts here.",
        "Inbound",
        "Skills and Training"
    ),
    (
        5,
        "Is your call center currently integrated with your Service and CRM applications?
            a. No
            b. Yes",
        .1428, 
        "CRM Integration: Automation helps teams increase the capacity, scale, and yield of any service effort. And when you integrate your CRM application, it amplifies these benefits further. For Field Service, this means better customer insight and streamlined service engagements. This translates into increased customer satisfaction and improved operational efficiencies. ",
        "CRM Integration: Based on your response on CRM integration, you should be seeing real change in the form of better service and Field Service alignment and visibility.",
        "Inbound",
        "CRM Integration"
    ),
    (
        6,
        "How would you best describe your Field Service operations? 
            A. Heavily relies on manual processes, disconnected, dispatch focused
            B. Pre-emptive Field Service, pervasive embedded knowledge and AI, fully automated scheduling and routing ",
        .1428, 
        "Operational Assessment: Rome wasn't built in a day. In order to achieve operational efficiency and advance your Field Service organization, you should consider digitizing, automating, and connecting as many of your Field Service processes as possible. Doing so will allow you to shift from simply responding to requests to proactively supporting your customers.",
        "Operational Assessment: Your answer indicates that you are well on your way to transforming your Field Service organization to exceed customer expectations. Keep up the momentum!",
        "Inbound",
        "Operational Assessment"
    ),
    (
        7,
        "What metrics do you track to show success in your Field Service operations? 
            Click all that apply: 
            First-Time Fix Rates
            Mean Time to Repair
            SLA Compliance
            Total Service Cost
            On-Time Arrivals
            Missed Appointment Percentages
            Total Tech Upsells",
        NULL, 
        NULL,
        NULL,
        "Inbound",
        NULL
    ),
    (
        8,
        "How many dispatchers/schedulers are on your team?
            a. 1-2
            b. 3-5
            c. 5-10
            d. 10+ ",
        NULL, 
        NULL,
        NULL,
        "Inbound",
        NULL
    ),
    (
        9,
        "Are you able to receive customer feedback from the field?/ How do you measure customer satisfaction?",
        NULL, 
        NULL,
        NULL,
        "Inbound",
        NULL
    ),
    (
        10,
        "What percentage of your Field Service requests are handled manually (paper forms, spreadsheets, maps, invoices, etc.)?
            a. Less than 5%
            b. 5-25% 
            c. 25-50% 
            d. Greater than 50%
            e. All requests are handled digitally",
        NULL, 
        NULL,
        NULL,
        "Inbound",
        NULL
    ),
    (
        11,
        "Are you coordinating service across multiple channels in your Field Service operations?
            a. Yes
            b. No
            c. Sometimes
            d. Never",
        .1000, 
        "Multichannel Service: According to UC Today, 9 out of 10 consumers want an omnichannel experience with seamless service between communication methods.",
        "Multichannel Service: You have realized the benefit of coordinating your service efforts across multiple channels. Keep up the good work!",
        "Foundational",
        "Multichannel Service"
    ),
    (
        12,
        "What level of automation exists in your scheduling?
            a. We don't automate anything. We are still manually scheduling.
            b. We have simple rules-based/binary scheduling.
            c. Nearly everything we do is automated.
            d. Nearly everything we do is automated, assisted by AI.",
        .1000, 
        "Scheduling and Automation: As you already know, automating scheduling can greatly increase efficiency. Adding optimization to the mix can boost productivity and drastically reduce costs by effectively routing your mobile workforce to complete more jobs per day.",
        "Scheduling and Automation: It's great to see you have taken the next step to gain greater efficiencies by automating scheduling for your mobile workforce. Many Field Service organizations have realized the great benefits that come from automating job assignments.",
        "Foundational",
        "Scheduling and Automation"
    ),
    (
        13,
        "Does your mobile workforce have mobile capabilities to status their work?
            a. Yes
            b. No",
        .1000, 
        "Mobile: Making mobile a priority empowers field employees with everything they need to succeed at their fingertips. They can choose from a browser-based mobile, iOS, or Android app to get the job done right and as efficiently as possible.",
        "Mobile: Your mobile workforce has everything it needs to reinvent customer experience with every Field Service engagement. Keep up the good work!",
        "Foundational",
        "Mobile"
    ),
    (
        14,
        "How efficient is your Field Service workforce?
            a. We are dispatch-focused.
            b. We have near real-time management, with controlled procedures and processes.
            c. Our field operations are now fully automated. 
            d. With real-time insights and automation, we can offer proactive support.",
        .1000, 
        "Responsive vs. Real-Time Support: Ensuring your back-office and mobile resources have the tools they need to resolve issues from the get-go is vital to a thriving Field Service operation. This ensures your mobile workforce can leverage knowledge, AI-assisted recommendations, automated and admin-designed workflows, AR/VR, and mobile tools to solve or fix customer issues as accurately and efficiently as possible.",
        "Real-Time Support: Now that you're delivering near real-time support to your customers, your mobile workforce will always have the most up-to-date information and your customers can be kept in the know at every step.",
        "Foundational",
        "Responsive vs. Real-Time Support"
    ),
    (
        15,
        "How many applications are your dispatchers/schedulers using?
            a. Using multiple applications in contact center
            b. Single Desktop Application, though channels are disconnected
            c. Single Desktop Application connecting all channels",
        .1000, 
        "Agent Desktop: Nothing is more detrimental to the customer experience than providing wrong, inaccurate, or out-of-date information. Companies that use multiple applications to manage their Field Service operations increase the likelihood of providing wrong information. Establishing a single unified Field Service application allows you to connect all data points to deliver both accuracy and efficiency.",
        "Agent Desktop: Congratulations on getting top scores around proactively informing customers, teams, and coworkers about the status of appointments with predictive job alerts across channels, in order to improve customer satisfaction.",
        "Foundational",
        "Agent Desktop"
    ),
    (
        16,
        "How often do you update your knowledge base?
            a. We don't have a knowledge base
            b. We have a few static FAQs on the website that rarely get updated
            c. Our knowledge base is continuously updated based on incoming customer questions
            d. I'm not sure",
        .1000, 
        "Knowledge Management: A recent study by Oracle and Jeanne Bliss found that while 33% of consumers pick up the phone and call a company to solve an issue, the remaining 67% seek resolution through other means. Some combine service channels like chat watching a video online. These experiences can feel gratifying, annoying, or both - depending on how the knowledge is made available.",
        "Knowledge Management: You have joined an elite group of companies leveraging knowledge to streamline field service requests.",
        "Foundational",
        "Knowledge Management"
    ),
    (
        17,
        "How much visibility do you have into your field operations?
            a. We have no visibility into the field
            b. We track travel time, number of service repairs per tech per day, and mean repair time
            c. We have full visibility into field operations, tracking KPIs for each technician
            ",
        .1000, 
        "Real Time Visibility: Up-to-date information is vital to delivering on your customer promise across the entire service spectrum, by keeping both internal resources and customers informed at each step. From schedule changes and site skill requirements to fleet location information, real-time visibility ensures everyone is \"in the know,\" ensuring an enhanced CX across every touchpoint.",
        "Real Time Visibility: Your company understands up-to-date information is vital to delivering on your customer promise across the entire service spectrum, by keeping both internal resources and customers informed at each step.",
        "Foundational",
        "Real-Time Visibility"
    ),
    (
        18,
        "Do you currently incorporate customer satisfaction surveys?
            a. Never
            b. Sometimes
            c. Always",
        .1000, 
        "Customer Feedback: Understanding customer sentiment is vital to improving your customer experience. That's why we recommend you provide customers with a feedback mechanism that allows you to understand your customers better. It reduces the likelihood of customers sharing their concerns on less desirable channels to voice their frustrations.",
        "Customer Feedback: We're always delighted when we hear about companies that include customer feedback in their Field Service efforts. After all, how else will you find out how you are performing?",
        "Foundational",
        "Customer Feedback"
    ),
    (
        19,
        "What approach do you take when scheduling your mobile workforce?   
            a. Technicians are assigned based on availability
            b. Skill level, proximity, availability are all factored in for optimal assignment",
        .1000, 
        "Workforce Scheduling, Routing, and Optimization: According to Gartner, 52% of Field Service companies still plan their operations manually with pen and paper, which results in a tremendous loss in both productivity and revenue opportunities. That's why there is so much pressure for Field Service organizations to look at technologies that leverage automated intelligence to more accurately plan their mobile workforce schedules across both time and skill constraints.",
        "Workforce Scheduling, Routing, and Optimization: According to Gartner, 52% of Field Service companies still plan their operations manually with pen and paper. It's great to see you are leveraging a more intelligent approach to automate the scheduling of the right resources for each job.",
        "Foundational",
        "Scheduling, Routing, and Optimization"
    ),
    (
        20,
        "What self-service options are available for your customers to troubleshoot first? 
            a. Customers can access FAQs on the website for customer troubleshooting, though our FAQs are static and rarely updated. 
            b. We have a self-service page where customers have access to our Knowledge Base.
            c. We have a self-service portal to offer answers in context anywhere on our website and on any device.",
        .1000, 
        "Customer Self-Service: According to Customerthermometer.com, more than 60% of Americans prefer solving basic customer service issues through a self-service website or app. Having those options also reduces the burden on your traditional channels, freeing them up to deal with more pressing issues.",
        "Customer Self-Service: According to Customerthermometer.com, more than 60% of Americans prefer solving basic customer service issues through a self-service website or app. Your company gets top marks in this area.",
        "Foundational",
        "Customer Self-Service"
    ),
    (
        21,
        "How advanced are your scheduling and routing processes?
            a. We haven't had the opportunity to advance in this area.
            b. We use a rule-based system when assigning techs to a job.
            c. We've automated our scheduling and routing, allowing us to complete more jobs per day.
            d. Using AI and predictive capabilities, our technicians' schedules are fully optimized and updated in real time.",
        .1428, 
        "Advanced Scheduling and Automation: Advanced scheduling and routing will help empower your mobile workforce to complete more jobs per day, while reducing time traveled and ultimately saving you money. If this isn't already a top priority, it should be as it will deliver returns that you can reinvest in the business for continued success.",
        "Advanced Scheduling and Automation: Your Field Service techs are more productive than ever as advanced scheduling and routing has optimized your FS fleet capacity!",
        "Advanced",
        "Advanced Scheduling and Automation"
    ),
    (
        22,
        "In addition to updating a customer status with a mobile device, what other mobile resources do your technicians have in the field? 
            Check all that apply:
            a. Access Knowledge
            b. Update Orders
            c. Collect Signatures
            d. Manage Schedule
            e. View Route
            f. Access Customer Information
            g. Tech-to-Tech Collaboration",
        .1428, 
        "Advanced Mobile Capabilities: Mobile capabilities aren't just about having scheduling and sign-off options on a mobile device. Mobile today is much more. It means having collaborative tools, knowledge, sales dashboards, and order options available to your mobile workforce—allowing them to drive customer satisfaction and revenue with every interaction.",
        "Advanced Mobile Capabilities: Great job! Mobile today is much more than just a GPS tool, and your company realizes that. Pushing collaboration, knowledge, sales, and customer satisfaction via your mobile workforce is key.",
        "Advanced",
        "Advanced Mobile Capabilities"
    ),
    (
        23,
        "Do you offer support across all digital channels—including email, mobile, SMS, web, and social—to create a connected experience?
            a. Yes
            b. No",
        .1428, 
        "Omnichannel Support: Consumers are spoiled—they expect multiple channel options in how they initiate a service request. That's why it's vital that regardless of channel there is consistency across every touchpoint, allowing customers to interact and switch channels without losing context as they engage with your Field Service organization.",
        "Omnichannel Support: Your customers are getting a more consistent experience because you've adopted cross-channel orchestration. In fact, they're four times more likely to complete a high-value, low-regret purchase now (Gartner).",
        "Advanced",
        "Omnichannel Support"
    ),
    (
        24,
        "How advanced is your self-service offering? 
            a. We don't have a self-service portal on our website.
            b. Customers can now book and manage their service appointments through our customer portal.
            c. Our self-service channel is fully automated.",
        .1428, 
        "Self-Service: More than 60% of Americans prefer solving basic customer service issues through a self-service website or app. That's one of the reasons one of our largest customers, a global satellite TV provider, has been able to reinvent itself into a dynamic organization that empowers both employees and customers with self-service options across their entire customer lifecycle.",
        "Self-Service: Well done! By providing self-service options to your customers you are better able to appeal to them across service touchpoints. The results are clear: saved time and money. ",
        "Advanced",
        "Self-Service"
    ),
    (
        25,
        "Do you leverage AI to optimize any part of your Field Service operations? 
            a. Yes
            b. No",
        .1428, 
        "AI and Machine Learning: According to Accenture, 31% of companies have invested in AI in an effort to get ahead of the competition. Gartner predicts that 15% of all customer service interactions will be handled solely by AI in 2021, a 400% increase from 2017. ",
        "AI and Machine Learning: It's great to see that your company looks at things from a strategic perspective. You don't just follow the trends, you set them. Continue to use AI wherever possible to optimize your Field Service operation.",
        "Advanced",
        "AI and Machine Learning"
    ),
    (
        26,
        "What kinds of emerging technologies have you integrated into your Field Service operations? 
            Check all that apply: 
            IoT
            AR
            AI/ML
            Video Chat
            Other
            We do not currently use these features",
        .1428, 
        "Emerging Technologies: According to Accenture, 76% of companies are investing in emerging technologies. Today, there are over 20.4 billion devices connected to the Internet of Things. Field Service organizations that capitalize on this opportunity to deliver superior service experiences will see a reward in terms of increased revenue generation and customer loyalty. ",
        "Emerging Technologies: You understand what it takes to compete in today's market. You have set yourself up for success by investing in emerging technologies.",
        "Advanced",
        "Emerging Technologies"
    ),
    (
        27,
        "Do you use an analytics program with your Field Service operations? 
            a. Yes 
            b. No",
        .1428, 
        "Analytics: All too often you hear about business leaders drowning in data, with little insight into how their operations are actually performing. Interestingly, more than 40% of all data analytics projects will relate to customer experience by 2020. That's why strong analytics are needed to keep everyone—from the executive to the front-line workers—connected and aligned.",
        "Analytics: According to mycustomer.com, one in five brands admit they’ll never understand their customers. But because of your focus on making analytics a top priority, you're not one of them.",
        "Advanced",
        "Analytics"
    ),
    (
        28,
        "Which of the following KPIs do you use to measure the efficiency of your Field Service operations? 
            Click all that apply:
            A. First-Time Fix Rates
            b. Truck Roll / Travel Time
            c. Completed Jobs Per Tech Per Day 
            d. Percentage of On-Time SLAs 
            e. Response Time
            f. Mean Time to Repair
            g. Customer Satisfaction",
        NULL, 
        NULL,
        NULL,
        "Advanced",
        NULL
    ),
    (
        29,
        "How integrated is your Field Service data across the rest of your systems?
            a. All of our Field Service data is siloed.
            b. We have integrated some customer data, but using and manipulating it is a manual process.
            c. We have a unified customer database that automates some essential online and offline data.
            d. We have integrated all online and offline data.",
        .1667, 
        "Data Management: Integrating your systems and connecting your Field Service data to the rest of your business allows you to apply analysis to continually improve performance, design Field Service interactions, and predict how to approach and serve the customers.",
        "Data Management: You understand the value of connecting your Field Service operation to the rest of your business. What's more, you're able to leverage that data to optimize your Field Service processes. ",
        "Autonomous",
        "Data Management"
    ),
    (
        30,
        "Are all of your back- and front-end systems integrated to allow a full 360-degree view of your customer?
            A. We connect our Field Service and sales data. 
            b. We connect our Field Service and back-office data. 
            c. Yes! We connect our back- and front-end systems. 
            d. No, we are not able to connect the data between any of these systems. ",
        .1667, 
        "Comprehensive Customer Profile: Connecting all of your data sources allows you to build a single profile for each customer with the highest accuracy. A single view of your customer simplifies service engagements for both your agents and customers and enables staff to deliver more consistent and personalized customer experiences.",
        "Comprehensive Customer Profile: Great job! With a single view of your customer, you ensure timely, relevant, and consistent service and Field Service experiences across every customer interaction.",
        "Autonomous",
        "Comprehensive Customer Profile"
    ),
    (
        31,
        "Do you currently use AI or IoT to enable more predictive Field Service for your customers?
            A. No
            B. Yes",
        .1667, 
        "Proactive Field Service: According to Gartner, 68% of consumers say it increases their perception of a brand when companies send them proactive customer service notifications. Delivering preemptive Field Service by leveraging innovative and connected technologies will differentiate your Field Service organization, increase brand loyalty, and realize a significant ROI.",
        "Proactive Field Service: You are standing out from the competition and increasing your brand equity by proactively servicing your customers. Keep it up!",
        "Autonomous",
        "Proactive Service"
    ),
    (
        32,
        "Do you allow your mobile resources to make sales in the field?
            A. No
            b. Yes
            c. Not Applicable",
        .1667, 
        "Field Service Transformation: According to Gartner, 80% of all future profits will come from 20% of existing customers. By enabling your mobile workforce to do more than just serve, you can transform your Field Service organization into a revenue-generating line of business by taking advantage of all customer engagement opportunities to increase sales.",
        "Field Service Transformation: You've empowered your mobile workforce to serve and sell, transforming your Field Service operation into a revenue-generating line of business. ",
        "Autonomous",
        "Field Service as a Profit Center or Field Service Transformation"
    ),
    (
        33,
        "What role does Field Service play in your entire CX Strategy? 
            Click all that apply:
            A. Our Field Service focuses on issue resolution to minimize customer churn.
            B. Our Field Service operations are completely connected across the entire company, applying analysis to continually improve performance and reveal new revenue streams.
            C. We view our Field Service organization as a competitive differentiator by offering the best customer experience possible.",
        .1667, 
        "Field Service Strategy: To the customer, the “service experience” isn't limited to their contact center interaction. It extends across every touchpoint of your brand. Field Service organizations have a crucial opportunity to impact customer service, drive innovation, and add value to the customer experience. Including Field Service in your overall CX strategy can add tremendous value to your organization and play a key role in differentiating your brand.",
        "Field Service Strategy: You've been able to differentiate your brand by using Field Service engagements to delight customers.",
        "Autonomous",
        "Field Service Strategy"
    ),
    (
        34,
        "What percentage of your revenue is generated from your Field Service operations?  
            A. None 
            B. 0-5% 
            C. 5-15% 
            D. 15-20% 
            E. 20% or more",
        .1667, 
        "Profit Center: Service and Field Service organizations have been under increasing pressure to reduce costs while still delivering fantastic service experiences. For Field Service, moving from a cost center to a profit center is possible with the right set of tools and training. By gathering customer data and predicting customers' needs and challenges before they occur, Field Service organizations have a huge opportunity to upsell customers and drive new revenue streams.",
        "Profit Center: Congratulations! You've successfully transformed your service and Field Service organization into a profit center. Continue to maximize customer engagement and upsell opportunities by leveraging customer insights and empowering your mobile workforce.",
        "Autonomous",
        "Profit Center"
    );
