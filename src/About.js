import React from 'react';

class About extends React.Component
{
  render()
  {
    return(
        <div class="container" id="aboutcontainer">
          <div class="row align-items-center p-5" id="aboutrow">
            <div class = "col text-left">
            <h1 class="display-4"> வணக்கம்! Hello! &#128075; Hola! Dia Dhuit! <br/></h1>
              <p id="aboutinfo">I am a Software Developer, Mobile Developer, iOS developer and many more &#127913; to come.
              I love developing solutions, be it in Mobile, Web or Raspberry Pi. I’ve been part of many interesting projects which you can check out in the <a href="#Projects">projects</a> section and I am sure there’s lots more to come. I’ve operated and gained knowledge in these areas  &#128073; <br/> And I am not shy to explore more &#128640;. I have worked with some of the best people &#128131;&#128378; and the best team &#129309;&#128588;. I am currently employed in Sweepr Technologies. I look forward to working with the eager young minds of tomorrow and a product that would stun &#129321; the world &#127757;. So, Go on, explore me and if you like anything you see, contact me &#128718;, Let’s go… <span class = "flip_H">&#127950;</span></p>            </div>
            <div class = "col text-center">
              <img id = "keywordcloud" src="keyword_cloud.png" alt="keyword_cloud"/>
            </div>
          </div>
         
        </div>
    );
  }
}

export default About;
