import { IDescriptionItem } from "./types/IDescriptionItem";
import { IReviewerInfo } from "./types/IReviewerInfo";

export const descriptionList: IDescriptionItem[] = [
  {
    title: "Data Collection",
    number: "01",
    text: `Our AI service by gathering data relevant to your specific needs. 
    This data can come from various sources such as customer interactions, 
    sensors, databases, or external APIs`,
  },
  {
    title: "Data Preprocessing",
    number: "02",
    text: `Before diving into the analysis, the collected data undergoes preprocessing. 
    This step involves cleaning, structuring, transforming data to ensure its quality 
    and readiness for analysis`,
  },
  {
    title: "Model Selection",
    number: "03",
    text: `Based on your unique requirements, our AI service selects the most appropriate machine 
    learning and deep learning models. These models are then trained on your data to make 
    predictions and generate insights.`,
  },
  {
    title: "Training and Optimization",
    number: "04",
    text: `During the training phase, our models learn from your data. They iteratively adjust 
    their parameters to optimize their predictive accuracy. Our AI experts fine-tune these models 
    to ensure the best results for your specific use case.`,
  },
  {
    title: "Integration",
    number: "05",
    text: `Seamless integration is key. Our AI service easily integrates with your existing systems 
    and workflows, ensuring a smooth transition and minimal disruption.`,
  },
  {
    title: "Real-time Monitoring",
    number: "06",
    text: `Stay in control with real-time monitoring. Track the AI's performance, view insights, 
    and receive alerts as needed, ensuring you're always informed and ready to take action.`,
  },
];

export const reviewersList: IReviewerInfo[] = [
  {
    name: "Jane Smith",
    profession: "Freelance Designer",
    comment: `I can't emphasize enough how our partnership with AI Genius has transformed our 
    business. Their AI-driven insights have not only saved us time and money but have allowed 
    us to make data-driven decisions that propel us ahead of our competition. The integration 
    was seamless, and their team's expertise is unparalleled.`,
    rating: 5,
    img: "https://images.unsplash.com/photo-1627379577402-9c3618a58ebf?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "David Greene",
    profession: "CTO at FinanceX",
    comment: `AI Genius has revolutionized our customer support department. The chat bots and 
    automated responses have drastically improved response times, and our customers appreciate 
    the 24/7 availability. It's a win-win, increasing efficiency and customer satisfaction.`,
    rating: 4,
    img: "https://images.unsplash.com/photo-1565271566087-877592ce7874?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Michael Brown",
    profession: "Online Entrepreneur",
    comment: `As a data scientist, I'm always in search of innovative tools. AI Genius has 
    been a game-changer for us. The ability to quickly process and analyze massive datasets 
    is remarkable. It has reduced our workload and allowed us to focus on the strategic aspects 
    of our projects.`,
    rating: 3,
    img: "https://images.unsplash.com/photo-1607694793239-9936e3cfe782?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Alex Fox",
    profession: "UI/UX Designer",
    comment: `Our collaboration with AI Genius has been a transformative experience. 
    The AI-powered solutions provided by their platform have not only streamlined our 
    operations but have also introduced a level of efficiency that exceeded our expectations. `,
    rating: 5,
    img: "https://images.unsplash.com/photo-1650126909844-5c720034d9ef?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Michael Walk",
    profession: "Content Manager",
    comment: `The precision of Genius AI algorithms has significantly enhanced our targeting efforts, 
    resulting in a substantial increase in conversion rates. The tailored recommendations and 
    predictive analytics have allowed us to optimize our campaigns and allocate resources effectively.`,
    rating: 5,
    img: "https://images.unsplash.com/photo-1559557894-a1a709122d2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bartholomew Kuma",
    profession: "UI/UX Designer",
    comment: `The contribution of AI Genius to our research and development endeavors cannot 
    be overstated. Their AI tools have become an integral part of our data analysis toolkit. 
    The speed and accuracy with which we can now process vast datasets have given our data 
    scientists the freedom to delve into deeper insights and refine the strategic direction 
    of our projects.`,
    rating: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQawggBFH6tqdn-xy6Y2Trloee7GTBsIQgZZg&usqp=CAU",
  },
];

export const initialLogInValue = {
  loginEmail: "",
  loginPassword: "",
};

export const initialSignUpValue = {
  signUpEmail: "",
  signUpPassword: "",
};
