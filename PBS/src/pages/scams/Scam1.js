import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import EmbedYoutube from '../EmbedYoutube';

const Scam1 = () => {
  return (
    <div>
      <div id="container">
        <Header pageTitle={"What is a Scam?"} />

        <div className="content-page content-scroll">
          <p>
            A scam is a deceptive trick where someone tries to take your money or personal information by pretending to be someone they're not. Scammers often use phone calls, emails, or messages that seem real, like from a bank or a government agency, to create a sense of urgency or fear. They might say you’ve won a prize or that there’s a problem with your account, urging you to act quickly. It’s important to remember that legitimate organizations will never ask for personal details or money in this way. Always take a moment to think things through, and if something feels off, it’s okay to ask a trusted friend or family member for help.</p>
          <p>In the video below, get a brief introduction to the information scammers try to take from you.</p>

          <h2>Click on the YouTube video below to learn more!</h2>

          <EmbedYoutube
            youtubeURL={"https://www.youtube.com/embed/OilJqVgRSFY?si=0IAGLyuSpyGtMxyf"}
          />

          <p>In other articles, we will discuss the different types of scams.</p>
        </div>

      </div>

      <Footer
        onBackClick={'/scams'}
      />

    </div>
  )
};

export default Scam1;