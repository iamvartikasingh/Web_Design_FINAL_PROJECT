import React from "react";
import ActivityTracker from "./ActivityTracker";
import YogaMeditation from "./YogaMeditation";
import AppointmentScheduler from "./AppointmentScheduler";
import ChatWithTherapist from "./ChatWithTherapist";
import MedicationReminder from "./MedicationReminder";
import ProgressDashboard from "./ProgressDashboard";
import DailyJournal from "./DailyJournal";
import EducationalResources from "./EducationalResources";

const Dashboard = () => {
  return (
    <div className="container-fluid py-4">
      <h2 className="mb-4">Patient Dashboard</h2>
      <div className="row g-3">
        <div className="col-lg-4 col-md-6">
          <ActivityTracker />
        </div>
        <div className="col-lg-4 col-md-6">
          <YogaMeditation />
        </div>
        <div className="col-lg-4 col-md-6">
          <AppointmentScheduler />
        </div>
        <div className="col-lg-4 col-md-6">
          <ChatWithTherapist />
        </div>
        <div className="col-lg-4 col-md-6">
          <MedicationReminder />
        </div>
        <div className="col-lg-4 col-md-6">
          <ProgressDashboard />
        </div>
        <div className="col-lg-4 col-md-6">
          <DailyJournal />
        </div>
        <div className="col-lg-4 col-md-6">
          <EducationalResources />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
