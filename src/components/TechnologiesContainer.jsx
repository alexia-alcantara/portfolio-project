import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiReact, DiAngularSimple, DiWordpress } from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const tecnhologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "angular", name: "Angular", icon: <DiAngularSimple /> },
    { id: "wordpress", name: "WordPress", icon: <DiWordpress /> },
    { id: "react", name: "React", icon: <DiReact /> },
]

const TechnologiesContainer = () => {
    return <section className="technologies-container">
        <h2>Tecnologia</h2>
        <div className="technologies-grid">
            {tecnhologies.map((tech) => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Maxime, nam. Expedita similique nulla totam numquam,
                            explicabo quia debitis modi error maxime!</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
}

export default TechnologiesContainer