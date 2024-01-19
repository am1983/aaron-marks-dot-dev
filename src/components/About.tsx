import './styles/Summary.css';

const About = () => {
  return (
    <div id="summary" className="summary section">
        <div className="section-body">
          <h1 className="overlay-header full-width section-header">About Me</h1>
          <div className="section-content">
            <h2>Hi! I'm Aaron Marks. I like making things with code... like this website.</h2>
            <div className="description-title">I am...</div>
            <div className="description-item">a full-stack software engineer who solves problems using the best tools for the job. If one of those tools is code, then you will find me working with technologies like C#, .NET 8, MSSQL, Docker, Angular and/or React ...</div>
            <div className="description-item">an educator who believes that technical education should be made accessible to as many people as possible. Folks should be taught to build cool things first, then we can teach them the fancy terms we like to use ...</div>
            <div className="description-item">and an advocate for diversity, equity, and inclusion (DEI) as well as continuing education initiatives in the workplace.</div>

            <div className="description-title">
            I am not...
            </div>
            <div className="description-item">
              a UI designer of any sort, really...
            </div>
            <div className="description-item">
              a mobile application developer...
            </div>
            <div className="description-item">
              a workaholic.
            </div>
          </div>
        </div>
    </div>
  )
}

export default About