const express = require('express');
const User = require('../models/User');
const router = express.Router();

const isAdmin = (req, res, next) => {
  
    return next();
  
  
};

router.get('/doctors', async (req, res) => {
  try {
    const doctors = await User.find({ role: 'doctor' }).select('user_id name email role'); 
    res.status(200).json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/patients', async (req, res) => {
  try {
    const patients = await User.find({ role: 'patient' }).select('user_id name email role'); 
    res.status(200).json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/', isAdmin, async (req, res) => {
  try {
    const users = await User.find().select('user_id name email role'); 
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
