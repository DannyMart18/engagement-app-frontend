import React from 'react';
import styles from './Attendanceinput.module.css'; // Ensure your styles are set up for this

const AttendanceInput = ({ label, maxHours }) => {
  // Creating a unique ID for the input field for accessibility reasons
  const inputId = `input-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className={styles.inputGroup}>
      <label htmlFor={inputId} className={styles.label}>
        {label} (Max hours: {maxHours})
      </label>
      <input
        type="number"
        className={styles.input}
        id={inputId}
        max={maxHours}
        placeholder={`Enter hours (up to ${maxHours})`}
        // Add other props like onChange as needed for your state management
      />
    </div>
  );
};

export default AttendanceInput;
