import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import EmbedYoutube from '../EmbedYoutube';

const Internet6 = () => {
  return (
    <div>
      <div id="container">
        <Header pageTitle={"Understanding Passwords and Online Security"} />

        <div className="content-page content-scroll">
        <h1>Understanding Passwords and Online Security</h1>
    <p>Passwords are the keys to your online accounts. Keeping them secure is important to protect your personal information.</p>
    
    <h2>Steps to Create Strong Passwords</h2>
    <ol>
        <li><strong>Make It Long:</strong>
            <ul>
                <li>A good password should be at least 12 characters long.</li>
            </ul>
        </li>
        <li><strong>Use a Mix of Characters:</strong>
            <ul>
                <li>Include uppercase letters, lowercase letters, numbers, and symbols (e.g., @, #, $).</li>
            </ul>
        </li>
        <li><strong>Avoid Common Words:</strong>
            <ul>
                <li>Do not use easy-to-guess words like "password," "123456," or your name.</li>
            </ul>
        </li>
        <li><strong>Create Unique Passwords:</strong>
            <ul>
                <li>Use a different password for each account to prevent all your accounts from being compromised if one password is stolen.</li>
            </ul>
        </li>
    </ol>
    
    <h2>Online Security Tips</h2>
    <ol>
        <li><strong>Enable Two-Factor Authentication (2FA):</strong>
            <ul>
                <li>Many websites offer 2FA, which requires a code sent to your phone or email in addition to your password.</li>
            </ul>
        </li>
        <li><strong>Beware of Phishing Scams:</strong>
            <ul>
                <li>Do not click on suspicious links in emails or messages, especially if they ask for your password or financial information.</li>
            </ul>
        </li>
        <li><strong>Keep Software Updated:</strong>
            <ul>
                <li>Install updates for your devices and apps to ensure you have the latest security protections.</li>
            </ul>
        </li>
        <li><strong>Use a Password Manager:</strong>
            <ul>
                <li>Consider using a password manager to securely store and manage your passwords.</li>
            </ul>
        </li>
        <li><strong>Log Out When Using Shared Devices:</strong>
            <ul>
                <li>Always log out of your accounts when you are done, especially on public or shared computers.</li>
            </ul>
        </li>
    </ol>
    
    <h2>What to Do If You Think Your Password Is Compromised</h2>
    <ol>
        <li><strong>Change the Password Immediately:</strong>
            <ul>
                <li>Create a new, strong password for the affected account.</li>
            </ul>
        </li>
        <li><strong>Check for Unusual Activity:</strong>
            <ul>
                <li>Look for unauthorized transactions or messages sent from your account.</li>
            </ul>
        </li>
        <li><strong>Enable Two-Factor Authentication:</strong>
            <ul>
                <li>Add an extra layer of security to prevent unauthorized access in the future.</li>
            </ul>
        </li>
    </ol>
    
    <p>By following these steps, you can enhance your online security and protect your accounts from being hacked.</p>

        </div>

      </div>

      <Footer
        onBackClick={'/internet'}
      />

    </div>
  )
};

export default Internet6;