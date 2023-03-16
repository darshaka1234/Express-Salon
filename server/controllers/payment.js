import dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const payment = async (req, res) => {
  try {
    const { amount, token } = req.body;

    const charge = await stripe.charges.create({
      amount: amount,
      currency: "USD",
      source: token.id,
    });

    res.json(charge);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};
