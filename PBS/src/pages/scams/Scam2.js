import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import EmbedYoutube from '../EmbedYoutube';

const Scam2 = () => {
  return (
    <div>
      <div id="container">
        <Header pageTitle={"Different Types of Scams?"} />

        <div className="content-page content-scroll">
          <ul>
            <li><strong>Phishing Scam:</strong>
              <p>This is when a fake website or email pretends to be from a trustworthy place, like a bank. It asks you to enter personal information like your username or password. Scammers use this info to access your accounts, so never enter details on unfamiliar sites.</p>
            </li>
            <li><strong>Malvertising Scam:</strong>
              <p>This is when scammers put fake advertisements on websites. If you click on these ads, they can take you to dangerous websites or even put a virus on your computer. It’s best to avoid clicking on ads that seem suspicious or "too good to be true."</p>
            </li>
            <li><strong>Fake Login Page:</strong>
              <p>Scammers make copies of trusted login pages, like your email or bank. They look exactly like the real ones, but they’re fake. If you enter your information, the scammer now has your password. Always check the web address at the top to be sure it's the real site.</p>
            </li>
            <li><strong>Tech Support Scam:</strong>
              <p>You might see a pop-up that says “Your computer is infected, call tech support!” This is a trick to scare you into calling a fake support line, where scammers might ask for money or access to your computer. Real tech support doesn’t pop up or ask you to call this way, so it’s safe to ignore these alerts.</p>
            </li>
          </ul>

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

export default Scam2;