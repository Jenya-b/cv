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
    icon: icon.graphQL,
    title: 'GraphQL',
  },
  {
    icon: icon.jest,
    title: 'Jest',
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
    title: 'Investment',
  },
  {
    title: 'Сooking on fire',
  },
  {
    title: 'Traveling',
  },
];

const languages = [
  {
    title: 'English - B1',
  },
];

const mySelf = [
  {
    title:
      'For me, the field of IT is not new. In 2013, I received a diploma of higher education in the specialty "operation of information systems", after which I worked for 10 years in a government organization, where I held the position of deputy head of the IT department for the last year.',
  },
  {
    title:
      'I acquired the main skills of Web development in courses run by the Rolling Scopes developer community and constantly improve them.',
  },
  {
    title: 'At the moment, I successfully work on a freelance exchange.',
  },
  {
    title:
      'I have a high working capacity, I can work in multitasking mode and in a team, organizational and managerial skills are well developed.',
  },
  {
    title:
      'I like to learn new things, develop, expand my boundaries and go out of my comfort zone.',
  },
  {
    title: 'I consider myself a sociable and friendly person.',
  },
];

const work = [
  {
    date: '2021 to present',
    title: 'Frontend developer, freelancer',
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
    link: 'https://app.rs.school/certificate/u3ojf2v3',
  },
  {
    date: '2022',
    title: 'JavaScript/Front-end 2021Q3 (The Rolling Scopes School)',
    link: 'https://app.rs.school/certificate/3frshve4',
  },
  {
    date: '2022',
    title: 'React 2022 Q1 (The Rolling Scopes School)',
    link: 'https://app.rs.school/certificate/mg4gxjna',
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
  { title: 'Languages', data: languages },
  { title: 'Interests', data: interests },
];

export const mainData = [
  { title: 'About myself', data: mySelf },
  { title: 'Work experiences', data: work },
  { title: 'Education', data: education },
  { title: 'Courses', data: courses },
];
