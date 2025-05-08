import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import EmbedYoutube from '../EmbedYoutube';

const Phone6 = () => {
  return (
    <div>
      <div id="container">
        <Header pageTitle={"Using Health Tracking Apps"} />

        <div className="content-page content-scroll">
        <h1>Using Health Tracking Apps</h1>
    <p>Health tracking apps can help you monitor your daily activities, exercise, and overall well-being. Here’s how to get started with them.</p>
    
    <h2>Downloading a Health Tracking App</h2>
    <ul>
        <li><strong>Open the App Store:</strong>
            <ul>
                <li>For iPhone: Tap the <strong>App Store</strong> icon.</li>
                <li>For Android: Tap the <strong>Google Play Store</strong> icon.</li>
            </ul>
        </li>
        <li><strong>Search for a Health App:</strong>
            <ul>
                <li>Type keywords like <strong>Health Tracker</strong>, <strong>Step Counter</strong>, or <strong>Fitness App</strong>.</li>
                <li>Popular options include <strong>Google Fit</strong>, <strong>Apple Health</strong>, or <strong>MyFitnessPal</strong>.</li>
            </ul>
        </li>
        <li><strong>Install the App:</strong>
            <ul>
                <li>Tap <strong>Install</strong> or <strong>Get</strong> to download the app to your phone.</li>
            </ul>
        </li>
    </ul>

    <h2>Setting Up the App</h2>
    <ul>
        <li><strong>Open the App:</strong>
            <ul>
                <li>Find the app icon on your home screen and tap it to open.</li>
            </ul>
        </li>
        <li><strong>Create an Account:</strong>
            <ul>
                <li>Some apps may require you to create a free account using your email or phone number.</li>
            </ul>
        </li>
        <li><strong>Enter Your Details:</strong>
            <ul>
                <li>Input basic information like your age, weight, and activity goals.</li>
            </ul>
        </li>
        <li><strong>Allow Permissions:</strong>
            <ul>
                <li>The app may ask to access your phone’s sensors, like the step counter or heart rate monitor.</li>
                <li>Tap <strong>Allow</strong> to enable these features.</li>
            </ul>
        </li>
    </ul>

    <h2>Using the App</h2>
    <ul>
        <li><strong>Check Your Steps:</strong>
            <ul>
                <li>The app will show how many steps you’ve taken throughout the day.</li>
            </ul>
        </li>
        <li><strong>Log Your Activities:</strong>
            <ul>
                <li>Input activities like walking, running, or workouts to track progress.</li>
            </ul>
        </li>
        <li><strong>Track Your Goals:</strong>
            <ul>
                <li>Set daily or weekly goals for steps, calories burned, or exercise time.</li>
            </ul>
        </li>
    </ul>

    <h2>Tips for Using Health Apps</h2>
    <ul>
        <li><strong>Stay Consistent:</strong> Use the app daily to track your progress over time.</li>
        <li><strong>Sync with Wearables:</strong> If you have a smartwatch or fitness tracker, connect it to the app for more accurate data.</li>
        <li><strong>Celebrate Small Wins:</strong> Reaching even small goals is a great step toward better health!</li>
    </ul>
    
    <p>Health tracking apps are a simple way to stay active and monitor your well-being. Start using one today!</p>
        </div>

      </div>

      <Footer
        onBackClick={'/phone'}
      />

    </div>
  )
};

export default Phone6;