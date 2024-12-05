const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patient_id: { type: String, required: true },    
    doctor_id: { type: String, required: true },     
    date: { type: Date, required: true },            
    reason: { type: String, required: true },        
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
