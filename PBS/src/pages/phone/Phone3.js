import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import EmbedYoutube from '../EmbedYoutube';

const Phone3 = () => {
  return (
    <div>
      <div id="container">
        <Header pageTitle={"Take a Photo/Basic Camera Roll Functions"} />

        <div className="content-page content-scroll">
        <h1>How to Take a Photo and Use Your Camera Roll</h1>
    <p>Taking photos and managing them is easy! Follow these simple steps to capture moments and view them in your camera roll.</p>
    
    <h2>Taking a Photo</h2>
    <ul>
        <li><strong>Open the Camera App:</strong>
            <ul>
                <li>Tap the <strong>Camera</strong> icon on your home screen.</li>
            </ul>
        </li>
        <li><strong>Position Your Phone:</strong>
            <ul>
                <li>Hold your phone steady and aim it at what you want to capture.</li>
                <li>Use the screen to adjust your shot.</li>
            </ul>
        </li>
        <li><strong>Take the Photo:</strong>
            <ul>
                <li>Tap the round shutter button (usually at the bottom center of the screen).</li>
                <li>You’ll hear a click or see an animation when the photo is taken.</li>
            </ul>
        </li>
    </ul>

    <h2>Viewing Photos in Your Camera Roll</h2>
    <ul>
        <li><strong>Open the Camera Roll:</strong>
            <ul>
                <li>Tap the <strong>Photos</strong> or <strong>Gallery</strong> app on your home screen.</li>
            </ul>
        </li>
        <li><strong>Find Your Photo:</strong>
            <ul>
                <li>Your recent photos appear at the top of the screen.</li>
                <li>Scroll through to find older photos.</li>
            </ul>
        </li>
        <li><strong>View the Photo:</strong>
            <ul>
                <li>Tap on any photo to view it in full screen.</li>
            </ul>
        </li>
    </ul>

    <h2>Deleting Unwanted Photos</h2>
    <ul>
        <li><strong>Select a Photo:</strong>
            <ul>
                <li>Tap the photo you want to delete.</li>
            </ul>
        </li>
        <li><strong>Delete the Photo:</strong>
            <ul>
                <li>Look for the trash can icon and tap it.</li>
                <li>Confirm the deletion when asked.</li>
            </ul>
        </li>
    </ul>

    <h2>Tips for Taking Great Photos</h2>
    <ul>
        <li><strong>Good Lighting:</strong> Take photos in well-lit areas for better quality.</li>
        <li><strong>Focus:</strong> Tap on the screen to focus on your subject before taking the photo.</li>
        <li><strong>Keep it Steady:</strong> Hold your phone with both hands to avoid blurry pictures.</li>
    </ul>

    <p>By learning these steps, you can capture memories and enjoy looking back on them anytime!</p>
        </div>

      </div>

      <Footer
        onBackClick={'/phone'}
      />

    </div>
  )
};

export default Phone3;