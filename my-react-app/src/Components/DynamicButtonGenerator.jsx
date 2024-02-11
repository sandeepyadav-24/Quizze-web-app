import React, { useState } from "react";
const DynamicButtonGenerator = ({ onButtonClick }) => {
  // State to track the generated buttons
  const [buttonCount, setButtonCount] = useState(1);

  // Maximum number of buttons (excluding the '+')
  const maxButtons = 5;

  // Function to add a new button
  const addButton = () => {
    // Check if the maximum number of buttons has been reached
    if (buttonCount >= maxButtons) {
      alert("Maximum number of buttons reached!");
      return;
    }
    onButtonClick();

    // Update the button count and trigger a re-render
    setButtonCount((prevCount) => prevCount + 1);
  };

  // Render the component
  return (
    <div>
      {/* Render buttons based on the buttonCount */}
      {[...Array(buttonCount)].map((_, index) => (
        <button
          className="w-14 h-14 rounded-full bg-white font-semibold mx-2"
          key={index + 1}
        >
          {index + 1}
        </button>
      ))}

      {/* Render the '+' button */}
      {buttonCount < maxButtons && (
        <button
          className="w-14 h-14 rounded-full font-semibold text-xl mx-2"
          onClick={addButton}
        >
          +
        </button>
      )}
    </div>
  );
};

export default DynamicButtonGenerator;
