import React, { useState } from "react";
import "./Qualifications.css";
import MotionWrap from '../wrapper/MotionWrap'

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="title section__title">Qualification</h2>
      <span className="section__subtitle">My Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={()=> toggleTab(1)}
          >
            <i className="uil uil-graduation-cap"></i> Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={()=> toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt"></i> Experience
          </div>
        </div>

        <div className="qualification__section">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Btech Computer Science Engineering
                </h3>
                <span className="qualification__subtitle">
                  {" "}
                  Bennett University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022-present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Student</h3>
                <span className="qualification__subtitle">
                  {" "}
                  Woodward public school
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2010-2021
                </div>
              </div>

              {/* <div>
                  <span className="qualification__rounder"></span>
                  <div className="qualification__line"></div>
                </div> */}
            </div>
          </div>

          <div className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Intern</h3>
                <span className="qualification__subtitle">
                  {" "}
                  Easysoft Services
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> May-July 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            {/* <div className="qualification__content">
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Student</h3>
                  <span className="qualification__subtitle">
                    {" "}
                    Woodward public school
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2010-2021
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <div className="qualification__line"></div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotionWrap(Qualifications);
