import React from "react";
import useHighlights from "../hooks/useHighlights"; // Import the custom hook
import "./Highlights.css"; // Import CSS for styling

const Highlights = () => {
  const highlights = useHighlights(); // Use the custom hook

  return (
    <section className="highlights">
      <div className="container">
        <h2 className="highlights-title">Highlights</h2>
        <div className="highlights-content">
          {highlights.map((highlight) => (
            <div className="highlight-item" key={highlight.id}>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
