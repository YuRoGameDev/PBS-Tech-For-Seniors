import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import EmbedYoutube from '../EmbedYoutube';

const Scam5 = () => {
  return (
    <div>
      <div id="container">
        <Header pageTitle={"Cybersecurity Basics for Avoiding Scams"} />

        <div className="content-page content-scroll">
        <h1>Cybersecurity Basics for Avoiding Scams</h1>
    <p>Cybersecurity helps protect your personal information and keeps you safe from online threats. Follow these simple steps to enhance your online safety.</p>
    
    <h2>Steps to Stay Secure Online</h2>
    <ol>
        <li><strong>Use Strong Passwords:</strong>
            <ul>
                <li>Create a password with at least 12 characters.</li>
                <li>Include uppercase letters, lowercase letters, numbers, and symbols.</li>
                <li>Avoid using the same password for multiple accounts.</li>
            </ul>
        </li>
        <li><strong>Enable Two-Factor Authentication (2FA):</strong>
            <ul>
                <li>Add an extra layer of security by requiring a code sent to your phone or email.</li>
            </ul>
        </li>
        <li><strong>Keep Your Software Updated:</strong>
            <ul>
                <li>Regularly update your computer, phone, and apps to ensure you have the latest security patches.</li>
            </ul>
        </li>
        <li><strong>Be Cautious with Links and Attachments:</strong>
            <ul>
                <li>Do not click on links or download attachments from unknown senders.</li>
                <li>Hover over links to see where they lead before clicking.</li>
            </ul>
        </li>
        <li><strong>Check Website Security:</strong>
            <ul>
                <li>Before entering personal information, make sure the website URL starts with <strong>https://</strong>.</li>
                <li>Look for a padlock icon in the address bar.</li>
            </ul>
        </li>
        <li><strong>Use Antivirus Software:</strong>
            <ul>
                <li>Install and regularly update antivirus software to protect against malware and viruses.</li>
            </ul>
        </li>
        <li><strong>Be Wary of Unsolicited Messages:</strong>
            <ul>
                <li>Ignore calls, texts, or emails that ask for personal or financial information.</li>
                <li>Verify any requests by contacting the company directly using official contact details.</li>
            </ul>
        </li>
        <li><strong>Secure Your Wi-Fi Network:</strong>
            <ul>
                <li>Set a strong password for your home Wi-Fi network.</li>
                <li>Avoid using public Wi-Fi for sensitive activities like banking.</li>
            </ul>
        </li>
        <li><strong>Back Up Your Data:</strong>
            <ul>
                <li>Regularly back up important files to an external drive or cloud storage.</li>
            </ul>
        </li>
        <li><strong>Trust Your Instincts:</strong>
            <ul>
                <li>If something seems off or too good to be true, it might be a scam.</li>
                <li>When in doubt, ask a trusted family member or friend for advice.</li>
            </ul>
        </li>
    </ol>
    
    <p>By following these cybersecurity basics, you can protect yourself from scams and enjoy a safer online experience.</p>
        </div>

      </div>

      <Footer
        onBackClick={'/scams'}
      />

    </div>
  )
};

export default Scam5;