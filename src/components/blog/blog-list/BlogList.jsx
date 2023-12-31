import React from 'react';
import BlogCard from '../blog-card/BlogCard';
import BlogData from '../../../helper/BlogData';
import { Grid } from '@mui/material';

const BlogList = () => {
  return (
    <div className='blog-list'>
      <Grid container>
        {BlogData.map((blog, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <BlogCard
              title={blog.title}
              description={blog.description}
              image={blog.image}
              date={blog.date}
              link={blog.link}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BlogList;
