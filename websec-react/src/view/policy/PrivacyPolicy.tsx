import classes from './styles/PrivacyPolicy.module.css'


const PrivacyPolicy = () => {
  return (
    <div className={classes.policyContainer}>

      <div className={classes.policyWrapper}>

        <div className={classes.policyH1Wrapper}>
          <h1>Privacy Policy for Websec-Education</h1>
        </div>

        <h2>Effective Date: [2023-10-30]</h2>
        <h2>Last Updated: [2023-10-30]</h2>
        <hr className={classes.policyHr}/>

        <p className={classes.welcomeText}>
          Welcome to Websec-Education. This Privacy Policy outlines our practices concerning the collection, use, and protection of your personal data. We are committed to maintaining the privacy and security of your information, complying with applicable data protection laws, including the General Data Protection Regulation (GDPR).
        </p>

        <h2>1. Information We Collect</h2>
        <div className={classes.policyInformation}>
          <h3>1.1 Cookies:</h3>
          <p>
            We use cookies to enhance your browsing experience and analyze site traffic. Cookies are small text files that are stored on your device when you visit our website. They help us understand how you interact with our site and improve our services. We require your consent for non-essential cookies, which includes performance, analytics, and marketing cookies.
          </p>

          <h3>1.2 Server Logs:</h3>
          <p>
            Our servers may automatically log certain information, such as your IP address, the type of browser you use, and the pages you visit. This data is collected for operational and security purposes and is not used to identify individual users.
          </p>
        </div>


        <h2>2. Use of Information</h2>
        <div className={classes.policyInformation}>

          <p>We use the information collected for the following purposes:</p>
          <div className={classes.policyList}>
            <ul>
              <li>To provide and personalize our services.</li>
              <li>To analyze and improve our website's performance.</li>
              <li>To monitor and enhance site security.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </div>
        </div>

        <h2>3. Legal Basis for Processing</h2>
        <div className={classes.policyInformation}>

          <p>We rely on the following legal bases for processing your data:</p>
          <ul>
            <li>Your consent for non-essential cookies.</li>
            <li>Legitimate interests for server log data and essential site operation.</li>
            <li>Legal obligations for compliance with applicable laws.</li>
          </ul>
        </div>

        <h2>4. Data Sharing</h2>
        <div className={classes.policyInformation}>
          <p>We do not sell or rent your personal data to third parties. We may share your information with trusted service providers who help us deliver our services.</p>
        </div>


        <h2>5. Data Retention</h2>
        <div className={classes.policyInformation}>

          <p>We will retain your personal data only for as long as necessary for the purposes set out in this Privacy Policy. When data is no longer required, it will be securely deleted.</p>
        </div>

        <h2>6. Your Rights</h2>
        <div className={classes.policyInformation}>
          <p>You have the following rights:</p>
          <div className={classes.policyList}>
            <ul>
              <li><strong>Right to Access:</strong> You have the right to access the personal data we hold about you.</li>
              <li><strong>Right to Rectification:</strong> You may request corrections to your personal data.</li>
              <li><strong>Right to Erasure:</strong> You can request the deletion of your data.</li>
              <li><strong>Right to Data Portability:</strong> You have the right to receive your data in a structured, commonly used format.</li>
              <li><strong>Right to Object:</strong> You may object to certain processing of your data.</li>
            </ul>
          </div>
        </div>


        <h2>7. Contact Information</h2>
        <div className={classes.policyInformation}>
          <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us at [insert contact information].</p>
        </div>

        <h2>8. Updates to the Privacy Policy</h2>
        <div className={classes.policyInformation}>
          <p>We may update this Privacy Policy to reflect changes in our practices or legal requirements. Any changes will be posted on this page with an updated effective date.</p>
          <p>By using Websec-Education, you consent to the terms of this Privacy Policy.</p>
        </div>
      </div>

    </div>
  );
};

export default PrivacyPolicy;
