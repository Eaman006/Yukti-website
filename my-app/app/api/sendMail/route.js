import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, contact, message } = await req.json();

    if (!name || !contact || !message) {
      return new Response(JSON.stringify({ error: "All fields are required" }), {
        status: 400,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // App password (not your actual password)
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "your-email@gmail.com", // Your email address
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nContact: ${contact}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: "Email sent successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
