import React from "react";
import TopicsList from "../components/TopicsList";

import "./pages.css";

const CallForPapers = () => {
  return (
    <div className="pageContainer">
      <h1>Call for Papers</h1>
      <p>
        Modern technologies have transformed teaching and learning by increasing
        access to information, enabling virtual or remote learning, and
        diversifying learning activities through multimedia channels [1].
        However, their effects are not uniform across learner populations; for
        instance, students from low-income or rural areas may not have the
        technology access required for digital learning, and those with
        disabilities may struggle to use technologies that were not designed
        with accessibility in mind [2]. Advances in AI allow for a greater
        degree of personalization, but may amplify existing inequities and
        negatively impact student learning [3]. Thus, to fully realize the
        potential of educational technology, it is crucial to ensure the
        commitment to equity, whereby all students are treated fairly with equal
        access to the resources necessary for their success, and inclusion,
        whereby the diversity of students with regards to race, social class,
        ethnicity, religion, gender and ability are valued and incorporated into
        technology design [4]. To help researchers identify and overcome the
        barriers to these goals, this workshop will explore equity, diversity
        and inclusion (EDI) in educational technology research and
        development.In a broader sense, we view this workshop as a follow-up to
        previous conversations on ethics in AIED [5, 6] and an opportunity to
        connect participants for future collaborations, such as on a literature
        review paper in this area of research.
      </p>
      <h2>Paper Topics</h2>
      <p>
        As part of the workshop we are soliciting papers about equitable and
        inclusive digital learning tools for K-12 and higher education. These
        papers can include (but are not limited to) the following topics:
      </p>
      <TopicsList />

      <h2>Paper Guidelines</h2>
      <p>We are accepting paper submissions in one of the following formats:</p>
      <ul>
        <li>Extended abstract: 2-4 pages (without references)</li>
        <li>Short paper: 6-8 (without references)</li>
      </ul>
      <p>
        All paper submissions must follow the Springer template. Authors should
        use either the Word or LaTeX templates provided by{" "}
        <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines">
          Springer
        </a>
      </p>
      <h2>Submission</h2>
      <p>
        Submissions can be made through the EasyChair system. Submission link
        will be posted here shortly. Please see the Important Dates below for
        the submission deadline.
      </p>
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

      <h2>Review Process</h2>
      <p>
        Reviews will be single-blind (reviewers are anonymous, authors are not).
        Reviewers will be asked to recommend the paper for acceptance or
        rejection, provide a rationale for their recommendation, and rate the
        papers on a scale of -1, 0, or 1 for the following metrics: relevance to
        the workshop, interest to the AIED community, and paper quality. Authors
        will be notified of the anonymous reviews along with the paper decisions
        via email.
      </p>

      <h2>Selected Papers</h2>
      <p>
        Authors of accepted papers will be invited to give a paper presentation
        of 10-20 minutes (depending on the number of papers selected). We will
        also publish accepted papers in the workshop proceedings.
      </p>

      <h3>References</h3>
      <p>
        [1] Bull, G., Thompson, A. D., Schmidt-Crawford, D., Garofalo, J.,
        Hodges, C. B., Spector, J. M., ... & Kinshuk. (2016). Evaluating the
        impact of educational technology. Journal of Digital Learning in Teacher
        Education, 32(4), 117-118.
      </p>
      <p>
        [2] Lynch, P., Singal, N., & Francis, G. A. (2022). Educational
        technology for learners with disabilities in primary school settings in
        low-and middle-income countries: a systematic literature review.
        Educational Review, 1-27.
        <p>
          [3] Holstein, K., & Doroudi, S. (2022). Equity and Artificial
          Intelligence in education. In The Ethics of Artificial Intelligence in
          Education (pp. 151-173). Routledge.{" "}
        </p>
      </p>
      <p>
        [4] Ainscow, M. (2020). Promoting inclusion and equity in education:
        lessons from international experiences. Nordic Journal of Studies in
        Educational Policy, 6(1), 7-16.
      </p>
      <p>
        [5] Holmes, W., Bektik, D., Denise, W., Woolf, B.P. (2018). Ethics in
        aied: Who cares? In Proceedings of the 19th International Conference on
        Artificial Intelligence in Education, pp. 551-553.
      </p>
      <p>
        [6] Holmes, W., Bektik, D., Di Gennaro, M., Woolf, B.P., Luckin, R.
        (2019). Ethics in aied: Who cares? In Proceedings of the 20th
        International Conference on Artificial Intelligence in Education, pp.
        424-425.
      </p>
    </div>
  );
};

export default CallForPapers;
