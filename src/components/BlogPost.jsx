import React from 'react';
import PropTypes from 'prop-types';

function BlogPost(props){
  const blogThumbn = {
  color: 'blue',
  backgroundImage:  `url(${props.image})`,
  backgroundSize: 'cover',
  height: '200px',
  width: '100%',
  minWidth: '400px',
  maxWidth: '400px',

};
  return(
    <div>
      <div className="blog-preview-container">
        <div style={blogThumbn}>
        </div>
        <div className="copy line-clamp">
          <h3>{props.headline}</h3>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

BlogPost.propTypes = {
  image: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default BlogPost;
