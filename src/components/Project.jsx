import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./project.css";
import { GlobalContext } from "../Context";

function Project({ project }) {
  //Getting data from context
  // const { addLikes } = useContext(GlobalContext);
  const { addLikes } = useContext(GlobalContext);

  //likes to be added
  const [editItem, setEditItem] = useState(null);
  const isLiked = project.liked;
  const [likeClass, setLikeClass] = useState("");

  const handleLikes = id => {
    setEditItem(id);
  };

  useEffect(() => {
    let likeStyle = project.liked
      ? "fa fa-thumbs-o-up fa-thumbs-o-up-clicked  fa-thumbs-up"
      : "fa fa-thumbs-o-up";
    setLikeClass(likeStyle);
  }, [isLiked]);

  useEffect(() => {
    addLikes(editItem);
    setEditItem(null);
  }, [editItem]);

  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="bd-placeholder-img card-img-top"
          src={project.poster}
          alt={project.title}
        ></img>

        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">
            {project.about.substring(0, 80)}
            {project.about.length > 80 ? (
              <Link to={`project/${project.id}`} className="linkDots">
                ...
              </Link>
            ) : null}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a
                type="button"
                className="btn btn-sm btn-outline-secondary btn-live"
                href={project.live}
              >
                Live
              </a>
              <a
                type="button"
                className="btn btn-sm btn-outline-secondary btn-sourceCode"
                href={project.source}
              >
                Source Code
              </a>
            </div>

            <small className="text-muted-hero">
              <i
                className={likeClass}
                aria-hidden="true"
                onClick={() => handleLikes(project.id)}
              >
                &nbsp;
                <span className="likeCounts">{project.likes}</span>
              </i>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
