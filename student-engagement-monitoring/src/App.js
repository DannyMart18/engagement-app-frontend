// App.js
import React from 'react';
import Header from './components/header';
import AttendanceInput from './components/AttendanceInput';
import Button from './components/Button';
import OutputDisplay from './components/Outputdisplay';
import styles from './App.module.css';

function App() {
  // Define your state and functions here

  // Example function to handle the clearing of data
  const handleClear = () => {
    // clear your data here
    console.log("Data Cleared");
  };

  // Example function to handle submission of data
  const handleSubmit = () => {
    // submit your data here
    console.log("Data Submitted");
  };

  return (
    <div className={styles.app}>
      <Header title="Student Engagement Monitoring" />
      <div className={styles.mainContent}>
        <AttendanceInput label="Lecture Sessions" maxHours={33} />
        <AttendanceInput label="Lab Sessions" maxHours={22} />
        <AttendanceInput label="Support Sessions" maxHours={44} />
        <AttendanceInput label="Canvas Activities" maxHours={55} />
        <div className={styles.buttonGroup}>
          <Button text="Maximum and Minimum Attendance" onClick={handleSubmit} />
          <Button text="Sort Attendance" onClick={handleSubmit} />
          <Button text="Total Attendance Hours" onClick={handleSubmit} />
          <Button text="Student Engagement Score" onClick={handleSubmit} />
          <Button text="Risk of Student Failure" onClick={handleSubmit} />
          <Button text="Clear" onClick={handleClear} />
        </div>
        <OutputDisplay />
      </div>
    </div>
  );
}

export default App;
