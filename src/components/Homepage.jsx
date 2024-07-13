import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToResumePage = () => {
    navigate('/resume');
  };

  return (
    <div>
      <nav className="navbar bg-white">
        <div className="container mx-auto px-4">
          <div className="navbar-content flex justify-between items-center">
            <div className="brand-and-toggler flex items-center">
              <a href="/" className="navbar-brand flex items-center">
                <span className="navbar-brand-text text-lg font-semibold">Build <span className="text-blue-500">Resume.</span></span>
              </a>
              <br/><br/><br/>
            </div>
          </div>
        </div>
      </nav>

      <header className="header bg-gray-100" id="header">
        <div className="container mx-auto px-4 text-center">
          <div className="header-content py-16">
            <h6 className="text-blue-900 text-sm uppercase font-semibold tracking-wider">online resume builder</h6>
            <h1 className="lg-title text-3xl font-bold mt-4">Only 2% of resumes make it past the first round. Be in the top 2%</h1>
            <p className="text-lg text-gray-700 mt-4">Use professional field-tested resume templates that follow that exact 'resume rules' employers look for. Easy to use and done within minutes - try now for free!</p>
            <Button
              variant="contained"
              color="primary"
              onClick={navigateToResumePage}
              className="btn btn-primary text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md mt-6 uppercase"
            >
              Create my Resume
            </Button>
          </div>
        </div>
      </header>

      <div className="section-one py-16">
        <div className="container mx-auto px-4">
          <div className="section-one-content flex flex-wrap justify-center items-center">

            <div className="section-one-r w-full md:w-1/2 text-center mt-8 md:mt-0">
              <h2 className="lg-title text-2xl font-bold">Use the best resume maker as your guide!</h2>
              <p className="text mt-4 text-gray-700">Getting that dream job can seem like an impossible task. We're here to change that. Give yourself a real advantage with the best online resume maker: created by experts, improved by data, trusted by millions of professionals.</p>
              <div className="btn-group flex justify-center space-x-4 mt-6">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={navigateToResumePage}
                  className="btn btn-primary text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md uppercase"
                >
                  Create my Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-two bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="section-two-content">
            <div className="section-items grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="section-item text-center">
                <h5 className="section-item-title text-xl font-semibold">Make a resume that wins interviews!</h5>
                <p className="text mt-4 text-gray-700">Use our resume maker with its advanced creation tools to tell a professional story that engages recruiters, hiring managers and even CEOs.</p>
              </div>

              <div className="section-item text-center">
                <h5 className="section-item-title text-xl font-semibold">Resume writing made easy!</h5>
                <p className="text mt-4 text-gray-700">Resume writing has never been this effortless. Pre-generated text, visual designs and more - all already integrated into the resume maker. Just fill in your details.</p>
              </div>

              <div className="section-item text-center">

                <h5 className="section-item-title text-xl font-semibold">A recruiter-tested CV maker tool</h5>
                <p className="text mt-4 text-gray-700">Our resume builder and its pre-generated content are tested by recruiters and IT experts. We help your CV become truly competitive in the hiring process.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer bg-gray-900 py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="footer-content">
            <p className="text-white text-sm">&copy;Made with Enthusiasm - <span className="text-blue-500">Build Resume</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;