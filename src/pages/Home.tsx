import React from "react";
import { Link } from "react-router-dom";

import "./pages.css";

const Home = () => {
  return (
    <div className="pageContainer">
      <h1>AIED 2023 Workshop</h1>
      <h2>
        Equity, Diversity, and Inclusion in Educational Technology Research and
        Development
      </h2>
      <p>
        Modern education stands to greatly benefit from technological advances,
        especially in Artificial Intelligence (AI), that aim to enable effective
        and personalized learning for all students. However, to improve learning
        for the majority of students, AI solutions may exclude those who are
        under-represented due to unique differences in their demographic
        background or cognitive abilities. Towards combating this issue, we
        propose a workshop that will initiate conversations about equity,
        diversity, and inclusion in educational technology research and
        development. The workshop is structured around three stages of learning
        engineering – system design, experimental study, and data analysis –
        with informational presentations, guest speakers, paper presentations
        and group discussions in each stage. We will also solicit papers from
        the AIED community about equitable and inclusive digital learning tools,
        with selected authors being invited to present their work. Through the
        participation of community members from multiple disciplines, we seek to
        formulate a framework for developing and assessing equitable and
        inclusive learning systems.
      </p>
      <h2>Next steps</h2>
      <p>
        Please register for the workshop and submit (optional) a workshop paper.
        See the <Link to="/callForPapers">Call for Papers page </Link> for
        details on paper submissions.
      </p>
      <p>
        Authors of selected papers will be asked to give a paper presentation of
        10-20 minutes (depending on the number of papers selected). We will also
        publish selected papers to a popular workshop proceedings platform.
      </p>
      <h2>Workshop date</h2>
      <p>July 3 or 7, 2023</p>
      <h2>Workshop format</h2>
      <p>Full day (in person & virtual option)</p>
      <p>
        <h2>Questions</h2>
        Contact Adele Smolansky (lead workshop orgnaizer):{" "}
        <a
          target="_blank"
          href="mailto:as2953@cornell.edu"
          rel="noreferrer"
          className="email"
        >
          as2953@cornell.edu
        </a>
      </p>
    </div>
  );
};

export default Home;
