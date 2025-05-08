import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import EmbedYoutube from '../EmbedYoutube';

const Internet2 = () => {
  return (
    <div>
      <div id="container">
        <Header pageTitle={"How to Spot Fraudulent Websites"} />

        <div className="content-page content-scroll">
          <ol>
          <li>Check the URL closely for spelling mistakes</li>
          <li>Don’t be fooled by legitimate-looking subdomains</li>
          <li>Inspect the site’s security certificate</li>
          <li>Consider how you found the website in the first place</li>
          <li>Use Safe Browsing tools or a website checker</li>
          <li>Look for spelling, grammar, and formatting issues</li>
          <li>Be wary of poor-quality design or photos</li>
          <li>Check the domain age and ownership</li>
          <li>Search for user reviews and potential scams</li>
          <li>Check the “About,” “Shipping,” and “Privacy Policy” pages</li>
          <li>Research the company’s social media and online presence</li>
          <li>Look for payment red flags</li>
        </ol>


          <h2>Click on the YouTube video below to learn more!</h2>

          <EmbedYoutube
            youtubeURL={"https://www.youtube.com/embed/6_QX12szXTM?si=rugIf19AQuD4S_N8"}
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

export default Internet2;