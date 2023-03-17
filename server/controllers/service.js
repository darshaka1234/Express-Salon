import Service from "../models/Service.js";

const allServices = async (req, res) => {
  try {
    const services = await Service.find();

    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default allServices;
