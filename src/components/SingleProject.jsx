import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./singleProject.css";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../Context";

function SingleProject() {
  //retrive params into variables
  const param = useParams();
  console.log(param.id);

  //context data
  const { navBarStatus } = useContext(GlobalContext);

  return (
    <div
      className={
        navBarStatus ? "singleProject singleProjectMoved" : "singleProject"
      }
      // className="singleProject"
    >
      <Link to="/">Go Back</Link>
      {param.id}
    </div>
  );
}

export default SingleProject;
