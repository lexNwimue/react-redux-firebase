const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by lex Nwimue</p>
        <p className="grey-text">Jan. 12, 2022</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
