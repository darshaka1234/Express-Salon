import User from "../models/User.js";
import bcrypt from "bcrypt";

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
  try {
    const { appointments } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { appointments },
      {
        new: true,
      }
    );
    if (!user) {
      return res.status(404).json("Not found");
    }
    res.status(200).json(user);
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
