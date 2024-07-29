import React from 'react';

const DateFormat = () => {
  // Get the current date and time
  const date = new Date();

  // Define options for date formatting
  const options = {
    weekday: 'long',  // Full name of the day
    day: 'numeric',   // Day of the month
    month: 'long',    // Full name of the month
    year: 'numeric',  // Full year
    hour: '2-digit',  // Hour in 24-hour format
    minute: '2-digit',// Minutes
    second: '2-digit' // Seconds
  };

  // Create a formatter with French locale
  const formatter = new Intl.DateTimeFormat('fr-FR', options);

  // Format the current date
  const formattedDate = formatter.format(date);

  return (
    <div className="date-format">
      {formattedDate}
    </div>
  );
};

export default DateFormat;
