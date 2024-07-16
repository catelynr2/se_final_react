import React from "react";
import "./NoResults.css";

export default function NoResults() {
  return (
    <div className="noresults">
      <img
        className="noresults__img"
        alt="no-results"
        src="../../../images/not-found.svg"
      />
      <p className="noresults__header">Nothing found</p>
      <p className="noresults__text">
        Sorry, but nothing matched your search terms
      </p>
    </div>
  );
}
