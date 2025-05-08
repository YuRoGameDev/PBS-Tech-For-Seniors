import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import EmbedYoutube from '../EmbedYoutube';

const Phone2 = () => {
  return (
    <div>
      <div id="container">
        <Header pageTitle={"Download an App"} />

        <div className="content-page content-scroll">
        <h1>How to Download an App</h1>
    <p>Downloading an app is simple and allows you to enjoy new features and tools on your smartphone. Follow these steps to get started.</p>
    
    <h2>Steps for Downloading an App</h2>
    <ul>
        <li><strong>Open the App Store:</strong>
            <ul>
                <li>For iPhone users: Tap the <strong>App Store</strong> icon (blue icon with a white "A").</li>
                <li>For Android users: Tap the <strong>Google Play Store</strong> icon (colorful triangle).</li>
            </ul>
        </li>
        <li><strong>Search for the App:</strong>
            <ul>
                <li>Use the search bar at the top of the screen.</li>
                <li>Type the name of the app you want to download, like "Facebook" or "Weather."</li>
                <li>Tap the magnifying glass or search button.</li>
            </ul>
        </li>
        <li><strong>Select the App:</strong>
            <ul>
                <li>Scroll through the results and tap the app you want.</li>
                <li>Check the app's name and developer to ensure it's the correct one.</li>
            </ul>
        </li>
        <li><strong>Download the App:</strong>
            <ul>
                <li>Tap the button labeled <strong>Get</strong> or <strong>Install</strong>.</li>
                <li>For some apps, you may need to enter your password or use your fingerprint/Face ID.</li>
            </ul>
        </li>
        <li><strong>Wait for the Download to Complete:</strong>
            <ul>
                <li>You’ll see a progress circle or bar while the app downloads.</li>
            </ul>
        </li>
        <li><strong>Open the App:</strong>
            <ul>
                <li>Once the download is complete, tap <strong>Open</strong> to start using the app.</li>
                <li>The app icon will also appear on your home screen for future use.</li>
            </ul>
        </li>
    </ul>
    
    <h2>Tips for Safe Downloads</h2>
    <ul>
        <li><strong>Only Download Apps from Trusted Sources:</strong>
            <ul>
                <li>Use the official App Store or Google Play Store.</li>
            </ul>
        </li>
        <li><strong>Check Reviews:</strong>
            <ul>
                <li>Read reviews and ratings to ensure the app is safe and reliable.</li>
            </ul>
        </li>
        <li><strong>Keep Your Apps Updated:</strong>
            <ul>
                <li>Updates often include security improvements and new features.</li>
            </ul>
        </li>
    </ul>
    
    <p>By following these steps, you can easily download and enjoy apps on your smartphone!</p>
        </div>

      </div>

      <Footer
        onBackClick={'/phone'}
      />

    </div>
  )
};

export default Phone2;