import { Container } from '@mui/material';

import ResumeTitle from './ResumeTitle';
import ResumeEducation from './ResumeEducation';
import ResumeProjects from './ResumeProjects';
import ResumeExperience from './ResumeExperience';
import ResumeSkills from './ResumeSkills';
// import ResumeLeadership from './ResumeLeadership';
// import ResumeSpecialization from './ResumeSpecialization';
import './Resume.css';

const Resume = () => {
  return (
    <div className='resume'>
      <Container>
        <ResumeTitle />
        <ResumeEducation />
        <ResumeExperience />
        <ResumeProjects />
        <ResumeSkills />
        {/* <ResumeSpecialization />
        <ResumeLeadership /> */}
      </Container>
    </div>
  );
};

export default Resume;
