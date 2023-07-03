import React from "react";
import { Link } from "react-router-dom";

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
      <p>Full day workshop (9:00-17:00 Tokyo time zone)</p>

      <h2>Location and mode</h2>
      <p>Hybrid: In person (Tokyo, Japan) with virtual option (zoom)</p>

      <h2>Schedule</h2>
      <p>
        The workshop will begin with an introduction to the topics covered in
        the workshop. We will discuss different types of demographic factors
        included within “equity, diversity, and inclusion” (EDI), the importance
        of considering EDI in AIED research, and how to consider EDI in the
        learning engineering cycle. Throughout the workshop, we will hear from
        the audience and committee members about their contribution to the
        research topic. We will discuss prior and future work organized around
        each step of the learning engineering cycle.{" "}
        <Link to="/acceptedPapers">Click here to see the accepted papers</Link>
      </p>

      <ul className="workshopFormatList">
        <li>
          <b>9:00 - 9:30:</b> Introductions from the workshop members and
          attendees; workshop overview of the agenda and learning outcomes.
        </li>
        <li>
          <b>9:30 - 10:00:</b> Guest speaker from the organizing committee
          member Ryan Baker.
        </li>
        <li>
          <b>10:00 - 10:30:</b> Group discussion based on Ryan's presentation.
        </li>
        <li>
          <b>10:30 - 11:00 </b>: COFFEE BREAK
        </li>
        <li>
          <b> 11:00 - 12:15:</b> Paper presentations from all virtual
          presenters. There will be four 10-minute presentations + 4 min Q&A and
          three 2-min flashtalks + 2 min Q&A.{" "}
          <i>
            Presentors: Esdras Lins Bispo Jr.; Mac Clapper; Ivon Arroyo,
            Magdalen Beiting, Siyuan Li, Ndidi Obinwanne, Linlin Li.{" "}
          </i>
        </li>
        <li>
          <b>12:15 - 12:40 </b>: Small group discussions based on paper
          presentations.
        </li>

        <li>
          <b>12:40 - 13:30 </b>: LUNCH BREAK
        </li>

        <li>
          <b> 13:30 - 14:30:</b> Paper presentations from all in-person
          presenters. There will be two 10-minute presentations + 4 min Q&A and
          four 2-min flashtalks + 2 min Q&A.{" "}
          <i>
            Presentors: Ben Nye, Roberto Feltrero, Jinsook Lee, Marie-Luce
            Bourguet, Rachel Van Campenhout.{" "}
          </i>
        </li>
        <li>
          <b>14:30 - 15:00:</b> DSmall group discussions based on paper
          presentations.
        </li>
        <li>
          <b>15:00 - 15:30 </b>: COFFEE BREAK
        </li>

        <li>
          <b>15:30 - 15:45:</b> Introduce and set up final discussion.
        </li>
        <li>
          <b>15:45 - 16:15: </b> Final small group discussions.{" "}
          <i>
            Guiding question: What research can we do to promote equity and
            inclusion with educational technology, taking into account recent
            advances in social studies, technological accessibility, and AI
            methodologies.
          </i>
        </li>
        <li>
          <b>16:15 - 16:45:</b> Full group discussion.{" "}
          <i>
            Goal: formulate a framework for developing and assessing equitable
            and inclusive educational technology.{" "}
          </i>
        </li>
        <li>
          <b>16:45 - 17:00:</b> Closing remarks and next steps.
        </li>
      </ul>
    </div>
  );
};

export default Format;
