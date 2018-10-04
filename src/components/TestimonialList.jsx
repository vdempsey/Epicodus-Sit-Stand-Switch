import React from 'react';
import Testimonial from './Testimonial';
import user1 from '../assets/images/user1.png';
import user2 from '../assets/images/user2.png';
import user3 from '../assets/images/user3.png';

const masterTestimonialList = [
  {
    image: user1,
    name: 'Mia',
    lenghtOfUse: '10 months',
    city: 'Portland, OR',
    quote: '"Just a quick note to tell you I love my SSS team and  I use it every day! You said I would feel better at the end of the day and you were right. The first few days were somewhat a transitionary period for me but by the end of the first week I was hooked. Thanks for a great app that truly has a positive impact on users!"'
  },
  {
    image: user3,
    name: 'MovingAmy',
    lenghtOfUse: '4 months',
    city: 'New York, NY',
    quote: '"There is a happy medium for sitting or standing at your desk job. SSS wisely cautions about standing all day. That can cause problems as well, so take their advice and find what’s right for you. I stand for a couple of hours, sit for a half hour to 45 minutes, and stand again – but I vary it quite a bit. My goal is to stand for at least 60% of the day."'
  },
  {
    image: user2,
    name: 'Anthony',
    lenghtOfUse: '1.5 months',
    city: 'San Diego, CA',
    quote: '"Just wanted to thank you again for your wonderful application. I have been using SSS for over a month and find it to be one of the best life-hacks I have ever made. I feel great! No more sore back or bottom, no more neck strain and lots more energy and productivity."'
  }
];

function TestimonialList(){
  return (
    <div className="testimonial-container">
      {masterTestimonialList.map((testimonial, index) =>
        <Testimonial image={testimonial.image}
          quote={testimonial.quote}
          name={testimonial.name}
          lenghtOfUse={testimonial.lenghtOfUse}
          city={testimonial.city}
          key={index}/>
      )}
    </div>
  );
}

export default TestimonialList;
