import aboutpic from './components/Access/mePhoto.jpg'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/clarkera/myreactportfolio.git',
  title: 'JS.',
}

const about = {
  photo: aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Rachael Clarke',
  role: 'Full stack developer',
  description:
    'UX/UI bootcamp student living in Atlanta,Georgia. Extremely interested in cutting edge technology, web development and JavaScript back and front end development.',
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/rachaelclarke9941',
    github: 'https://github.com/clarkera',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Weather Dash',
    description:
      'My challenge was to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. The user will be able to see the weather outlook for multiple cities,so that they can plan a trip accordingly.',
    stack: ['localstorage', 'Openweather API'],
    sourceCode: 'https://github.com/clarkera/weatherdash.git',
    livePreview: 'https://clarkera.github.io/weatherdash/',
  },
  {
    name: 'Express Note Taker',
    description:
      'This assignment uses node and express.js to create a web browser-based note taking app. This app can be used by business owners who need to create tasks for employees to complete, or by a person who simply needs to take notes to stay on track.',
    stack: ['CSS', 'npm', 'javascript', 'html', 'express', 'nodejs'],
    sourceCode: 'https://github.com/clarkera/Express.js-NoteTaker.git',
    livePreview: 'https://express-js-notetaker-qsc0.onrender.com/',
  },
  {
    name: 'Employee Tracker',
    description:
      'This app was created with node.js, and allows users to input from inquirer to create an employee tracker database displaying associates of a company. PostgreSQL was also used to create data tables and schemas.',
    stack: ['javascript'],
    sourceCode: 'https://github.com/clarkera/EmployeeTracker.git',
    livePreview: 'https://youtu.be/URI_crIFA-Y?si=kDxeMOHxqPY6IOWa',
  },
  {
    name: 'My Fun Blog',
    description:
      'I made a two-page blog where users can input and view their blog posts. It includes a content form, dynamically rendering blog posts, and has a light/dark mode toggle',
    stack: ['JavaScript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/clarkera/My-Fun-Blog.git',
  },
  {
    name: 'MVC Tech Blog',
    description:
      'I have created a CMS-style blog site similar to a Wordpress site, so that developers can publish their blog posts and share their thoughts about any topic they like. I used Handlebars.js , Sequelize, and the express-session npm package',
    stack: ['html-css-javascript', 'Handlebars'],
    sourceCode: 'https://github.com/clarkera/mvctechblog.git',
    livePreview: 'https://mvctechblog.onrender.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Express',
  'MySQL',
  'MongoDB',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'MERN',
  'Java Spring Boot',
  'Microservices',
  'Heroku',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'rclarke9941@gmail.com',
}

export { header, about, projects, skills, contact }
