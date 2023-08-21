import React from "react";
import { Icon } from "@iconify/react";
import javaIcon from "@iconify/icons-logos/java";
import nodeJsIcon from "@iconify/icons-logos/nodejs-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";

const About = ({ sharedBasicInfo, resumeBasicInfo }) => {
  if (sharedBasicInfo) {
    var profilepic = "images/" + sharedBasicInfo.image;
  }
  if (resumeBasicInfo) {
    var sectionName = resumeBasicInfo.section_name.about;
    var hello = resumeBasicInfo.description_header;
    var about = resumeBasicInfo.description.map((descr , i) => {
      return (
        <div className="mb-2" key={i}>
          {descr}
        </div>
      );
    });
  }

  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{ color: "black" }}>
          <span>{sectionName}</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                <img
                  width="275px"
                  src={profilepic}
                  alt="Avatar placeholder"
                />
                <Icon
                  icon={javaIcon}
                  style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={nodeJsIcon}
                  style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={reactIcon}
                  style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={vueIcon}
                  style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                />
              </span>
            </div>
          </div>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <span
                    className="iconify"
                    data-icon="emojione:red-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:yellow-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:green-circle"
                    data-inline="false"
                  ></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <span className="wave">{hello} :) </span>
                  <br />
                  <br />
                  {about}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
