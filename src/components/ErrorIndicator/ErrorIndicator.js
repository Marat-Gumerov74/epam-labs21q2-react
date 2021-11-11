import './ErrorIndicator.css'
import React from 'react';

const ErrorIndicator = () => {
  return(
    <div className="error-indicator">
      <span>No data found! We are looking for data for you, and hopefully we will find it soon.</span>
    </div>
  )
}

export default ErrorIndicator;