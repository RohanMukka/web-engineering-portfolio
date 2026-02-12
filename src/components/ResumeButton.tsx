import React, { useState } from 'react';
import './ResumeButton.css';
import { Download } from 'lucide-react';

const ResumeButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleDownload = () => {
    if (!isChecked) {
      setIsChecked(true);
      // Wait for animation to complete
      setTimeout(() => {
        // Trigger actual download here
        const link = document.createElement('a');
        link.href = '/Rohan_Mukka_Resume.pdf'; // Assuming resume is in public folder
        link.download = 'Rohan_Mukka_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Reset button state automatically after download so it can be clicked again
        setTimeout(() => {
          setIsChecked(false);
        }, 1500); 
      }, 3500); // 3.5s matches the CSS animation duration
    }
  };

  return (
    <label className="resume-label">
      <input 
        type="checkbox" 
        className="resume-input" 
        checked={isChecked}
        onChange={handleDownload}
        disabled={isChecked} 
      />
      <span className="resume-circle">
        <Download className="resume-icon" />
        <div className="resume-square"></div>
      </span>
      <p className="resume-title text-base font-semibold">Resume</p>
      <p className="resume-title text-base font-semibold">Resume</p>
    </label>
  );
};

export default ResumeButton;
