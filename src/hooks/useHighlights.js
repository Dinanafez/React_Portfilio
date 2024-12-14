import { useState, useEffect } from "react";

// Custom Hook to manage highlights data
const useHighlights = () => {
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API or database
    const fetchHighlights = async () => {
      const data = [
        {
          id: 1,
          title: "Expertise in Web Development",
          description:
            "Skilled in building responsive and user-friendly websites using modern technologies like HTML, CSS, JavaScript, and React.",
        },
        {
          id: 2,
          title: "E-commerce Specialist",
          description:
            "Developed custom e-commerce solutions, including filtering, cart management, and secure payment integration.",
        },
        {
          id: 3,
          title: "Database Management",
          description:
            "Proficient in designing and managing databases with MySQL, PostgreSQL, and MongoDB.",
        },
       
      ];
      setHighlights(data);
    };

    fetchHighlights();
  }, []);

  return highlights;
};

export default useHighlights;
