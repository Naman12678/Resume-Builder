import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ResumeDisplayPage = ({ formData }) => {
  const navigate = useNavigate();
  const resumeRef = useRef();

  const handlePrint = () => {
    const printContents = resumeRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // To restore event listeners
  };

  // Check if formData is present
  if (!formData || Object.keys(formData).length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-lg font-semibold">No resume data found. Please go back and submit the form.</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => navigate('/resume')}
        >
          Go to Resume Form
        </button>
      </div>
    );
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
          <div className="bg-white shadow rounded-lg p-6" ref={resumeRef}>
            <div className="text-center mb-6">
              <img
                src={formData.image}
                alt="User"
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h2 className="text-2xl font-semibold mt-4">
                {formData.firstname} {formData.middlename} {formData.lastname}
              </h2>
              <p className="text-gray-600">{formData.designation}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <p><strong>Address:</strong> {formData.address}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Phone No:</strong> {formData.phoneno}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Summary</h3>
              <p>{formData.summary}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Achievements</h3>
              {formData.achievements.map((achieve, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold">{achieve.title}</h4>
                  <p>{achieve.description}</p>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Experience</h3>
              {formData.experiences.map((experience, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold">{experience.title}</h4>
                  <p>{experience.description}</p>
                  <p><strong>Duration:</strong> {experience.duration}</p>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Education</h3>
              {formData.educations.map((education, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold">{education.title}</h4>
                  <p>{education.description}</p>
                  <p><strong>Year:</strong> {education.year}</p>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Projects</h3>
              {formData.projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold">{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Skills</h3>
              {formData.skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold">{skill.title}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className='text-center'>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handlePrint}
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
