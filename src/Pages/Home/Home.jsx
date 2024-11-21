import './home.scss'
import Summary from '../../Components/Summary/Summary.jsx'
import ProjectCard from '../../Components/ProjectCard/ProjectCard.jsx'
import works from '../../Datas/Works/works.json'
import intro from '../../Datas/Intro/intro.json'

function Home() {
  return (
    <main>
      <Summary intro={intro.intro} />
      <h3 className="project-title">Projets à l'honneur</h3>
      <section className="projectCards-container">
        {works
          .filter((work) => Number(work.id) < 3)
          .map((work) => (
            <ProjectCard
              key={work.id}
              id={work.id}
              cover={process.env.PUBLIC_URL + work.cover}
              title={work.title}
              text={work.text}
            />
          ))}
      </section>
    </main>
  )
}

export default Home
