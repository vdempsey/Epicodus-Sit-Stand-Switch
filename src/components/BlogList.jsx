import React from 'react';
import BlogPost from './BlogPost';
import user1 from '../assets/images/user1.png';
import yoga from '../assets/images/yoga.png';
import texting from '../assets/images/texting.png';
import brain from '../assets/images/brain.png';
import wHouse from '../assets/images/wHouse.png';
import poorPosture from '../assets/images/poorPosture.png';

const masterBlogList = [
  {
    image: yoga,
    headline: 'Subtle Ways To Move More At Your Desk',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare id elit ac cursus. Donec rhoncus metus tortor, ut elementum tortor sagittis at.'
  },
  {
    image: texting,
    headline: 'Got a case of “text neck”? Heads up!',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare id elit ac cursus. Donec rhoncus metus tortor, ut elementum tortor sagittis at.'
  },
  {
    image: brain,
    headline: 'Scientific concept: learning and movement linked',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare id elit ac cursus. Donec rhoncus metus tortor, ut elementum tortor sagittis at.'
  },
  {
    image: wHouse,
    headline: 'Subtle Ways To Move More At Your Desk',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare id elit ac cursus. Donec rhoncus metus tortor, ut elementum tortor sagittis at.'
  },
  {
    image: poorPosture,
    headline: 'Got a case of “text neck”? Heads up!',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare id elit ac cursus. Donec rhoncus metus tortor, ut elementum tortor sagittis at.'
  },
];

function BlogList(){
  return (
    <div className="blogs-container">
      {masterBlogList.map((blog, index) =>
        <BlogPost image={blog.image}
          headline={blog.headline}
          content={blog.content}
          key={index}/>
      )}
    </div>
  );
}

export default BlogList;
