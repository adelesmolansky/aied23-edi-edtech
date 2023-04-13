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
      <p>Full day workshop (10:00-12:30 and 13:30-16:00; Toyko time zone)</p>

      <h2>Location and mode</h2>
      <p>Hybrid: In person (Toyko, Japan) with virtual option (zoom)</p>

      <h2>Schedule</h2>
      <p>
        The workshop will begin with an introduction to the topics covered in
        the workshop. We will discuss different types of demographic factors
        included within “equity, diversity, and inclusion” (EDI), the importance
        of considering EDI in AIED research, and how to consider EDI in the
        learning engineering cycle. Throughout the workshop, we will hear from
        the audience and committee members about their contribution to the
        research topic. We will discuss prior and future work organized around
        each step of the learning engineering cycle.
      </p>
      <ul className="workshopFormatList">
        <li>
          <b>10:00 - 10:45:</b> Introductions from the workshop members;
          presentation from workshop organizers about background information on
          the workshop topic.
        </li>
        <li>
          <b>10:45 - 11:30:</b> Guest speaker from the organizing committee
          (speaker TBD).
        </li>
        <li>
          <b>11:30 - 12:30:</b> Paper presentations for all accepted papers on
          the design and evaluation of new learning tools{" "}
          <i>(learning engineering cycle step 1 and 2)</i>.
        </li>

        <li>
          <b>12:30 - 13:30 </b>: BREAK
        </li>

        <li>
          <b> 13:30 - 14:15:</b> Paper presentations for all accepted papers on
          the design and evaluation of new learning tools{" "}
          <i>(learning engineering cycle step 3)</i>.
        </li>

        <li>
          <b>14:15 - 14:30:</b> Set up discussion.
        </li>
        <li>
          <b>14:30 - 15:30: </b> Small group discussions organized by learning
          engineering cycle steps.
        </li>
        <li>
          <b>15:30 - 16:00: </b> Full group discussion{" "}
          <i>
            (ex: Discussions about the insights gained from techniques for each
            step of the learning engineering cycle and future research
            directions to promote EDI with educational technology research and
            development, taking into account recent advances in social studies,
            technological accessibility, and AI methodologies.
          </i>
          .
        </li>
      </ul>
    </div>
  );
};

export default Format;
