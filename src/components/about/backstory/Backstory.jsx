import React from 'react';
import { Grid } from '@mui/material';
import './Backstory.css';

const Backstory = () => {
  return (
    <div className='backstory'>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={4}
          data-aos='reveal-down'
          data-aos-once='true'
          data-aos-duration='5000'
        >
          <h1 className='backstory__header'>My Story</h1>
        </Grid>
        <Grid item xs={12} md={8}>
          <p data-aos='fade-up' data-aos-duration='1000' data-aos-once='true'>
            I obtained a Bachelor's in Computer Science from California State
            University, Long Beach in 2020. From the moment I wrote my first
            Python script in my introductory CS course, I knew that coding is
            something I wanted to do in my life. It has allowed me to challenge
            myself and improve my skills, not just in programming, but also in
            creativity and team-working. Furthermore, I am grateful to have
            learned a myriad of technologies and concepts, and have connected
            with many people who have similar goals.
          </p>
          <p data-aos='fade-up' data-aos-duration='1000' data-aos-once='true'>
            I currently work at IdeaBank Marketing as a web developer. This role
            allows me to work in a team to develop high-quality websites for
            clients that will not only fulfill but also exceed their
            expectations
          </p>
          <p data-aos='fade-up' data-aos-duration='1000' data-aos-once='true'>
            I formerly worked at Code Ninjas, Cerritos and Fullterton, as a
            coding instructor and an assistant director. Working here combines
            two of my passions: programming and working with students. I have
            tutored students with JavaScript, Lua, and C# languages to help them
            build high-quality software. I have also taught web development at
            various district schools to over 400 students.
          </p>
          <p data-aos='fade-up' data-aos-duration='1000' data-aos-once='true'>
            Apart from my programming passions, I formerly served as the
            president of the Tzu Chi Collegiate Association at CSULB. This
            volunteering organization focuses on humanitarian aid, medicine,
            education, and more. I have devoted over 300 hours of my time to
            serving this organization and it has been a life-changing experience
            for me.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Backstory;
