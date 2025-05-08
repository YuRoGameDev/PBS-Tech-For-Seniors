import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import EmbedYoutube from '../EmbedYoutube';

const Internet3 = () => {
  return (
      <div id="container">
        <Header pageTitle={"How to Navigate Emails"} />

        <div className="content-page content-scroll">
        <h1>Steps to Use the E-Mail App</h1>
    <ol>
        <li><strong>Open the E-Mail App:</strong>
            <ul>
                <li>Look for the envelope icon labeled <strong>Mail</strong> and tap it.</li>
            </ul>
        </li>
        <li><strong>Set Up Your Email:</strong>
            <ul>
                <li>The app will guide you to add your email account (e.g., Gmail, Yahoo).</li>
                <li>Enter your email address and password.</li>
                <li>Follow the steps until setup is complete.</li>
            </ul>
        </li>
        <li><strong>Check Your Inbox:</strong>
            <ul>
                <li>Tap <strong>Inbox</strong> to view your emails. New emails appear at the top.</li>
            </ul>
        </li>
        <li><strong>Read an Email:</strong>
            <ul>
                <li>Tap an email to open and read it.</li>
            </ul>
        </li>
        <li><strong>Reply or Delete:</strong>
            <ul>
                <li>To reply, tap the arrow icon at the bottom.</li>
                <li>To delete, tap the trash can icon.</li>
            </ul>
        </li>
        <li><strong>Send a New Email:</strong>
            <ul>
                <li>Tap the pencil and paper icon (top-right) to write a new email.</li>
                <li>Type the recipient's email address, a subject, and your message, then tap <strong>Send</strong>.</li>
            </ul>
        </li>
    </ol>

          <h2>Click on the YouTube video below to learn more!</h2>

          <EmbedYoutube
            youtubeURL={"https://www.youtube.com/embed/tJARVt4DrVs?si=v0T9CO3D9FOWHyMV"}
          />

          <p>In other articles, we will discuss the different aspects of the internet.</p>
        </div>

        <Footer
        onBackClick={'/internet'}
      />

    </div>

  )
};

export default Internet3;