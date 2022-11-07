import React from 'react';

class Timeline extends React.Component
{
  render()
  {
    return(
       
<div class="timeline">
  <div class="companyContainer left">
    <div class="content">
      <h2>June 2020- Present</h2>
      <h3>Sweepr Technologies, Dublin, Ireland</h3>
      <h4>Senior Mobile Developer</h4>
    </div>
  </div>
  <div class="companyContainer right">
    <div class="content">
      <h2>April 2017 - June 2020</h2>
      <h3>Insight Centre for Data Analytics, Dublin, Ireland</h3>
      <h4>Software Developer</h4>
    </div>
  </div>
  <div class="companyContainer left">
    <div class="content">
      <h2>Jan 2015 - July 2015</h2>
      <h3>Cherrpick Technologies, Chennai, India</h3>
      <h4>iOS Developer</h4>

    </div>
  </div>
  <div class="companyContainer right">
    <div class="content">
      <h2>May 2011 - Dec 2014</h2>
      <h3>Tech Mahindra, Bangalore, India</h3>
      <h4>Software Developer</h4>

    </div>
  </div>
</div>
    );
  }
}

export default Timeline;
