import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import EmbedYoutube from '../EmbedYoutube';

const Internet5 = () => {
  return (
    <div>
      <div id="container">
        <Header pageTitle={"Internet 5"} />

        <div className="content-page content-scroll">
        <h1>How to Shop Safely Online</h1>
    <p>Shopping online can be convenient and fun, but it's important to stay safe. Follow these steps to make sure your shopping experience is secure.</p>
    
    <h2>Steps to Shop Safely Online</h2>
    <ol>
        <li><strong>Choose Reputable Websites:</strong>
            <ul>
                <li>Stick to well-known online stores like Amazon, Walmart, or stores you trust.</li>
                <li>Check the website address (URL) to make sure it starts with <strong>https://</strong>, which indicates a secure connection.</li>
            </ul>
        </li>
        <li><strong>Use Strong Passwords:</strong>
            <ul>
                <li>When creating an account, use a unique password that is hard to guess.</li>
                <li>A strong password includes a mix of letters, numbers, and symbols.</li>
            </ul>
        </li>
        <li><strong>Avoid Public Wi-Fi:</strong>
            <ul>
                <li>Do not shop online while connected to public Wi-Fi networks, as they may not be secure.</li>
                <li>If you must use public Wi-Fi, consider using a Virtual Private Network (VPN).</li>
            </ul>
        </li>
        <li><strong>Check Reviews and Seller Ratings:</strong>
            <ul>
                <li>Before purchasing, read reviews about the product and the seller.</li>
                <li>Look for high ratings and positive feedback from other customers.</li>
            </ul>
        </li>
        <li><strong>Pay Securely:</strong>
            <ul>
                <li>Use a credit card or a trusted payment service like PayPal for online purchases.</li>
                <li>Avoid using debit cards as they may offer less fraud protection.</li>
            </ul>
        </li>
        <li><strong>Be Cautious of Deals That Are Too Good to Be True:</strong>
            <ul>
                <li>If a deal seems unbelievably cheap, it might be a scam.</li>
                <li>Research the seller and the product to ensure authenticity.</li>
            </ul>
        </li>
        <li><strong>Keep Your Devices Updated:</strong>
            <ul>
                <li>Ensure your computer or smartphone has the latest software and antivirus updates.</li>
                <li>Updates often include important security fixes.</li>
            </ul>
        </li>
        <li><strong>Log Out After Shopping:</strong>
            <ul>
                <li>When you finish shopping, log out of your account, especially on shared devices.</li>
                <li>Close the browser to ensure your information stays private.</li>
            </ul>
        </li>
    </ol>
    
    <p>By following these steps, you can enjoy a safe and secure online shopping experience!</p>

    <EmbedYoutube
            youtubeURL={"https://www.youtube.com/embed/LC_qM1P6nG4?si=ta--tIclK1mXbD3O"}
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

export default Internet5;