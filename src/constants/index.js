import shape from "../assets/shape.jpg";
//import cp from "../assets/cpp.svg.png";
import chst from "../assets/CSHT.svg.png";
import java from "../assets/java.com.png";
import cp from "../assets/cpp.svg.png";
import Rect from "../assets/React.svg.png";
import javas from "../assets/js.svg";
import sql from "../assets/sql.svg";
import andr from "../assets/andr.svg";
import py from "../assets/Python.svg.png";
import gmail from "../assets/gmail.svg";
import insta from "../assets/instagram.png";
import linkd from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import bank from "../assets/bamkapp.jpg";
import bmi from "../assets/bmi.jpg";
import dp from "../assets/dpja.jpg";
import temp from "../assets/tempc.jpg";

export const languages = [
  {
    id: 1,
    content:
      "C++ is used to create computer programs, one of the most used language in game development",
    title: "C++",
    img: cp,
  },
  {
    id: 2,
    content:
      "Java is used to develop mobile apps, web apps, desktop apps, games and much more",
    title: "Java",
    img: java,
  },
  {
    id: 3,
    content:
      "Html and CSS are collectively used to make colorful and responsive web pages ",
    title: "Html & CSS",
    img: chst,
  },
  {
    id: 4,
    content:
      "React is a JavaScript library for building user interfaces, used to build single-page applications",
    title: "React js",
    img: Rect,
  },
  {
    id: 5,
    content:
      "JavaScript is a popular programming language and is the programming language of the Web",
    title: "Javascript",
    img: javas,
  },

  {
    id: 6,
    content:
      "SQL stands for Structured Query Language and it lets you to access and manipulate databases",
    title: "SQL",
    img: sql,
  },
  {
    id: 7,
    content: "Designing software and applications for Android devices",
    title: "Android Development",
    img: andr,
  },
  {
    id: 8,
    content:
      "Python is a programming language often used to build software, and conduct data analysis",
    title: "Python",
    img: py,
  },
];

export const projects = [
  {
    id: 1,
    title: "Bank app UI",
    img: bank,
    link: "https://bank-app-shradha.netlify.app/",
  },
  {
    id: 2,
    title: "BMI Calculator",
    img: bmi,
    link: "https://bmicalculatorsh.netlify.app/",
  },
  {
    id: 3,
    title: "Application of DP",
    img: dp,
    link: "https://github.com/shradham2612/Dp-grp-project",
  },
  {
    id: 4,
    title: "Temperature Convertor",
    img: temp,
    link: "https://github.com/shradham2612/OIBSIP-",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Home",
        link: "/",
        id: "start",
      },
      {
        name: "About",
        link: "/",
        id: "About",
      },
      {
        name: "Skills",
        link: "/",
        id: "skill",
      },
      {
        name: "Projects",
        link: "/",
        id: "Pro",
      },
      {
        name: "Contact",
        link: "/",
        id: "Contact",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: insta,
    link: "https://www.instagram.com/shradha_mahajan26/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://twitter.com/profound_bell",
  },
  {
    id: "social-media-4",
    icon: linkd,
    link: "https://www.linkedin.com/in/shradha-mahajan-02048a222/",
  },
];
