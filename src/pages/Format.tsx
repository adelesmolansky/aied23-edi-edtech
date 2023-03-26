import React from "react";

import "./pages.css";

const Format = () => {
  return (
    <div className="pageContainer">
      <h1>Workshop Format</h1>
      <h2>Overview</h2>
      <p>
        The workshop will be a full-day workshop, consisting of presentations
        from organizers, guest speakers, paper presentations, and structured
        discussions. The workshop will begin with an introduction to different
        types of demographic factors and learning disabilities and the
        importance of considering these factors in AIED research. Subsequently,
        we will focus on best practices to promote equity and inclusion in the
        three stages of the learning engineering cycle. In particular, each
        stage will include an informational presentation from the workshop
        organizers, oral presentations of authors with related papers, a guest
        speaker, and a discussion about suitable equitable and inclusive
        practices.{" "}
      </p>

      <h2>Time</h2>
      <p>Full day workshop (10:00-12:30 and 13:30-16:00)</p>

      <h2>Location</h2>
      <p>In person (Toyko, Japan) with virtual option (zoom)</p>

      <h2>Schedule</h2>
      <p>
        The workshop will be a full-day workshop, consisting of presentations
        from organizers, guest speakers, paper presentations, and structured
        discussions. The workshop will begin with an introduction to different
        types of demographic factors and learning disabilities and the
        importance of considering these factors in AIED research. Subsequently,
        we will focus on best practices to promote equity and inclusion in the
        three stages of the learning engineering cycle. In particular, each
        stage will include an informational presentation from the workshop
        organizers, oral presentations of authors with related papers, a guest
        speaker, and a discussion about suitable equitable and inclusive
        practices.
      </p>
      <ul className="workshopFormatList">
        <li>
          <b>10:00 - 10:30:</b> Presentation from workshop organizers about
          background information on the workshop topic.{" "}
        </li>
        <li>
          <b>10:30 - 11:00:</b> Guest speakers - educators of students with
          disabilities.
        </li>
        <li>
          <b>11:00 - 11:15:</b> Presentation from the workshop organizers about
          step 1 of the Learning Engineering cycle: designing new tools. We will
          present prior evidence of how students' interaction with digital
          learning platforms differs by demographic factors, discuss how
          children with physical, cognitive, and behavioral disabilities can be
          considered in the initial design process, etc.{" "}
        </li>
        <li>
          <b>11:15 - 12:00:</b> Paper presentations from researchers who
          developed learning tools for minority students.
        </li>
        <li>
          <b>12:00 - 12:30:</b> Discussions about what we - researchers
          participating in the workshop - can do to make the design process of
          learning tools inclusive for all learners.
        </li>
        <li>
          <b>12:30 - 1:30 </b>: BREAK
        </li>
        <li>
          <b> 13:30 - 13:45:</b> Presentation from the workshop organizers about
          step 2 of the Learning Engineering cycle: evaluate the effectiveness
          of learning tools. We will introduce different types of experimental
          studies (e.g., lab studies, classroom studies, observational studies),
          the principles of a good experimental study, and examples of rigorous
          studies from prior works.
        </li>
        <li>
          <b>13:45 - 14:00:</b> Discussions about challenges with step 2 and
          potential solutions.
        </li>
        <li>
          <b>14:00 - 14:30:</b> Presentation from the workshop organizers about
          step 3 of the Learning Engineering cycle: iteratively improve learning
          tools and better understand students' learning process. We will
          present why demographics must be included in empirical studies as
          digital learning for minority students is non-trivial, several
          learning analytics techniques, examples of empirical studies.
        </li>
        <li>
          <b>14:30 - 15:30: </b> Paper presentation from researchers who
          analyzed learning tools data to draw insights on student learning and
          learning tool effectiveness.
        </li>
        <li>
          <b>15:30 - 16:00: </b> Discussions about the insights gained from
          techniques for step 3 and future research directions to promote equity
          and inclusion with educational technology, taking into account recent
          advances in social studies, technological accessibility, and AI
          methodologies.
        </li>
      </ul>
    </div>
  );
};

export default Format;
