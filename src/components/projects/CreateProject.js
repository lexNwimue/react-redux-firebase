import { useState } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";

const CreateProject = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleChange = (e) => {
    if (e.target.id === "title") setTitle(e.target.value);
    if (e.target.id === "content") setContent(e.target.value);
  };

  let state = {
    title,
    content,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, content);
    props.createProject(state);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create New Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={handleChange}
            autoComplete="no"
          />
        </div>
        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea
            className="materialize-textarea"
            id="content"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(null, mapDispatchToProps)(CreateProject);
