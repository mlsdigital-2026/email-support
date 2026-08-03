import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dns from "node:dns/promises";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("========== SMTP DEBUG ==========");
    console.log("SMTP_HOST:", process.env.SMTP_HOST);
    console.log("SMTP_PORT:", process.env.SMTP_PORT);
    console.log("SMTP_USER:", process.env.SMTP_USER);

    // Check DNS resolution
    const dnsResult = await dns.lookup(process.env.SMTP_HOST!);
    console.log("DNS RESULT:", dnsResult);

    // Create transporter
const transporter = nodemailer.createTransport({
  host: "67.223.118.117",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    servername: "sbcmailme.com",
  },
});

    console.log("Verifying SMTP connection...");

    await transporter.verify();

    console.log("SMTP VERIFIED SUCCESSFULLY");

    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: body.email,
      subject: body.subject,
      text: `
Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone}

Message:
${body.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Subject:</strong> ${body.subject}</p>

        <hr>

        <p>${body.message}</p>
      `,
    });

    console.log("EMAIL SENT SUCCESSFULLY");

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error: any) {
    console.error("========== SMTP ERROR ==========");
    console.error(error);

    if (error.response) {
      console.error("SMTP RESPONSE:", error.response);
    }

    if (error.responseCode) {
      console.error("SMTP RESPONSE CODE:", error.responseCode);
    }

    console.error("ERROR CODE:", error.code);
    console.error("ERROR ADDRESS:", error.address);
    console.error("ERROR PORT:", error.port);
    console.error("================================");

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}