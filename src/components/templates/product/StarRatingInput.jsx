import React, { useState } from "react";
import { IoMdStar, IoMdStarOutline } from "react-icons/io"; // Import both filled and outline stars

const StarRatingInput = ({ onScoreChange }) => {
  const [txtScore, setTxtScore] = useState(0); // State for the selected rating (0 means no rating)
  const [hoverScore, setHoverScore] = useState(0); // State for hover effect

  const handleStarClick = (score) => {
    setTxtScore(score); // Set the permanent score when a star is clicked
    onScoreChange(score); // Call the parent function to update the score
    // console.log("score", score); // Log the score for debugging
  };

  const handleMouseEnter = (score) => {
    setHoverScore(score); // Update hoverScore when mouse enters a star
  };

  const handleMouseLeave = () => {
    setHoverScore(0); // Reset hoverScore when mouse leaves the star container
  };

  // Determine which stars should be filled
  const getStarType = (starIndex) => {
    // If a score is selected, use that for filling
    // Otherwise, use the hover score
    const currentDisplayScore = txtScore > 0 ? txtScore : hoverScore;

    if (starIndex <= currentDisplayScore) {
      return <IoMdStar />; // Filled star
    } else {
      return <IoMdStarOutline />; // Outline star
    }
  };

  return (
    <div
      className="flex items-center text-yellow-500 py-1"
      onMouseLeave={handleMouseLeave} // Important: reset hover when leaving the whole group
    >
      {[1, 2, 3, 4, 5].map((score) => (
        <span
          key={score}
          onClick={() => handleStarClick(score)}
          onMouseEnter={() => handleMouseEnter(score)}
          className="cursor-pointer text-2xl" // Add cursor-pointer for better UX and text-2xl for size
        >
          {getStarType(score)}
        </span>
      ))}
    </div>
  );
};

export default StarRatingInput;
