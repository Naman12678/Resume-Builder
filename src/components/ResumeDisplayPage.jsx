import React, { useRef } from 'react';

const ResumeDisplayPage = ({ formData }) => {
  const resumeRef = useRef();

  const handlePrint = () => {
    const printContent = resumeRef.current.innerHTML;
    const printWindow = window.open('', '', 'width=900,height=650');

    printWindow.document.write(`
      <html>
        <head>
          <style>
            @media print {
              body * {
                visibility: hidden;
              }
              #resume-print-content, #resume-print-content * {
                visibility: visible;
              }
              #resume-print-content {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
              }
              img {
                max-width: 100px; /* Adjust the size as needed */
                max-height: 100px; /* Adjust the size as needed */
              }
              .print-hide {
                display: none;
              }
            }
          </style>
        </head>
        <body>
          <div id="resume-print-content">${printContent}</div>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  if (!formData || Object.keys(formData).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-xl text-gray-800">
              build <span className="text-blue-500">resume</span>.
            </span>
          </div>
        </div>
      </nav>

      <section id="resume-sc" className="py-8">
        <div className="container mx-auto px-4">
          <div ref={resumeRef} className="bg-white shadow rounded-lg p-6">
            <div className="text-center mb-6">
              <img
                src={formData.image}
                alt="Profile"
                className="mx-auto rounded-full h-24 w-24"
              />
              <h2 className="text-2xl font-bold mt-4">
                {formData.firstname} {formData.middlename} {formData.lastname}
              </h2>
              <p className="text-lg">{formData.designation}</p>
              <p>{formData.address}</p>
              <p>{formData.email}</p>
              <p>{formData.phoneno}</p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Summary</h3>
              <p>{formData.summary}</p>
            </div>

            {/* Achievements */}
            {formData.achievements && formData.achievements.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Achievements</h3>
                <ul className="list-disc list-inside">
                  {formData.achievements.map((achievement, index) => (
                    <li key={index}>
                      <strong>{achievement.title}:</strong> {achievement.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Experience */}
            {formData.experiences && formData.experiences.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Experience</h3>
                <ul className="list-disc list-inside">
                  {formData.experiences.map((experience, index) => (
                    <li key={index}>
                      <strong>{experience.title}</strong> at {experience.description} ({experience.duration})
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Education */}
            {formData.educations && formData.educations.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Education</h3>
                <ul className="list-disc list-inside">
                  {formData.educations.map((education, index) => (
                    <li key={index}>
                      <strong>{education.title}</strong> from {education.description} ({education.year})
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Projects */}
            {formData.projects && formData.projects.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Projects</h3>
                <ul className="list-disc list-inside">
                  {formData.projects.map((project, index) => (
                    <li key={index}>
                      <strong>{project.title}:</strong> {project.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Skills */}
            {formData.skills && formData.skills.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Skills</h3>
                <ul className="list-disc list-inside">
                  {formData.skills.map((skill, index) => (
                    <li key={index}>{skill.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="text-center mt-4">
            <button 
              onClick={handlePrint} 
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Print Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumeDisplayPage;
