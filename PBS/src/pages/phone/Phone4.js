import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import EmbedYoutube from '../EmbedYoutube';

const Phone4 = () => {
  return (
    <div>
      <div id="container">
        <Header pageTitle={"Phone 4"} />

        <div className="content-page content-scroll">
        <h1>Understanding Phone Settings</h1>
    <p>Your phone settings allow you to adjust how your phone works. These simple instructions will help you explore and customize basic settings.</p>
    
    <h2>How to Open the Settings</h2>
    <ul>
        <li><strong>Find the Settings App:</strong>
            <ul>
                <li>Look for an icon shaped like a gear or wrench labeled <strong>Settings</strong>.</li>
                <li>Tap the icon to open it.</li>
            </ul>
        </li>
    </ul>

    <h2>Common Phone Settings to Know</h2>
    <ul>
        <li><strong>Wi-Fi:</strong>
            <ul>
                <li>Tap <strong>Wi-Fi</strong> to connect to the internet using a wireless network.</li>
                <li>Choose your network from the list and enter the password if needed.</li>
            </ul>
        </li>
        <li><strong>Bluetooth:</strong>
            <ul>
                <li>Turn Bluetooth on to connect wireless devices like headphones or a keyboard.</li>
            </ul>
        </li>
        <li><strong>Display:</strong>
            <ul>
                <li>Adjust screen brightness or change your wallpaper in this section.</li>
            </ul>
        </li>
        <li><strong>Sounds:</strong>
            <ul>
                <li>Change the volume for calls, notifications, and media.</li>
                <li>Set a ringtone for incoming calls.</li>
            </ul>
        </li>
        <li><strong>Notifications:</strong>
            <ul>
                <li>Control how and when your phone alerts you about apps and messages.</li>
            </ul>
        </li>
        <li><strong>Battery:</strong>
            <ul>
                <li>Check how much battery life is left and turn on power-saving mode if needed.</li>
            </ul>
        </li>
        <li><strong>Security:</strong>
            <ul>
                <li>Set a password, PIN, or fingerprint to protect your phone.</li>
            </ul>
        </li>
    </ul>

    <h2>Tips for Using Settings</h2>
    <ul>
        <li><strong>Explore Safely:</strong> You can’t damage your phone by looking at the settings. Explore at your own pace.</li>
        <li><strong>Ask for Help:</strong> If you’re unsure about a setting, ask a family member or friend for guidance.</li>
        <li><strong>Use the Search Feature:</strong> Most phones have a search bar at the top of the Settings app to find what you need quickly.</li>
    </ul>
    
    <p>By understanding these basic settings, you can customize your phone to suit your needs and make it easier to use!</p>
        </div>

      </div>

      <Footer
        onBackClick={'/phone'}
      />

    </div>
  )
};

export default Phone4;