import { v4 as uuidv4 } from 'uuid';

// import UTrackerImg from '../images/utracker.jpg';
import port from '../images/port.png';
import bootcamp from '../images/bootcamp.jpg';
import daysodcode from '../images/daysofcode.jpg';
import clone from '../images/clone.png';
import bank from '../images/bank.png';
import game from '../images/game.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Google Keep Clone',
    desc:
      'A React App which will help you to remember all you important works. ',
    img: clone,
  },

  {
    id: uuidv4(),
    name: 'Car Game',
    desc:
      'This simple car racing game has been developed by me about a year ago . This game is made by using Vanilla Javascript',
    img: game,
  },

  {
    id: uuidv4(),
    name: 'Portfolio Website',
    desc:
      'My portfolio website made by using React. This website will showcase my skills and my recent works',
    img: port,
  },
  {
    id: uuidv4(),
    name: 'Bank Management Sytem',
    desc:
      'A C++ project of Bank Managemnet System. It will help bank officials to easily store and manage user information',
    img: bank,
  },
  {
    id: uuidv4(),
    name: '10 Days Of Code',
    desc:
      'A coding event for learners where they had learnt basics and implementations of different coding concepts . This event was mentored by me and more than 100 students participated in this.',
    img: daysodcode,
  },
  {
    id: uuidv4(),
    name: 'Website Development Bootcamp',
    desc:
      'In this bootcamp more than 200 students have been mentored by me and they have learnt the basics of web development and the future they can make in this field.',
    img: bootcamp,
  },
];

export default projects;
