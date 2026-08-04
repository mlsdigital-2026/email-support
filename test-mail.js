const nodemailer = require("nodemailer");

(async () => {
  try {
    const transporter = nodemailer.createTransport({
      host: "67.223.118.117",
      port: 465,
      secure: true,
      auth: {
        user: "info@sbcmailme.com",
        pass: "YOUR_PASSWORD_HERE",
      },
      tls: {
        servername: "sbcmailme.com",
      },
      logger: true,
      debug: true,
    });

    await transporter.verify();
    console.log("SMTP VERIFIED");
  } catch (err) {
    console.error(err);
  }
})();