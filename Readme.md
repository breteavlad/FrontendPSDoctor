# Doctor Appointment App - Component Documentation

## Table of Contents
- [Doctor Appointment App - Component Documentation](#doctor-appointment-app---component-documentation)
  - [Table of Contents](#table-of-contents)
  - [MainPage](#mainpage)
  - [PatientLogin](#patientlogin)
  - [DoctorLogin](#doctorlogin)
  - [PatientDashboard](#patientdashboard)
  - [DoctorDashboard](#doctordashboard)
  - [AvailableDoctors](#availabledoctors)
  - [BookAppointment](#bookappointment)
  - [CurrentAppointments](#currentappointments)
  - [AppointmentHistory](#appointmenthistory)
  - [PatientDetails](#patientdetails)
  - [ManageAvailability](#manageavailability)
  - [ProfileSettings](#profilesettings)
  - [Appointments](#appointments)
  - [AddAppointment](#addappointment)
  - [Running the Application](#running-the-application)

## MainPage
The `MainPage` component serves as the landing page for the application. It provides an introduction and navigation options for users to log in as either patients or doctors.

## PatientLogin
The `PatientLogin` component handles the login functionality for patients. It validates user credentials against the patient data and navigates to the `PatientDashboard` upon successful login.

## DoctorLogin
The `DoctorLogin` component handles the login functionality for doctors. It validates user credentials against the doctor data and navigates to the `DoctorDashboard` upon successful login.

## PatientDashboard
The `PatientDashboard` component is the main interface for logged-in patients. It provides navigation to various patient-related features such as viewing available doctors, booking appointments, and viewing prices.

## DoctorDashboard
The `DoctorDashboard` component is the main interface for logged-in doctors. It provides navigation to various doctor-related features such as viewing current appointments, appointment history, patient details, managing availability, and updating profile settings.

## AvailableDoctors
The `AvailableDoctors` component displays a list of doctors available for appointments. Patients can view details and availability of doctors.

## BookAppointment
The `BookAppointment` component allows patients to book appointments with available doctors by selecting a date and time.

## CurrentAppointments
The `CurrentAppointments` component displays a list of upcoming appointments for the logged-in doctor.

## AppointmentHistory
The `AppointmentHistory` component shows the past appointments that the logged-in doctor has had with patients.

## PatientDetails
The `PatientDetails` component provides detailed information about patients, allowing doctors to review patient history and information.

## ManageAvailability
The `ManageAvailability` component allows doctors to manage their schedule and availability for appointments. Doctors can set available time slots and update their schedule.

## ProfileSettings
The `ProfileSettings` component allows doctors to update their personal and professional information, such as name, contact details, and specialization.

## Appointments
The `Appointments` component is a general component to manage appointments. It could be used for displaying and interacting with appointment data.

## AddAppointment
The `AddAppointment` component provides functionality for adding new appointments. It could be used by administrators or doctors to manually schedule appointments.

## Running the Application
To run the application, follow these steps:
1. Install dependencies: `npm install`
2. Start the development server: `npm start`
3. Open `http://localhost:3000` in your browser to view the application.

This documentation provides a brief overview of the components and their functionality within the Doctor Appointment App.
