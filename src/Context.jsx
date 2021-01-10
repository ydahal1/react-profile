import React, { useState, createContext, useEffect } from "react";
import database from "./firebase";

//Initialize context
export const GlobalContext = createContext();

export const GlobalContextProvider = props => {
  //Navba status
  const [navBarStatus, setNavBarStatus] = useState(false);

  //personal info state
  const [personalInfo, setPersonalInfo] = useState({
    about: "",
    email: "",
    gitHub: "",
    heroText: "",
    id: "",
    linkedIn: "",
    name: "",
    phone: ""
  });

  // function to grab personal data
  const personalDoc = database
    .collection("profile")
    .doc("aJewDCL23tcGnTkF5gka");

  function getPersonalData() {
    personalDoc
      .get()
      .then(function(doc) {
        if (doc.exists) {
          setPersonalInfo(doc.data());
        } else {
          return { error: "No doc found" };
        }
      })
      .catch(function(error) {
        return error;
      });
  }

  //projects state
  const [projects, setprojects] = useState([]);
  const projectDoc = database.collection("projects");

  function getProjectData() {
    let projectDetails = [];
    projectDoc
      .get()
      .then(result => {
        projectDetails = result.docs.map(doc => doc.data());
        setprojects(projectDetails);
      })
      .catch(err => {
        console.log(err);
      });

    setprojects(projectDetails);
  }

  // calling get data function
  useEffect(() => {
    getPersonalData();
    getProjectData();
  }, []);

  //function to increase likes
  const addLikes = id => {
    let newLikes = [];
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === id && projects[i].liked === false) {
        newLikes.push({
          ...projects[i],
          likes: projects[i].likes + 1,
          liked: true
        });
      } else if (projects[i].id === id && projects[i]) {
        newLikes.push({
          ...projects[i],
          likes: projects[i].likes - 1,
          liked: false
        });
      } else {
        newLikes.push(projects[i]);
      }
      setprojects(newLikes);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        personalInfo,
        projects,
        addLikes,
        navBarStatus,
        setNavBarStatus
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
