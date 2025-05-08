import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import EmbedYoutube from '../EmbedYoutube';

const Internet1 = () => {
  return (
    <div>
      <div id="container">
        <Header pageTitle={"How to Detect AI"} />

        <div className="content-page content-scroll">
          <p>
          AI scams, like voice cloning, mimic familiar voices to deceive you. Detect these scams by:
          Unusual Requests: Be cautious if someone urgently asks for money or sensitive details.
          Verify Identity: Call the person back on their known number to confirm.
          Spot Poor Quality: Scams often sound slightly robotic or unnatural.
          </p>


          <h2>Click on the YouTube video below to learn more!</h2>

          <EmbedYoutube
            youtubeURL={"https://www.youtube.com/embed/NM9m0sg-XyY?si=1iuY6XEFnvUM8d6r"}
          />

          <p>In other articles, we will discuss the different aspects of the internet.</p>
        </div>

      </div>

      <Footer
        onBackClick={'/internet'}
      />

    </div>
  )
};

export default Internet1;