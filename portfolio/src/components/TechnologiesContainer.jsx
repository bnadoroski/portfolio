import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact
} from 'react-icons/di'
import { IoLogoVue } from "react-icons/io5";
import { SiSass } from "react-icons/si";
import { TbBrandCSharp, TbFileTypeSql  } from "react-icons/tb";

import '../styles/components/technologiescontainer.sass'

const technologies = [
    {id: "vue", name: "Vue", icon: <IoLogoVue />},
    {id: "js", name: "JavaScript", icon: <DiJsBadge />},
    {id: "sass", name: "Sass", icon: <SiSass />},
    {id: "css", name: "CSS3", icon: <DiCss3 />},
    {id: "html", name: "HTML5", icon: <DiHtml5 />},
    {id: "csharp", name: "CSharp", icon: <TbBrandCSharp />},
    {id: "sql", name: "SQL", icon: <TbFileTypeSql />},
    {id: "react", name: "React", icon: <DiReact />}
]

const TechnologiesContainer = () => {
    return (
        <section className="technologies-container">
            <h2>Algumas Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                        </div>
                    </div>
                
                ))}
            </div>
        </section>
    )
}

export default TechnologiesContainer