import profileImg from "../assets/profileImage.jpg";

const About = () => {
  return (
    <section id="about" className="about">
       <div className="about-container">
        <div className="about-image">
          <img src={profileImg}/>
        </div>

        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a passionate web developer with experience in React, JavaScript, and CSS.
            I like creating beautiful, functional, and responsive websites.
          </p>
          <p>
            My goal is to build seamless user experiences and continuously improve my skills.
          </p>
        </div>
      </div>

    </section>
  )
}

export default About
