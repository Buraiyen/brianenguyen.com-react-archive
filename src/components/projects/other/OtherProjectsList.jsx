import React from 'react';

import { Grid } from '@mui/material';
import OtherProjectData from '../../../helper/OtherProjectData';
import OtherProject from './OtherProject';

const OtherProjectsList = () => {
  return (
    <div className='other-projects'>
      <h1
        className='other-projects__title'
        data-aos='reveal-up'
        data-aos-duration='3000'
      >
        Some of my other work
      </h1>
      <Grid container>
        {OtherProjectData.map((otherProject, i) => (
          <Grid item xs={12} md={4} key={i}>
            <OtherProject title={otherProject.title} link={otherProject.link} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OtherProjectsList;
