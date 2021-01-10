import React, { useContext } from "react";
import Project from "./Project";
import "./allProjects.css";
import { GlobalContext } from "../Context";

function AllProjects() {
  const { projects, navBarStatus } = useContext(GlobalContext);
  return (
    <div>
      <main>
        <div
          className={
            navBarStatus ? "albumMoved pt-5 bg-light" : "album pt-5 bg-light"
          }
        >
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {projects.length > 0
                ? projects.map(project => (
                    <Project project={project} key={project.id} />
                  ))
                : null}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AllProjects;
