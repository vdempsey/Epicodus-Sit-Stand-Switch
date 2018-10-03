import React from 'react';
import BannerTwo from './BannerTwo';
import HeaderBlog from './HeaderBlog';
import BlogList from './BlogList';
import Menu from './Menu';

function BlogMain(){
  return (
    <div>
      <HeaderBlog />
      <div className="main-blog-container">
        <BlogList />
        <div className="sideBar">
          <ul>
            <li>January 2018</li>
            <li>February 2018</li>
            <li>March 2018</li>
            <li>April 2018</li>
            <li>May 2018</li>
            <li>June 2018</li>
            <li>July 2018</li>
          </ul>
          <div className='archive'>
            <p>Archive</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogMain;
