import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>based on <Link to="https://uptimerobot.com/" text="UptimeRobot" /> Interface production, Detection frequency 5 minutes</p>
      </div>
    </div>
  );
}

export default Footer;
