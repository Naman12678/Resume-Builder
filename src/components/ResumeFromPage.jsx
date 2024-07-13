import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResumeFormPage = ({ setFormData }) => {
  const [localFormData, setLocalFormData] = useState({
    firstname: '',
    middlename: '',
    lastname: '',
    image: '',
    designation: '',
    address: '',
    email: '',
    phoneno: '',
    summary: '',
    achievements: [],
    experiences: [],
    educations: [],
    projects: [],
    skills: [],
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setLocalFormData({
        ...localFormData,
        [name]: URL.createObjectURL(files[0]),
      });
    } else {
      setLocalFormData({
        ...localFormData,
        [name]: value,
      });
    }
  };

  const handleAddItem = (type) => {
    setLocalFormData({
      ...localFormData,
      [type]: [...localFormData[type], { title: '', description: '' }],
    });
  };

  const handleItemChange = (e, index, type) => {
    const updatedItems = localFormData[type].map((item, i) =>
      i === index ? { ...item, [e.target.name]: e.target.value } : item
    );
    setLocalFormData({
      ...localFormData,
      [type]: updatedItems,
    });
  };

  const handleRemoveItem = (index, type) => {
    const updatedItems = localFormData[type].filter((_, i) => i !== index);
    setLocalFormData({
      ...localFormData,
      [type]: updatedItems,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(localFormData);
    navigate('/resumedisplay');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
              <span className="font-semibold text-xl text-gray-800">
                Build <span className="text-blue-500">Resume</span>
              </span>
          </div>
        </div>
      </nav>

      <section id="about-sc" className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow rounded-lg p-6">
            <form id="cv-form" onSubmit={handleSubmit}>
              {/* About Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">About Section</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="form-elem">
                    <label className="form-label">First Name :  </label>
                    <input
                      name="firstname"
                      type="text"
                      className="form-control border border-gray-300 rounded"
                      onChange={handleInputChange}
                      placeholder=" e.g. John "
                    />
                  </div>
                  <div className="form-elem">
                    <label className="form-label">Middle Name <span className="opt-text">(optional) : </span></label>
                    <input
                      name="middlename"
                      type="text"
                      className="form-control border border-gray-300 rounded"
                      onChange={handleInputChange}
                      placeholder=" e.g. Herbert "
                    />
                  </div>
                  <div className="form-elem">
                    <label className="form-label">Last Name : </label>
                    <input
                      name="lastname"
                      type="text"
                      className="form-control border border-gray-300 rounded"
                      onChange={handleInputChange}
                      placeholder=" e.g. Doe "
                    />
                  </div>
                  <div className="form-elem">
                    <label className="form-label">Your Image : </label>
                    <input
                      name="image"
                      type="file"
                      className="form-control border border-gray-300 rounded"
                      accept="image/*"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-elem">
                    <label className="form-label">Designation : </label>
                    <input
                      name="designation"
                      type="text"
                      className="form-control border border-gray-300 rounded"
                      onChange={handleInputChange}
                      placeholder=" e.g. Sr. Accountant "
                    />
                  </div>
                  <div className="form-elem">
                    <label className="form-label">Address : </label>
                    <input
                      name="address"
                      type="text"
                      className="form-control border border-gray-300 rounded"
                      onChange={handleInputChange}
                      placeholder=" e.g. Lake Street-23 "
                    />
                  </div>
                  <div className="form-elem">
                    <label className="form-label">Email : </label>
                    <input
                      name="email"
                      type="text"
                      className="form-control border border-gray-300 rounded"
                      onChange={handleInputChange}
                      placeholder=" e.g. johndoe@gmail.com "
                    />
                  </div>
                  <div className="form-elem">
                    <label className="form-label">Phone No : </label>
                    <input
                      name="phoneno"
                      type="text"
                      className="form-control border border-gray-300 rounded"
                      onChange={handleInputChange}
                      placeholder=" e.g. 456-768-798 "
                    />
                  </div>
                </div>
              </div>

              {/* Achievements Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Achievements : </h3>
                <div className="space-y-4">
                  {localFormData.achievements.map((achieve, index) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4" key={index}>
                      <div className="form-elem">
                        <label className="form-label">Title : </label>
                        <input
                          name="title"
                          type="text"
                          className="form-control border border-gray-300 rounded"
                          onChange={(e) =>
                            handleItemChange(e, index, 'achievements')
                          }
                          value={achieve.title}
                          placeholder=" e.g. Award Title "
                        />
                      </div>
                      <div className="form-elem">
                        <label className="form-label">Description : </label>
                        <input
                          name="description"
                          type="text"
                          className="form-control border border-gray-300 rounded"
                          onChange={(e) =>
                            handleItemChange(e, index, 'achievements')
                          }
                          value={achieve.description}
                          placeholder=" e.g. Award Description "
                        />
                      </div>
                      <button
                        type="button"
                        className="repeater-remove-btn bg-black text-white px-2 py-1 rounded"
                        onClick={() => handleRemoveItem(index, 'achievements')}
                      >
                        -
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="repeater-add-btn bg-black text-white px-2 py-1 rounded"
                    onClick={() => handleAddItem('achievements')}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Experience Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Experience</h3>
                <div className="space-y-4">
                  {localFormData.experiences.map((exp, index) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" key={index}>
                      <div className="form-elem">
                        <label className="form-label">Job Title : </label>
                        <input
                          name="title"
                          type="text"
                          className="form-control border border-gray-300 rounded"
                          onChange={(e) => handleItemChange(e, index, 'experiences')}
                          value={exp.title}
                          placeholder=" e.g. Software Engineer "
                        />
                      </div>
                      <div className="form-elem">
                        <label className="form-label">Company : </label>
                        <input
                          name="description"
                          type="text"
                          className="form-control border border-gray-300 rounded"
                          onChange={(e) => handleItemChange(e, index, 'experiences')}
                          value={exp.description}
                          placeholder=" e.g. Google "
                        />
                      </div>
                      <button
                        type="button"
                        className="repeater-remove-btn bg-black text-white px-2 py-1 rounded"
                        onClick={() => handleRemoveItem(index, 'experiences')}
                      >
                        -
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="repeater-add-btn bg-black text-white px-2 py-1 rounded"
                    onClick={() => handleAddItem('experiences')}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Education Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Education : </h3>
                <div className="space-y-4">
                  {localFormData.educations.map((edu, index) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" key={index}>
                      <div className="form-elem">
                        <label className="form-label">Degree : </label>
                        <input
                          name="title"
                          type="text"
                          className="form-control border border-gray-300 rounded"
                          onChange={(e) => handleItemChange(e, index, 'educations')}
                          value={edu.title}
                          placeholder=" e.g. Bachelor of Science "
                        />
                      </div>
                      <div className="form-elem">
                        <label className="form-label">Institution : </label>
                        <input
                          name="description"
                          type="text"
                          className="form-control border border-gray-300 rounded"
                          onChange={(e) => handleItemChange(e, index, 'educations')}
                          value={edu.description}
                          placeholder=" e.g. MIT "
                        />
                      </div>
                      <button
                        type="button"
                        className="repeater-remove-btn bg-black text-white px-2 py-1 rounded"
                        onClick={() => handleRemoveItem(index, 'educations')}
                      >
                        -
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="repeater-add-btn bg-black text-white px-2 py-1 rounded"
                    onClick={() => handleAddItem('educations')}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Projects Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Projects : </h3>
                <div className="space-y-4">
                  {localFormData.projects.map((proj, index) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" key={index}>
                      <div className="form-elem">
                        <label className="form-label">Project Title : </label>
                        <input
                          name="title"
                          type="text"
                          className="form-control border border-gray-300 rounded"
                          onChange={(e) => handleItemChange(e, index, 'projects')}
                          value={proj.title}
                          placeholder=" e.g. Web Development "
                        />
                      </div>
                      <div className="form-elem">
                        <label className="form-label">Description : </label>
                        <input
                          name="description"
                          type="text"
                          className="form-control border border-gray-300 rounded"
                          onChange={(e) => handleItemChange(e, index, 'projects')}
                          value={proj.description}
                          placeholder=" e.g. Developed a website "
                        />
                      </div>
                      <button
                        type="button"
                        className="repeater-remove-btn bg-black text-white px-2 py-1 rounded"
                        onClick={() => handleRemoveItem(index, 'projects')}
                      >
                        -
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="repeater-add-btn bg-black text-white px-2 py-1 rounded"
                    onClick={() => handleAddItem('projects')}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Skills Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Skills : </h3>
                <div className="space-y-4">
                  {localFormData.skills.map((skill, index) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" key={index}>
                      <div className="form-elem">
                        <label className="form-label">Skill : </label>
                        <input
                          name="title"
                          type="text"
                          className="form-control border border-gray-300 rounded"
                          onChange={(e) => handleItemChange(e, index, 'skills')}
                          value={skill.title}
                          placeholder=" e.g. JavaScript "
                        />
                      </div>
                      <button
                        type="button"
                        className="repeater-remove-btn bg-black text-white px-2 py-1 rounded"
                        onClick={() => handleRemoveItem(index, 'skills')}
                      >
                        -
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="repeater-add-btn bg-black text-white px-2 py-1 rounded"
                    onClick={() => handleAddItem('skills')}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className='text-center'>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumeFormPage;
