import React from 'react';
import Header from './Header';
import Footer from './Footer'
import { ref, push } from 'firebase/database';
import { Database } from 'firebase/database';

const Suggestion = () => {
    return (
        <div>
            <div id="container">

                <Header pageTitle={"Resources and Helplines"} />

                <div className="content-page content-scroll">


                    <ul>
                        <li><strong>National Elder Fraud Hotline</strong>
                            <p>Call: 1-833-FRAUD-11 (833-372-8311)</p>
                        </li>
                        <li><strong>U.S. Department of Justice (DOJ) Elder Justice Initiative</strong>
                            <p>Visit: <a href="https://www.elderjustice.gov">https://www.elderjustice.gov</a></p>
                        </li>
                        <li><strong>U.S. Administration on Aging, Eldercare Locator</strong>
                            <p>To find local Adult Protective Services and other resources <br></br>
                                Call: 1 (800) 677-1116 <br></br>
                                Visit: <a href="https://eldercare.acl.gov">https://eldercare.acl.gov</a>
                            </p>
                        </li>
                        <li><strong>Financial Industry Regulatory Authority (FINRA) Securities Helpline for Senior</strong>
                            <p>Call: 1 (844) 574-3577 <br></br>
                                Visit: <a href="https://www.finra.org/investors/need-help/helpline-seniors">https://www.finra.org/investors/need-help/helpline-seniors</a>
                            </p>
                        </li>
                        <li><strong>Senate Subcommittee on Aging Fraud Hotline                        </strong>
                            <p>Call: 1 (855) 303-9470 <br></br>
                                Visit: <a href="https://www.aging.senate.gov/fraud-hotline">https://www.aging.senate.gov/fraud-hotline</a>
                            </p>
                        </li>
                        <li><strong>AARP Fraud Watch Network Helpline                        </strong>
                            <p>Call: 1 (877) 908-3360 <br></br>
                                Visit: <a href="https://www.aarp.org/money/scams-fraud/helpline">https://www.aarp.org/money/scams-fraud/helpline</a>
                            </p>
                        </li>
                    </ul>


                    <h2>How to Provide Feedback</h2>
                    <p><strong>Email Us:</strong> You can share your thoughts or suggestions by sending an email to:</p>
                    <p><strong>feedback@tutorialapp.com</strong></p>
                    <p>Be sure to include details like the tutorial you’re referencing or any suggestions for improvement.</p>

                    <div class="container">
                        <h2>Need Help? Contact Support</h2>
                        <p>If you are facing any issues with the app or tutorials, please reach out to our support team:</p>
                        <p><strong>Phone:</strong> 1-800-555-1234</p>
                        <p><strong>Email:</strong> support@tutorialapp.com</p>
                        <p>Support is available Monday to Friday, 9 AM to 5 PM.</p>
                    </div>

                    <div class="container">
                        <h2>Send Mail</h2>
                        <p>If you prefer, you can send us a letter at:</p>
                        <p><strong>Tutorial App for Seniors</strong></p>
                        <p>TBA</p>
                        <p>TBA</p>
                    </div>

                </div>

            </div>

            <Footer
                onBackClick={'/'}
            />

        </div>
    )
};
export default Suggestion;