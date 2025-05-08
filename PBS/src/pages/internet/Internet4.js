import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import EmbedYoutube from '../EmbedYoutube';

const Internet4 = () => {
  return (
    <div>
      <div id="container">
        <Header pageTitle={"Connecting to Internet & Hotspot"} />

        <div className="content-page content-scroll">
        <h1>Connecting to the Internet and Using a Hotspot</h1>
    <p><strong>What is the Internet?</strong> The internet is a global network that connects computers and devices, allowing you to browse websites, send emails, and more.</p>
    <p><strong>What is a Hotspot?</strong> A hotspot is a feature on your phone or another device that shares its internet connection with nearby devices like laptops or tablets.</p>
    
    <h2>How to Connect to the Internet</h2>
    <ol>
        <li><strong>Turn on Wi-Fi:</strong>
            <ul>
                <li>On your device, go to the settings menu and find "Wi-Fi."</li>
                <li>Tap to turn Wi-Fi on.</li>
            </ul>
        </li>
        <li><strong>Select a Network:</strong>
            <ul>
                <li>You will see a list of available Wi-Fi networks.</li>
                <li>Tap the network you want to connect to.</li>
            </ul>
        </li>
        <li><strong>Enter the Password:</strong>
            <ul>
                <li>If the network is password-protected, a box will appear for you to type the password.</li>
                <li>Type the password and tap "Connect."</li>
            </ul>
        </li>
        <li><strong>Check Connection:</strong>
            <ul>
                <li>Once connected, you’ll see a Wi-Fi icon on your screen.</li>
                <li>You can now use the internet!</li>
            </ul>
        </li>
    </ol>
    
    <h2>How to Use a Hotspot</h2>
    <ol>
        <li><strong>Enable Hotspot on Your Phone:</strong>
            <ul>
                <li>Go to the settings menu on your smartphone.</li>
                <li>Look for "Hotspot" or "Tethering" and tap it.</li>
                <li>Turn the hotspot on. Note the name and password of the hotspot.</li>
            </ul>
        </li>
        <li><strong>Connect Your Device:</strong>
            <ul>
                <li>On the device you want to connect, go to the Wi-Fi settings.</li>
                <li>Find the name of your hotspot in the list of available networks.</li>
                <li>Tap it and enter the hotspot password.</li>
            </ul>
        </li>
        <li><strong>Start Browsing:</strong>
            <ul>
                <li>Once connected, you can use the internet as you normally would.</li>
                <li>Remember to turn off the hotspot when done to save battery.</li>
            </ul>
        </li>
    </ol>

    <EmbedYoutube
            youtubeURL={"https://www.youtube.com/embed/6_QX12szXTM?si=TC_9GHZQm7V4zfFp"}
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

export default Internet4;