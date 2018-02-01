import React from 'react';
import PropTypes from 'prop-types';

function Testimonial(props){
  return(
    <div className="testimonial-item">
      <div>
        <img src={props.image} className="testimonial-img"/>
      </div>
      <div>
        <p>{props.quote}</p>
        <p className="bio">{props.name}</p>
      </div>
    </div>
  );
}

Testimonial.propTypes = {
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Testimonial;
