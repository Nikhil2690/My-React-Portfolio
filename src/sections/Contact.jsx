import Google from "../assets/google.svg";
import  reactIcon from "../assets/reacticon.svg";
import  linkedIn from "../assets/linkedin.svg"
import github from "../assets/github.svg";


const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="message">
      <h2>Built with</h2>
      <img src={reactIcon}/>
      </div>
 

      <div className="social-links">
      <a href="mailto:your.email@gmail.com"><img src={Google}  className="google-logo" /></a>
      <a href="https://www.linkedin.com/in/nikhiladwani/"><img src={linkedIn} className="linkedin-logo"/>  </a>
      <a href="https://github.com/Nikhil2690"><img src={github}   className="github-logo"/>  </a>
      </div>

      <div className="site-info">
      © 2025 Nikhil
      </div>
      
    </section>
  )
}

export default Contact
