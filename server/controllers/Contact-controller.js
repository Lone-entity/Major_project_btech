const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
  try {
    const { username, email, message } = req.body;

    // Check if required fields are present
    if (!username || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Store the contact form data in the database
    await Contact.create({ username, email, message });

    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error in contact form submission:", error);
    return res.status(500).json({ message: "Message not delivered" });
  }
};

module.exports = contactForm;
