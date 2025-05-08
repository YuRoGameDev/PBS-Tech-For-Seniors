import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import EmbedYoutube from '../EmbedYoutube';

const Scam6 = () => {
  return (
    <div>
      <div id="container">
        <Header pageTitle={"Responding to Scams"} />

        <div className="content-page content-scroll">
        <h1>Understanding Phone Call Scams</h1>
    <p>Phone call scams are designed to trick you into giving away personal information or money. Learn how to recognize them and protect yourself.</p>
    
    <h2>How to Identify Phone Call Scams</h2>
    <ol>
        <li><strong>Unexpected Calls:</strong>
            <ul>
                <li>Scammers often claim to be from trusted organizations like the IRS, Social Security, or your bank.</li>
                <li>Be wary if you didn’t expect the call.</li>
            </ul>
        </li>
        <li><strong>Pressure to Act Quickly:</strong>
            <ul>
                <li>Scammers may say there’s an emergency or urgent problem that requires immediate action.</li>
                <li>They do this to prevent you from thinking carefully or seeking help.</li>
            </ul>
        </li>
        <li><strong>Requests for Payment:</strong>
            <ul>
                <li>If the caller asks for payment through gift cards, wire transfers, or cryptocurrency, it’s likely a scam.</li>
            </ul>
        </li>
        <li><strong>Threats or Promises:</strong>
            <ul>
                <li>Scammers may threaten legal action or promise prizes, refunds, or special deals.</li>
                <li>Legitimate organizations will not use these tactics over the phone.</li>
            </ul>
        </li>
    </ol>
    
    <h2>What to Do If You Receive a Suspicious Call</h2>
    <ol>
        <li><strong>Do Not Share Personal Information:</strong>
            <ul>
                <li>Never give out your Social Security number, bank details, or passwords over the phone.</li>
            </ul>
        </li>
        <li><strong>Hang Up:</strong>
            <ul>
                <li>If something feels off, hang up immediately.</li>
            </ul>
        </li>
        <li><strong>Verify the Caller:</strong>
            <ul>
                <li>Look up the official number of the organization and call them directly to confirm the legitimacy of the call.</li>
            </ul>
        </li>
        <li><strong>Block the Number:</strong>
            <ul>
                <li>Most phones allow you to block numbers to prevent future calls from the scammer.</li>
            </ul>
        </li>
        <li><strong>Report the Scam:</strong>
            <ul>
                <li>Report the scam call to the <a href="https://reportfraud.ftc.gov" target="_blank">Federal Trade Commission (FTC)</a>.</li>
            </ul>
        </li>
    </ol>
    
    <h2>Helpful Tips to Stay Safe</h2>
    <ol>
        <li><strong>Register for the Do Not Call List:</strong>
            <ul>
                <li>Add your number to the <a href="https://www.donotcall.gov" target="_blank">National Do Not Call Registry</a>.</li>
            </ul>
        </li>
        <li><strong>Use Caller ID:</strong>
            <ul>
                <li>Check the caller’s information before answering, but remember, scammers can spoof numbers to look legitimate.</li>
            </ul>
        </li>
        <li><strong>Ask for Help:</strong>
            <ul>
                <li>If you’re unsure about a call, ask a family member or friend for advice.</li>
            </ul>
        </li>
    </ol>
    
    <p>By staying alert and following these steps, you can protect yourself from phone call scams and keep your personal information safe.</p>
        </div>

      </div>

      <Footer
        onBackClick={'/scams'}
      />

    </div>
  )
};

export default Scam6;