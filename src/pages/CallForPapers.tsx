import React from "react";

import "./pages.css";

const CallForPapers = () => {
  return (
    <div className="pageContainer">
      <h1>Call for Papers</h1>
      <p>
        We are soliciting papers about equitable and inclusive digital learning
        tools for K-12 and higher education. These papers can include (but are
        not limited to) the following topics
      </p>
      <ul>
        <li>
          Designing a learning tool considering specific demographic populations
          (ex: personalizing to gender, a tool for students with disabilities,
          etc.)
        </li>
        <li> Evaluating the accessibility of a learning tool</li>
        <li>Analyzing data from a learning tool with demographic elements</li>
        <li>Developing learner models considering demographics</li>
      </ul>
      <h2>Paper Guidelines</h2>
      All paper submissions must use the Springer format
      <p>We are accepting papers of the following lengths:</p>
      <ul>
        <li>Extended abstract: 2-4 pages (without references)</li>
        <li>Short paper: 6-8 (without references)</li>
      </ul>
      <h2>Submission</h2>
      <p>
        Please send papers to <u>as2953@cornell.edu</u>.
      </p>
      {/* REVIEW PROCESS */}
      <h2>Review Process</h2>
      <p>
        Review will be single-blind (reviewers are anonymous, authors are not).
        Reviewers will be asked to recommend the paper for acceptance or
        rejection, provide a rationale for their recommendation, and rate the
        papers on a scale of −1, 0, or 1 for the following metrics: relevance to
        workshop, interest to AIED community, and paper quality. Authors will be
        sent the anonymous reviews along with the paper decisions via email.
      </p>
      <h2>Total papers selected</h2>
      <p>We roughly estimate 10–15 submissions and a 40–60% acceptance rate</p>
      <h2>Important dates:</h2>
      <ul>
        <li>Call for papers opens: April 1, 2023 </li>
        <li> Paper submission deadline: May 19, 2023 </li>
        <li> Paper review period: May 20 - June 7, 2023 </li>
        <li>Final paper decisions: June 8 - 11, 2023 </li>
        <li>Notification of acceptance: June 11, 2023 </li>
        <li> Camera-ready deadline: June 25, 2023 </li>
        <li>Workshop day: July 3 or July 7, 2023</li>
      </ul>
    </div>
  );
};

export default CallForPapers;
