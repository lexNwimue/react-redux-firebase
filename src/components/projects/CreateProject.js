import { useState } from "react";

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleChange = (e) => {
    e.target.id === "title" ? setTitle(e.target.value) : console.log("");
    e.target.id === "content" ? setContent(e.target.value) : console.log("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, content);
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

export default CreateProject;
