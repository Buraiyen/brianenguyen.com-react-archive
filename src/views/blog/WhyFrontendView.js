import classes from './BlogView.module.css';
import AnimatedPage from '../../components/Animations/AnimatedPage';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { WhyFrontendPageTitle } from '../../components/Helper/PageTitleData';

const WhyFrontendView = () => {
  useEffect(() => {
    document.title = WhyFrontendPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <Container style={{ marginTop: 200 + 'px' }} maxWidth='md'>
        <h1 className={classes['blog__title']}>
          Why I Chose Frontend Development
        </h1>
        <div className={classes['blog__text']}>
          <p className={classes['blog__date']}>?????????????????</p>
          <p>
            Computer science is definitely one of the most interesting fields in
            this world. With the exponential growth of technology, code is
            basically everywhere, like gaming consoles, TV's, even the web
            browser you're using to view this blog. As someone who is fascinated
            with technology since my childhood, choosing a career path related
            to technology was the right choice for me
          </p>
        </div>
      </Container>
    </AnimatedPage>
  );
};

export default WhyFrontendView;
