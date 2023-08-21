import React, { useState, useEffect } from "react";
import $ from "jquery";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "./components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const App = () => {

  const [sharedData, setSharedData] = useState();
  const [resumeData, setResumeData] = useState();

  useEffect(() => {
    loadSharedData();
    loadResumeFromPath();
  }, []);

  const loadResumeFromPath = () => {
    $.ajax({
      url: `res_primaryLanguage.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        setResumeData(data);
      },
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  const loadSharedData = () => {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        setSharedData(data);
      },
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  };

  return (
    <>
      {sharedData && resumeData &&
        <div>
          <Header sharedData={sharedData.basic_info} />
          <About
            resumeBasicInfo={resumeData.basic_info}
            sharedBasicInfo={sharedData.basic_info}
          />
          <Projects
            resumeProjects={resumeData.projects}
            resumeBasicInfo={resumeData.basic_info}
          />
          <Skills
            sharedSkills={sharedData.skills}
            resumeBasicInfo={resumeData.basic_info}
          />
          <Experience
            resumeExperience={resumeData.experience}
            resumeBasicInfo={resumeData.basic_info}
          />
          <Footer sharedBasicInfo={sharedData.basic_info} />
        </div>
      }
    </>
  );
}

export default App;