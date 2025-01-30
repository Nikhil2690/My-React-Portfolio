
const Projects = () => {

  const projectList = [
    {
      id:1,
      name: "Real Time Tracker",
      desc: "It is a Real time Tracker Web app which tracks the user's current location",
      techUsed: ["NodeJs", "expressJs", "Socket.io", "LeafletJs"],
      link:"https://real-time-tracker-zmfm.onrender.com/",
    },
    {
      id:2,
      name: "Nike Clone Website",
      desc: "It is a clone inspired by the Nike Brand website",
      techUsed: ["React", "Tailwind.Css"],
      link:"https://nike-clone-nik.netlify.app/",
    },
    {
      id:3,
      name: "Developer Portfolio",
      desc: "My personal developer portfolio created using vanilla (HTML, CSS, JS)",
      techUsed: ["HTML", "Css", "Javascript"],
      link:"https://nik-dev-portfolio.netlify.app/",
    },
    {
      id:4,
      name: "Weather App",
      desc: "Get the Live weather Forecast by entering the City, State, or Country name",
      techUsed: ["HTML", "Css", "Javascript"],
      link:"https://weather-app-ni.netlify.app",
    }
  ]
  return (
    <section id="projects" className="projects">
      <h1>Projects</h1>
      <div className="project-container">
      {projectList.map((project) => (
        <a href={project.link}
        key={project.id}
        className="project-card">
          <div>
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            <p><strong className="tech-details">Tech Used:</strong> {project.techUsed.join(", ")}</p>
          </div> 
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
