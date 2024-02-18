const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "serveriiitkota@gmail.com",
          pass: "xpcwbqaowuyrdvmx ",
          // Use environment variables set on the server for these values when deploying
        },
        authMethod: 'PLAIN'
      });   
  

async function sendEmail(transporter, lastRegistrationName, lastRegistrationMobile, lastRegistrationRoom, lastRegistrationDescription, lastRegistrationPhoto) {
    const mailOption = {
        from: "serveriiitkota@gmail.com",
        to: "sanidhyamadheshia@gmail.com",
        subject: "issue regarding your depart",
        html: `
        <h1>issue</h1>
        <p>name : ${lastRegistrationName}</p>
        <p>Mobile no. : ${lastRegistrationMobile}</p>
        <p>Description : ${lastRegistrationDescription}</p>
        <p>room no. : ${lastRegistrationRoom}</p>
        <p>image</p>
        <img src="cid:unique@gmail.com" width="400">
        `,
        attachments: [{
            filename: 'img1.jpg',
            path: `${lastRegistrationPhoto}`,
            cid: 'unique@gmail.com'
        }],
    };  

    transporter.sendMail(mailOption, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = { sendEmail };