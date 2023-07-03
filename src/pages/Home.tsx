import React from "react";
import { Link } from "react-router-dom";
import TopicsList from "../components/TopicsList";

import "./pages.css";

const Home = () => {
  return (
    <div className="pageContainer">
      <h1>
        Equity, Diversity, and Inclusion in Educational Technology Research and
        Development
      </h1>

      <h2>AIED 2023 Workshop</h2>
      <p>
        The 24th International Conference on Artificial Intelligence in
        Education, <a href="https://www.aied2023.org/">AIED 2023</a>, will take
        place July 3-7, 2023 in Tokyo, Japan and virtually (synchronous hybrid).
      </p>

      <p>
        The "Equity, Diversity, and Inclusion in Educational Technology Research
        and Development" (EDI in EdTech R&D) workshop will happen during this
        conference.
      </p>

      <p>
        <b>Workshop date and time: </b>July 7, 2023; 9:00 - 17:00 (Tokyo time)
      </p>

      <p>
        <b>Workshop format: </b> Full day (hybrid){" "}
      </p>
      <h2>Abstract</h2>
      <p>
        Modern education stands to greatly benefit from technological advances,
        especially in Artificial Intelligence (AI), that aim to enable effective
        and personalized learning for all students. However, to improve learning
        for the majority of students, AI solutions may exclude those who are
        under-represented due to unique differences in their demographic
        background or cognitive abilities. Towards combating this issue, this
        workshop is organized to initiate conversations about equity, diversity,
        and inclusion in educational technology research and development. The
        workshop is structured around three stages of learning engineering -
        system design, experimental study, and data analysis - with
        informational presentations, guest speakers, paper presentations and
        group discussions in each stage. We also invite community members to
        participate in the workshop and share their experience with Equity,
        Diversity, and Inclusion (EDI) practices. Through these conversations,
        we seek to collectively formulate a framework for developing and
        assessing equitable and inclusive learning systems.
      </p>
      <p>
        <b>Educational focus:</b> K-12 and higher education.
      </p>
      <b>Example topics for discussion and call for papers:</b>
      <TopicsList />

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

      <p>
        <h2>Questions</h2>
        Contact Adele Smolansky (workshop co-orgnaizer):{" "}
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
