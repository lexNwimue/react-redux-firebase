const initState = {
  projects: [
    { id: "1", title: "Beach Memo", content: "lorem ipsum dolor sit ame" },
    { id: "2", title: " Ceremony", content: "lorem ipsum dolor sit ame" },
    { id: "3", title: "Dorime", content: "lorem ipsum dolor sit ame" },
    { id: "4", title: "Nations League", content: "lorem ipsum dolor sit ame" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Created Project: ", action.project);
      break;

    default:
  }
  return state;
};

export default projectReducer;
