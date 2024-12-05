import React from "react";

const EducationalResources = () => {
  const resources = [
    {
      category: "Mindfulness",
      links: [
        { name: "Mindfulness Basics", url: "https://www.mindfulness.org" },
        { name: "Mindful Breathing", url: "https://www.mindfulbreathing.com" },
      ],
    },
    {
      category: "Stress Management",
      links: [
        { name: "Coping with Stress", url: "https://www.stressrelief.org" },
        { name: "Stress Reduction Techniques", url: "https://www.stressreduction.com" },
      ],
    },
  ];

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Educational Resources</h5>
        {resources.map((resource, index) => (
          <div key={index} className="accordion mb-2" id={`accordion${index}`}>
            <div className="accordion-item">
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="true"
                  aria-controls={`collapse${index}`}
                >
                  {resource.category}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse show"
                aria-labelledby={`heading${index}`}
              >
                <div className="accordion-body">
                  {resource.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-block mb-1"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalResources;
