import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'E-COMMERCE WEB',
        description: "My team and I developed an E-commerce website with a dynamic and user-friendly interface suitable for all age groups. I handled the front-end development using HTML, CSS, and JavaScript to ensure a responsive and engaging user experience. The back-end was built using Python and Django, providing a robust and efficient framework for managing the website’s functionalities. This combination of technologies resulted in a seamless and efficient E-commerce platform.",
        tools: ['Html', 'Css', 'Javascript', 'React.js', 'Formspree API', 'Python', 'Django', 'MYsql',],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'PORTFOLIO WEB',
        description: 'I designed and developed a full-stack professional portfolio website using Next.js for server-side rendering and static site generation, TypeScript for strong typing, Material-UI (MUI) for pre-designed components, TailwindCSS for utility-first styling, and React Slick for dynamic carousels. The website is deployed on Netlify, ensuring continuous deployment and performance optimizations.',
        tools: ['HTML', 'Tailwind CSS', "NestJS", "TypeScript", "MySQL","Javascript"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'EV STATION BOOKING SYSTEM',
        description: 'My team built an EV STATION BOOKING SYSTEM . We used Express, Typescript, , and Mongoose to develop. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Java with springBoot', 'Replicate AI',],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'SMART CAR PARKING SYSTEM',
        description: "My team and I developed a Smart car parking system called EV-serv. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Frontend Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },