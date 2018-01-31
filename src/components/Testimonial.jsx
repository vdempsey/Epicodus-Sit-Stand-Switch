import React from 'react';
import PropTypes from 'prop-types';

function Testimonial(props){
  return(
    <div>
      <div>
        <img src={props.image} />
      </div>
      <div>
        <p>{props.quote}</p>
        <p>{props.name}</p>
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
