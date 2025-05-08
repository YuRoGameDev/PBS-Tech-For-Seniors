import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import EmbedYoutube from '../EmbedYoutube';

const Scam3 = () => {
  return (
    <div>
      <div id="container">
        <Header pageTitle={"Different Types of Scams?"} />
       
        <div className="content-page content-scroll">
        <p>Staying safe online is important. Follow these simple tips to keep your information secure.</p>
          <main>
            <h2>1. Use Strong Passwords</h2>
            <ul>
              <li>Create passwords with at least <span class="highlight">12 characters</span>, including letters, numbers, and symbols.</li>
              <li>Avoid using personal information like your name or birthdate.</li>
              <li>Use a password manager to safely store your passwords.</li>
            </ul>

            <h2>2. Watch Out for Scams</h2>
            <ul>
              <li>Be cautious of <span class="highlight">emails or messages</span> that ask for personal information.</li>
              <li>Verify the sender by calling the official company number before clicking on links.</li>
            </ul>

            <h2>3. Keep Your Software Updated</h2>
            <ul>
              <li>Update your devices regularly to protect against security threats.</li>
              <li>Enable <span class="highlight">automatic updates</span> when possible.</li>
            </ul>

            <h2>4. Use Secure Wi-Fi</h2>
            <ul>
              <li>Avoid entering sensitive information on public Wi-Fi networks.</li>
              <li>If you must use public Wi-Fi, use a <span class="highlight">Virtual Private Network (VPN)</span>.</li>
            </ul>

            <h2>5. Share Carefully</h2>
            <ul>
              <li>Think before sharing personal details like your address, phone number, or financial information.</li>
              <li>Be selective about what you post on social media.</li>
            </ul>
            <h2>Click on the YouTube video below to learn more!</h2>

          </main>
          <EmbedYoutube
              youtubeURL={"https://www.youtube.com/embed/OilJqVgRSFY?si=0IAGLyuSpyGtMxyf"}
            />
            {/* <a href="https://www.youtube.com/watch?v=sdpxddDzXfE&ab_channel=NOVAPBSOfficial" target="_blank" rel="noopener noreferrer"> */}
        </div>

      </div>
      <Footer
        onBackClick={'/scams'}
      />
    </div>
  )
};

export default Scam3;