import React, { useEffect, useState } from 'react';
import './BlogView.css';
import AnimatedPage from '../../components/animations/AnimatedPage';
import PageContainer from '../../components/ui/page-container/PageContainer';

const BlogPostView = ({ markdownFile }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    import(`../../../pages/blog/${markdownFile}.md`)
      .then((res) => {
        setContent(res.default);
      })
      .catch((err) => {
        console.log(`Failed to import Markdown: ${err}`);
      });
  }, [markdownFile]);

  return (
    <AnimatedPage>
      <PageContainer maxWidth='md' href='/blog'>
        {content && <>{content}</>}
      </PageContainer>
    </AnimatedPage>
  );
};

export default BlogPostView;