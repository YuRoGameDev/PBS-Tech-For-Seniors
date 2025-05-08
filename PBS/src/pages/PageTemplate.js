/*This is the template for every page. Follow the steps
1. Create a page in any of the folders under pages (scams, internet, phone)

2. Go to index.jss and add a Route to this page. It should be in the <Routes> tag. 
The format should be like
 <Route path="TEMPLATE_URL_PATH" element={<*TEMPLATE_FILE_NAME* />} />
 Example of the path could be /"name" 
 or if you want it be a sub page like /scams/scam1 do /"parentURLName"/"name"

 Whenever you want to link to connect to this page from another page 
 pass in the TEMPLATE_URL_PATH into <Link to=>
 Example:
 <Link to="TEMPLATE_URL_PATH" button className="Home-button">*Text on Button*</Link>

3. Paste the code below into the newly created page and fill it out however you want.
*/

import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
//If you want to add youtube embed, uncomment this line
//import EmbedYoutube from '../EmbedYoutube'; 

//Change this to page name
const PageTemplate = () => {
    return (
        <div>
            <div id="container">

                {/* Put page title here */}
                <Header pageTitle={""} />

                {/* Put your text under this div.
                There are two types of contents, one for page and one for the home page, lists, etc.
                If you are making a page with info, do content-page, else just do content
                If you want to add a scroll bar add content-scroll
                Example: content-page content-scrol */}
                <div className="content">

                    {/* If you want to embed a youtube video, add this
                    Make sure you pass in the youtube embed link, not the regular url */}
                    {/* 
                    <EmbedYoutube
                        youtubeURL={"https://www.youtube.com/embed/OilJqVgRSFY?si=0IAGLyuSpyGtMxyf"}
                    />
                    */}

                </div>

            </div>

            {/* This is for the footer on the bottom. Put the url 
    that is the back page for this page. For example if this is scam1, the back page is scams */}
            <Footer
                onBackClick={'/'}
            />

        </div>
    )
};

//Change this to File name
export default PageTemplate;