# Mental Wellness Platform

## Overview
The Mental Wellness platform is a comprehensive solution designed to provide mental health support through personalized therapy, yoga and meditation resources, appointment scheduling, and communication with therapists and doctors. It consists of three main panels: Admin, Patient, and Doctor, each catering to the specific needs of its users. This system uses modern web technologies to ensure a seamless user experience and efficient backend operations.

## Tech Stack
- **Frontend**: React.js, Bootstrap
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **APIs**: RESTful APIs
- **Version Control**: GitHub

## Main Panels and Features

### 1. Admin Panel
**Features**:
- Manage Doctors:
  - Approve or reject doctor registration requests.
  - View and delete doctor profiles.
- Manage Patients:
  - Assign doctors to patients.
  - View patient profiles and their assigned doctors.
- Generate Reports:
  - View analytics and user statistics.
- Manage Threads:
  - Monitor discussion forums and delete inappropriate content.

### 2. Doctor Panel
**Features**:
- Manage Appointments:
  - View and accept/cancel upcoming appointments.
  - Create and manage available slots.
- Patient Management:
  - Access patient details and view their medical history.
  - Chat with patients for quick consultations.
- Dashboard:
  - View an overview of daily tasks and appointments.
  - Monitor performance through ratings and feedback.
- Discussion Forum:
  - Participate in community discussions to provide guidance.

### 3. Patient Panel
**Features**:
- Dashboard:
  - Track mood, sleep patterns, and therapy progress through the Activity Tracker and Progress Dashboard.
  - Access yoga and meditation resources.
- Appointment Management:
  - Schedule and manage appointments with doctors.
  - View upcoming and past appointments.
- Daily Journal:
  - Maintain a personal journal for mental health tracking.
- Chat:
  - Communicate directly with therapists.
- Educational Resources:
  - Access curated resources for mental health education.

## Backend Functionality
- **Authentication**: Role-based access control (Admin, Doctor, Patient) using JWT.
- **Database**: MongoDB for user profiles, appointments, and doctor-patient mappings.
- **API Endpoints**:
  - User Management (Registration, Login, Role Assignment)
  - Appointment Management (CRUD operations for appointments and slots)
  - Doctor-Patient Mappings
  - Thread Management for forums

## Collaborators
- **Aditya Mitra**: Backend Management
- **Himank Arora**: Patient’s Dashboard
- **Manisha Sahu**: Doctor’s Dashboard
- **Mansi Kamble**: Homepage, User Access
- **Vartika Singh**: Appointment and Booking Management

## Getting Started
1. Clone the repository from GitHub.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```env
   PORT=5000
   MONGO_URI=<your_mongo_db_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```
4. Start the backend server:
   ```bash
   npm start
   ```
5. Start the frontend:
   ```bash
   cd frontend
   npm start
   ```
6. Access the application at `http://localhost:3000`.


