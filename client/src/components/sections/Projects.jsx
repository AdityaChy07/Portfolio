import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

import complaintImg from "../../assets/projects/complaint-tracker.png";
import portfolioImg from "../../assets/projects/portfolio.png";
import aiImg from "../../assets/projects/health-ai.png";

const projects = [
  {
    title: "Campus Infrastructure Complaint Tracker",
    category: "Full Stack MERN",
    image: complaintImg,
    featured: true,
    description:
      "Role-based complaint management system with authentication, dashboards, notifications and complaint tracking.",

    tech: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind"
    ],

    github: "https://github.com/AdityaChy07/Campus-Infrastructure-Complaint-Tracker",

    live: "https://campus-infrastructure-complaint-tra.vercel.app/"
  },

  {
    title: "Modern Portfolio",

    category: "Frontend",

    image: portfolioImg,

    featured: true,

    description:
      "Responsive portfolio with animations, glassmorphism, Framer Motion and modern UI.",

    tech: [
      "React",
      "Tailwind",
      "Framer Motion"
    ],

    github:"#",

    live:"#"
  },

  {
    title:"AI Health Risk Assessment",

    category:"Machine Learning",

    image:aiImg,

    featured:false,

    description:
      "AI-powered disease prediction system for Breast Cancer and Lung Cancer.",

    tech:[
      "Python",
      "Flask",
      "ML",
      "Pandas"
    ],

    github:"#",

    live:"#"
  }

];

function Projects() {

return (

<section
id="projects"
className="bg-slate-900 py-24 px-6"
>

<div className="max-w-7xl mx-auto">

<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:.6}}

viewport={{once:true}}

className="text-center mb-20"

>

<p className="uppercase tracking-[6px] text-cyan-400">

Portfolio

</p>

<h2 className="text-5xl font-bold mt-3">

Featured Projects

</h2>

<div className="w-28 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"/>

</motion.div>

<div className="grid lg:grid-cols-3 gap-10">

{projects.map((project,index)=>(

<motion.div

key={index}

initial={{opacity:0,y:60}}

whileInView={{opacity:1,y:0}}

transition={{delay:index*.15}}

viewport={{once:true}}

whileHover={{y:-12}}

className="group bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition-all duration-300"

>

<div className="relative overflow-hidden">

<img

src={project.image}

alt={project.title}

className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"

/>

{project.featured && (

<div className="absolute top-4 left-4 bg-cyan-500 text-black px-4 py-1 rounded-full flex items-center gap-2 text-sm font-semibold">

<FaStar/>

Featured

</div>

)}

</div>

<div className="p-7">

<p className="text-cyan-400 text-sm">

{project.category}

</p>

<h3 className="text-2xl font-bold mt-2">

{project.title}

</h3>

<p className="text-gray-400 leading-7 mt-4">

{project.description}

</p>

<div className="flex flex-wrap gap-2 mt-6">

{project.tech.map((item)=>(

<span

key={item}

className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm"

>

{item}

</span>

))}

</div>

<div className="flex justify-between mt-8">

<a

href={project.github}

className="flex items-center gap-2 hover:text-cyan-400 transition"

>

<FaGithub/>

GitHub

</a>

<a

href={project.live}

className="flex items-center gap-2 hover:text-cyan-400 transition"

>

Live

<FaExternalLinkAlt/>

</a>

</div>

</div>

</motion.div>

))}

</div>

</div>

</section>

)

}

export default Projects;