import { useParams } from "react-router-dom";
const ProjectDetails = (props) => {
  let { id } = useParams();
  console.log(id);
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At est
            eaque hic vero voluptates repellat minus maiores aliquam cum,
            perferendis dolorem quisquam similique unde aut nisi libero officiis
            aspernatur saepe.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by lex Nwimue</div>
          <div>Jan. 15, 2022</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
