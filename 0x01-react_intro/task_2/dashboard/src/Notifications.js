import React from 'react'; // Import React library

// Import CSS file for styling
import './Notifications.css';

// Import utility function to get latest notification
import { getLatestNotification } from './utils';

// Import close icon image
import closeIcon from './close-icon.png';

// Define Notifications component using arrow function syntax
function Notifications () {
  return (
    // Render a div with the class name 'Notifications'
    <div className='Notifications'>
      {/* Render a paragraph with notification header */}
      <p>Here is the list of notifications</p>

      {/* Render a button for closing notifications */}
      <button
        // Apply inline styles for positioning the button
        style={{
          position: 'absolute',
          top: '15px',
          right: '17px',
          border: 'none',
          background: 'none',
          padding: '0'
        }}
        // Provide an aria-label for accessibility
        aria-label='Close'
        // Log a message to the console when the button is clicked
        onClick={() => console.log('Close button has been clicked')}
      >
        {/* Render an image element for the close icon */}
        <img
          // Apply inline styles for positioning and size
          style={{
            display: 'inline',
            marginTop: '5px',
            marginRight: '5px',
            padding: '0'
          }}
          // Provide the close icon image source
          src={closeIcon}
          // Provide alternate text for the image
          alt='Close'
          // Set the width of the image
          width="15px"
        />
      </button>

      {/* Render an unordered list for notifications */}
      <ul>
        {/* Render list item for new course notification with default priority */}
        <li data='default'>New course available</li>

        {/* Render list item for new resume notification with urgent priority */}
        <li data='urgent'>New resume available</li>

        {/* Render list item for latest notification with HTML content */}
        <li
          // Set data attribute to indicate priority
          data='urgent'
          // Set inner HTML content using dangerouslySetInnerHTML
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
};

// Export Notifications component for use in other modules
export default Notifications;
