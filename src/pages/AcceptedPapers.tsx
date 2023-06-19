import React from "react";
import acceptedPapers from "../acceptedPapers.json";
import "./pages.css";

const AcceptedPapers = () => {
  const fullPapers = acceptedPapers["full"];
  const flashPapers = acceptedPapers["flash"];

  return (
    <div className="pageContainer">
      <h1>Accepted Papers</h1>
      <h2>Full Presentations</h2>

      {/* Iterate through the 10 min accepted papers */}
      {fullPapers.map((paper) => {
        return (
          <div>
            <h3>{paper.title}</h3>
            <ul>
              <li>Authors: {paper.authors}</li>
              <li>Abstract: {paper.abstract}</li>
            </ul>
          </div>
        );
      })}

      {/* Iterate through the 2 min accepted papers */}
      <h2>Short Presentations</h2>
      {flashPapers.map((paper) => {
        return (
          <div>
            <h3>{paper.title}</h3>
            <ul>
              <li>Authors: {paper.authors}</li>
              <li>Abstract: {paper.abstract}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default AcceptedPapers;
