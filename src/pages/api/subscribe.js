import connectDB from '../../db';
import Subscriber from '../../models/Subscriber';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    connectDB();

    const { email } = req.body;

    try {
      const existingSubscriber = await Subscriber.findOne({ email });

      if (existingSubscriber) {
        return res.status(400).json({ message: 'Email already subscribed.' , success:false});
      }

      const newSubscriber = new Subscriber({ email });
      await newSubscriber.save();

      return res.status(201).json({ message: 'Subscription successful.', success:true });
    } catch (error) {
      console.error('Error subscribing:', error);
      return res.status(500).json({ message: 'Server error.' });
    }
  }

  return res.status(405).end();
}
