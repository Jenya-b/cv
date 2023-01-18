import { icon } from './images';

const contacts = [
  {
    icon: icon.home,
    title: 'Minsk, Belarus',
  },
  {
    icon: icon.tel,
    title: '+375 (33) 642-22-45',
  },
  {
    icon: icon.message,
    title: 'evgenyborisevich@inbox.ru',
  },
];

const skills = [
  {
    icon: icon.html,
    title: 'HTML5',
  },
  {
    icon: icon.css,
    title: 'CSS3',
  },
  {
    icon: icon.sass,
    title: 'SASS',
  },
  {
    icon: icon.js,
    title: 'JavaScript',
  },
  {
    icon: icon.ts,
    title: 'TypeScript',
  },
  {
    icon: icon.react,
    title: 'React',
  },
  {
    icon: icon.redux,
    title: 'Redux / Redux Toolkit',
  },
  {
    icon: icon.mui,
    title: 'Material UI',
  },
  {
    icon: icon.styledComponents,
    title: 'Styled Components',
  },
  {
    icon: icon.git,
    title: 'Git',
  },
];

const interests = [
  {
    title: 'Сooking on fire',
  },
  {
    title: 'Traveling',
  },
  {
    title: 'Photography',
  },
];

const mySelf = [
  {
    title:
      'I have two higher educations (technical and economic). I acquired my development skills through courses run by The Rolling Scopes developer community.',
  },
  {
    title:
      'I have a high working capacity, I am able to work in multitasking mode and in a team, I have developed organizational and managerial skills.',
  },
  {
    title:
      'I love learning new things, developing, expanding my boundaries and getting out of my comfort zone. I am a sociable and friendly person.',
  },
];

const education = [
  {
    date: '2013',
    title:
      'Military Academy of the Republic of Belarus with a degree in Operation of Automated Information Support Systems.',
  },
  {
    date: '2021',
    title:
      'Academy of Management under the President of the Republic of Belarus with a degree in Public Administration and Economics',
  },
];

const courses = [
  {
    date: '2021',
    title: 'JavaScript/Front-end Pre-School (The Rolling Scopes School)',
  },
  {
    date: '2022',
    title: 'JavaScript/Front-end 2021Q3 (The Rolling Scopes School)',
  },
  {
    date: '2022',
    title: 'React 2022 Q1 (The Rolling Scopes School)',
  },
  {
    date: '2022',
    title: 'Information Security Audit (Softline)',
  },
];

export const socialMedia = [
  { icon: icon.telegram, href: 'https://t.me/evgeny_borisevich' },
  { icon: icon.github, href: 'https://github.com/Jenya-b' },
  { icon: icon.facebook, href: 'https://www.facebook.com/borisevich.evgeny' },
];

export const data = [
  { title: 'Contacts', data: contacts },
  { title: 'Skills', data: skills },
  { title: 'Interests', data: interests },
];

export const mainData = [
  { title: 'About my self', data: mySelf },
  { title: 'Education', data: education },
  { title: 'Courses', data: courses },
];
