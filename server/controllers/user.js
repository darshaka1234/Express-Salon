import User from "../models/User.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, telephone, password } = req.body;

    const user = await User.findOne({ email: email });
    if (user) return res.status(400).json({ msg: "User already exits " });

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      telephone,
      password: passwordHash,
    });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const Booking = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json("Not found");
    }
    user.appointments = req.body;
    const updatedUser = await user.save();
    const mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: updatedUser.email,
      subject: "Appoinment was successful",
      text: `service type: ${updatedUser.appointments[0].serviceType}
      date: ${updatedUser.appointments[0].date}  ${updatedUser.appointments[0].time}
       price: ${updatedUser.appointments[0].price}`,
    };
    res.status(200).json(updatedUser);
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const allUsers = async (req, res) => {
  try {
    const allUsers = await User.find();

    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
