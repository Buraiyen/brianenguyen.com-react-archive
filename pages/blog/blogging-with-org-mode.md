

# Writing My Blogs with Org Mode

> 16 Feb, 2022 · 5 min

I used JSX to write my blogs, which helped me get the job done, but it was a
huge hassle. I had to worry about JSX syntax, bugs, CSS classes, etc. These
problems distracted me from the actual content creation.  After my blog files
were done, they ended up being a messy compilation filled with JSX syntax that
distracts the user from the actual text content.  This honestly demotivated me
from writing blogs

I knew I had to find a solution to this problem. Instead of using JSX, I had to
turn to my favorite markup language to do the work: Org Mode


## What is Org Mode?

Org Mode (also *org-mode*) is a type of markup language used in Emacs. I love
org-mode because its very versatile in what it can do. I use to to take notes,
write documents, make an agenda, and develop websites. It&rsquo;s my preferred markup
language over Markdown (which I will explain more in a future blog)


## Setup / Methods

Since there isn&rsquo;t really a dedicated package that converts org-mode to JSX, I had to resort to writing my documents in org-mode first, then exporting them to Markdown

There are many packages that can help parse org-files into JSX, like `react-markdown` and `markdown-to-jsx`. Since I am using the Vite engine to build
this React app, I use the [vite-plugin-react-markdown](https://github.com/geekris1/vite-plugin-react-markdown) package for this website

Once this package is installed, I had to configure my `vite.config.js` file to
utilize the package and allow the app to include Markdown files

    // vite.config.js
    import { defineConfig } from 'vite';
    import Markdown from 'vite-plugin-react-markdown';
    import react from '@vitejs/plugin-react';
    
    export default defineConfig({
      plugins: [
        Markdown(),
        react({
          include: [/\.tsx$/, /\.md$/], // <-- add .md
        }),
      ],
    });

For my blog posts, I set up a component called `BlogPostView` that retrieves a
Markdown file and parses it to JSX

    import React, { useEffect, useState } from 'react';
    import './BlogPostView.css';
    
    const BlogPostView = ({ markdownFile, title }) => {
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
        {content && <>{content}</>}
      );
    };
    
    export default BlogPostView;

For my method, I set up a state called `content`. Once the component loads, it retrieves the Markdown file from the prop that was passed in. Once it is able to retrieve the data, then the component sets the state of that data to `content`

    const BlogPostView = ({ markdownFile, title }) => {
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
    
    ...


## CSS

When exporting Markdown to HTML, several HTML elements are commonly used to
represent different Markdown constructs. For example:

1.  Headings
    -   Markdown: `# Heading 1`
    -   HTML: `<h1>Heading 1</h1>`
2.  Paragraphs:
    -   Markdown: `This is a paragraph.`
    -   HTML: `<p>This is a paragraph.</p>`

org-mode doesn&rsquo;t have a way to apply CSS classes to be exported to Markdown.
Instead, I have to use element selectors to apply my styles. Below is a snippet
of my `BlogPostView.css` file of the kinds of styles I apply. Note: the `vite-plugin-react-markdown` class is used from the package, so I utilize that to
apply my styles

    /* BlogPostView.css */
    .vite-plugin-react-markdown h1 {
      text-align: center;
      margin-top: 200px;
    }
    
    .vite-plugin-react-markdown h2 {
      margin-top: 4rem;
      font-size: 2.4rem;
      text-transform: capitalize;
    }
    
    .vite-plugin-react-markdown pre {
      background-color: #363636;
    }
    
    .vite-plugin-react-markdown pre code {
      font-size: 1rem;
      overflow-x: auto;
      white-space: pre-wrap;
    }


### The `import` statement


### Images
