import Banner from "../../../components/Home/Banner";
import Projects from "../../../components/Home/Projects";
import SkillSection from "../../../components/Home/SkillSection";

const HomePage = () => {
  return (
    <div>
      <section id="banner">
        <Banner />
      </section>

      <section id="skill">
        <SkillSection />
      </section>

      <section id="projects">
        <Projects />
      </section>

      {/* <section id="educational">
    <Education />
  </section> */}
      {/* <section id="about">
    <About />
  </section> */}
      {/* <section id="contact">
    <Contact />
  </section> */}
    </div>
  );
};

export default HomePage;
