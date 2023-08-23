const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const apiKey = functions.config().sendgrid.key;

sgMail.setApiKey(apiKey);

exports.sendContactEmail = functions.https.onCall(async (data, context) => {
  const msg = {
    to: "nearbycontact@nearbyrealtyhomes.com", // Change to your recipient
    reply_to: data.email,
    from: "nearbycontact@nearbyrealtyhomes.com", // Change to your verified sender
    subject: `A new message from ${data.name}`,
    templateId: functions.config().sendgrid.template,
    dynamic_template_data: {
      name: data.name,
      email: data.email,
      message: data.message,
    },
    // html: `<strong>New Message From ${data.name}</strong>
    // <br>
    // <strong>Email: ${data.email}</strong>
    // <br>
    // <strong>Message:</strong>${" "}<p>${data?.message}</p>
    // `,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email Sent");
      return { success: true };
    })
    .catch((error) => {
      return {
        id: error.id,
        errorField: error.errors[0].field,
        errorMessage: error.errors[0].message,
        help: error.errors[0].help,
      };
    });
});
