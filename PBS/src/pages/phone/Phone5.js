import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import EmbedYoutube from '../EmbedYoutube';

const Phone5 = () => {
  return (
    <div>
      <div id="container">
        <Header pageTitle={"Phone 5"} />

        <div className="content-page content-scroll">
        <h1>Updating Apps and Software</h1>
    <p>Keeping your apps and phone software up-to-date is important for security and performance. Follow these simple steps to update them.</p>
    
    <h2>Updating Apps</h2>
    <ul>
        <li><strong>Open the App Store:</strong>
            <ul>
                <li>For iPhone: Tap the <strong>App Store</strong> icon (blue icon with a white "A").</li>
                <li>For Android: Tap the <strong>Google Play Store</strong> icon (colorful triangle).</li>
            </ul>
        </li>
        <li><strong>Check for Updates:</strong>
            <ul>
                <li>For iPhone: Tap your profile picture or the Updates tab at the bottom.</li>
                <li>For Android: Tap <strong>Manage apps & device</strong> from the menu.</li>
                <li>You’ll see a list of apps with available updates.</li>
            </ul>
        </li>
        <li><strong>Update Your Apps:</strong>
            <ul>
                <li>Tap <strong>Update</strong> next to the app you want to update.</li>
                <li>To update all apps at once, tap <strong>Update All</strong>.</li>
            </ul>
        </li>
    </ul>

    <h2>Updating Phone Software</h2>
    <ul>
        <li><strong>Open Settings:</strong>
            <ul>
                <li>Look for the <strong>Settings</strong> app (gear icon) and tap it.</li>
            </ul>
        </li>
        <li><strong>Find Software Update:</strong>
            <ul>
                <li>For iPhone: Go to <strong>General</strong> and tap <strong>Software Update</strong>.</li>
                <li>For Android: Look for <strong>System Updates</strong> or <strong>Software Updates</strong> under <strong>About Phone</strong>.</li>
            </ul>
        </li>
        <li><strong>Check for Updates:</strong>
            <ul>
                <li>Your phone will check for the latest software version.</li>
                <li>If an update is available, it will display the option to download and install it.</li>
            </ul>
        </li>
        <li><strong>Install the Update:</strong>
            <ul>
                <li>Tap <strong>Download and Install</strong> to start the process.</li>
                <li>Make sure your phone is connected to Wi-Fi and has enough battery.</li>
            </ul>
        </li>
    </ul>

    <h2>Tips for Updating</h2>
    <ul>
        <li><strong>Keep Your Phone Charged:</strong> Ensure your phone has at least 50% battery or plug it in during updates.</li>
        <li><strong>Use Wi-Fi:</strong> Updates can use a lot of data, so connect to Wi-Fi if possible.</li>
        <li><strong>Back Up Your Data:</strong> Consider backing up important information before a major software update.</li>
    </ul>
    
    <p>By keeping your apps and phone software updated, you’ll enjoy better performance and stay protected from security risks!</p>
        </div>

      </div>

      <Footer
        onBackClick={'/phone'}
      />

    </div>
  )
};

export default Phone5;