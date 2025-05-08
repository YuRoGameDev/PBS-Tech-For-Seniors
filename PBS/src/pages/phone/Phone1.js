import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import EmbedYoutube from '../EmbedYoutube';

const Phone1 = () => {
  return (
    <div>
      <div id="container">
        <Header pageTitle={"Block a Phone Number"} />

        <div className="content-page content-scroll">
        <h1>How to Block a Phone Number</h1>
    <p>Blocking a phone number can help you avoid unwanted calls. Follow these simple steps for your device.</p>
    
    <h2>Steps for Smartphones</h2>
    <h3>For Android Phones:</h3>
    <ul>
        <li><strong>Open the Phone App:</strong>
            <ul>
                <li>Tap the phone icon on your home screen.</li>
            </ul>
        </li>
        <li><strong>Find the Number:</strong>
            <ul>
                <li>Go to your recent calls or call history.</li>
                <li>Locate the number you want to block.</li>
            </ul>
        </li>
        <li><strong>Block the Number:</strong>
            <ul>
                <li>Press and hold the number, then select <strong>Block/Report Spam</strong> from the menu.</li>
                <li>Confirm your selection.</li>
            </ul>
        </li>
    </ul>

    <h3>For iPhones:</h3>
    <ul>
        <li><strong>Open the Phone App:</strong>
            <ul>
                <li>Tap the phone icon on your home screen.</li>
            </ul>
        </li>
        <li><strong>Find the Number:</strong>
            <ul>
                <li>Go to your recent calls list.</li>
                <li>Locate the number you want to block.</li>
            </ul>
        </li>
        <li><strong>Block the Number:</strong>
            <ul>
                <li>Tap the small "i" icon next to the number.</li>
                <li>Scroll down and select <strong>Block This Caller</strong>.</li>
                <li>Confirm your choice.</li>
            </ul>
        </li>
    </ul>

    <h2>Tips for Success</h2>
    <ul>
        <li><strong>Use Built-in Features:</strong>
            <ul>
                <li>Most phones have built-in blocking features that are free to use.</li>
            </ul>
        </li>
        <li><strong>Contact Your Phone Provider:</strong>
            <ul>
                <li>If the blocking steps don’t work, ask your phone service provider for help.</li>
            </ul>
        </li>
        <li><strong>Consider Blocking Apps:</strong>
            <ul>
                <li>There are apps like Hiya and Truecaller that can block unwanted calls automatically.</li>
            </ul>
        </li>
    </ul>
    
    <p>By following these steps, you can block unwanted calls and enjoy greater peace of mind.</p>
        </div>

      </div>

      <Footer
        onBackClick={'/phone'}
      />

    </div>
  )
};

export default Phone1;