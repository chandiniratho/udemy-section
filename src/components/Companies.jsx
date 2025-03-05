import React from "react";
import companies from "../data/companies.json";
import "../assets/styles.css";

const Companies = () => {
  return (
    <div className="companies-section">
      <p className="companies-heading">{companies.heading}</p>
      <div className="companies-logos">
        {companies.contents.map((company, index) => (
          <img key={index} src={company.image.url} alt={company.image.altText} />
        ))}
      </div>
    </div>
  );
};

export default Companies;
