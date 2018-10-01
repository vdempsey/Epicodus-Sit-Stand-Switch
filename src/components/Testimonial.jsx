import React from 'react';
import PropTypes from 'prop-types';

function Testimonial(props){
  return(
    <div className="testimonial-item">
      <div>
        <div className="snapshot">
          <img src={props.image} className="testimonial-img"/>
          <div>
            <p className="bio">{props.name} <br /> Joined {props.lenghtOfUse} ago </p>
          </div>
        </div>
        <p>{props.quote}</p>
      </div>
    </div>
  );
}

Testimonial.propTypes = {
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lenghtOfUse: PropTypes.string.isRequired,
  city:PropTypes.string.isRequired,
};

export default Testimonial;
