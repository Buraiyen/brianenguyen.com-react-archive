import React from 'react';

import PageContainer from '../../components/ui/page-container/PageContainer';
import { useEffect } from 'react';
import AnimatedPage from '../../components/animations/AnimatedPage';
import { SIMDJumboData } from '../../helper/JumbotronData';
import Button from '../../components/ui/button/Button';
import Jumbotron from '../../components/ui/jumbotron/Jumbotron';
import './ProjectView.css';

const SIMDView = ({ title }) => {
  const jumboTitle = SIMDJumboData.title;
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <AnimatedPage>
      <div>
        <Jumbotron title={jumboTitle} />
        <PageContainer maxWidth='md' href='/portfolio'>
          <p className='project-view__description'>
            <span className='project-view__description__title'>
              SIMD Enhanced MIPS Instructions
            </span>{' '}
            is a custom instruction set architecture (ISA) that utilizes the
            million instructions per second (MIPS) ISA. This process is
            documented in the Programmers' Reference Manual (100+ pages) which
            provides an in-depth understanding of computer architecture. All
            instructions are written in assembly code
          </p>

          <div>
            <p>
              <a
                href='https://github.com/Buraiyen/SIMD-Enhanced-MIPS-Instructions/blob/master/SMID-Enhanced-MIPS-Instructions.pdf'
                target='_blank'
                rel='noreferrer'
              >
                <Button className='btn-standard'>View Documentation</Button>
              </a>
            </p>
            <p>
              <a
                href='https://github.com/Buraiyen/SIMD-Enhanced-MIPS-Instructions'
                target='_blank'
                rel='noreferrer'
              >
                <Button className='btn-standard'>View Repository</Button>
              </a>
            </p>
            <img
              src='https://res.cloudinary.com/buraiyen/image/upload/v1620240514/BEN_Website/projects/simd_ndwgst.jpg'
              className='project-view__image'
              loading='lazy'
              alt=''
            />
          </div>
        </PageContainer>
      </div>
    </AnimatedPage>
  );
};

export default SIMDView;
