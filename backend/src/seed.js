import dotenv from "dotenv";
import mongoose from "mongoose";
import Review from "./models/Review.js";
import connectDB from "./config/db.js";

dotenv.config();

const seedReviews = [
  {
    name: "Tokir Shaikh",
    rating: 5,
    text: "Good software company in Dewas. The team is cooperative and provides reliable website and ERP development services.",
    date: "6 months ago",
    source: "google",
  },
  {
    name: "Harshvardhan Singh jhala",
    rating: 5,
    text: "I purchased school management software from this company, and I’m very satisfied with their service. The software is easy to use, well-designed, and helps manage all school operations smoothly. The team provided excellent support…",
    date: "11 months ago",
    source: "google",
  },
  {
    name: "Surendra Singh",
    rating: 5,
    text: "We are satisfied with the Hospital Management System provided by Xlligent Softwares Pvt Ltd. After the implementation, our hospital operations have become more streamlined and efficient. The software is easy to use and helps us manage…",
    date: "8 months ago",
    source: "google",
  },
  {
    name: "Tapan Rewadikar",
    rating: 5,
    text: "Best software and after sales Support for there ERP software. I wil definitely recommend them.",
    date: "4 months ago",
    source: "google",
  },
  {
    name: "Rajendra Shinde",
    rating: 5,
    text: "I'm absolutely thrilled with the customized ERP solution provided by Xlligent Softwares! Their team took the time to understand my business needs and delivered a tailored solution that has transformed our operations. The software is…",
    date: "9 months ago",
    source: "google",
  },
  {
    name: "Tanu Sharma",
    rating: 5,
    text: "Xlligent Softwares Pvt Ltd provided us with a great ERP solution. It simplified our operations and inventory management. Their team was helpful, tailored the system to our needs, and offered good support. I’d recommend them for an easy-to-use ERP.",
    date: "a year ago",
    source: "google",
  },
  {
    name: "Suresh kumar Sony",
    rating: 5,
    text: "Prepared a wonderful software application for Swarnakar Samaj used to organize all valuable details of Samaj peoples on single platforms and achievements of Samaj peoples is also displayed here…",
    date: "a year ago",
    source: "google",
  },
  {
    name: "Sandesh Karande",
    rating: 5,
    text: "Xlligent WhatsApp Bulk messege extention service is very super & smooth to reach many customers in minimum time duration, it is best service in my life. Miss. Geeta Raman is coordinator from Xlligent team, she is very polite and…",
    date: "a year ago",
    source: "google",
  },
  {
    name: "faijan mansuri786",
    rating: 5,
    text: "Affordable and reliable IT services. A good option if you are looking for website or software development.",
    date: "6 months ago",
    source: "google",
  },
  {
    name: "Veerendra singh",
    rating: 5,
    text: "I've had an outstanding experience with Xlligent Company. The work culture promotes collaboration and innovation. Their services are top-notch, consistently delivering reliable and efficient solutions. Customer support is prompt and goes…",
    date: "2 years ago",
    source: "google",
  },
  {
    name: "mukesh kumar gupta",
    rating: 5,
    text: "I had a great experience with Xlligent Softwares Pvt Ltd. Their team is highly professional, supportive, and quick to respond to queries. I truly appreciate their dedication to quality and customer satisfaction.",
    date: "a year ago",
    source: "google",
  },
  {
    name: "Shantanu",
    rating: 5,
    text: "Xlligent software Pvt. Ltd.'s WhatsApp software has proved to be a boon for me, through this I have been able to easily reach out to thousands of students, thereby saving lakhs of rupees on marketing expenses...",
    date: "a year ago",
    source: "google",
  },
  {
    name: "Monica Shinde",
    rating: 5,
    text: "Xlligent Softwares Pvt Ltd went beyond our anticipation! We are H&H construct, Dealing in all Hygiene products based out of Indore M.P. Their ERP solution made it easy for us to enhance our manufacturing operations,…",
    date: "a year ago (edited)",
    source: "google",
  },
  {
    name: "Muskan Parihar",
    rating: 5,
    text: "Outstanding Learning Environment. Xlligent Softwares Private Limited provides an outstanding training experience for students. The instructors are not only experts in their field but also…",
    date: "2 years ago",
    source: "google",
  },
  {
    name: "Husain Lokhandwala",
    rating: 5,
    text: "They have a good customer service and a friendly and understanding team that helps you throughout the project. They have highly skilled developers that understand your requirements and also add their own touch to elevate your project. I would highly recommend them for all your web development and other related needs.",
    date: "2 years ago",
    source: "google",
  },
];

const seed = async () => {
  try {
    await connectDB();
    await Review.deleteMany({});
    await Review.insertMany(seedReviews);
    console.log(`✅ Seeded ${seedReviews.length} reviews successfully`);
    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  }
};

seed();
