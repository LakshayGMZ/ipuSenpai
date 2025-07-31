"use client";

import { useState } from "react";
import "../themes/RemoveEnrollmentButton.css"; 

interface RemoveEnrollmentButtonProps {
  onRemoveEnrollment?: () => Promise<void> | void;
}

const RemoveEnrollmentButton = ({ onRemoveEnrollment }: RemoveEnrollmentButtonProps) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemoveClick = () => setShowConfirmation(true);

  const handleCancelRemove = () => setShowConfirmation(false);

  const handleConfirmRemove = async () => {
    setIsRemoving(true);
    try {
      localStorage.removeItem("enrollmentNumber");
      localStorage.removeItem("studentProfile");
      localStorage.removeItem("userEnrollment");

      if (onRemoveEnrollment) await onRemoveEnrollment();

      setShowConfirmation(false);
      alert("Enrollment number removed successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error removing enrollment:", error);
      alert("Error removing enrollment number. Please try again.");
    } finally {
      setIsRemoving(false);
    }
  };

  return (
    <div className="remove-enrollment-container">
      {!showConfirmation ? (
        <button
          className="remove-enrollment-btn"
          onClick={handleRemoveClick}
          title="Remove saved enrollment number"
          type="button"
        >
          <svg
            className="remove-icon"
            fill="currentColor"
            viewBox="0 0 20 20"
            width="16"
            height="16"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Remove Enrollment
        </button>
      ) : (
        <div className="confirmation-dialog">
          <div className="confirmation-content">
            <h4>Confirm Removal</h4>
            <p>Are you sure you want to remove your saved enrollment number? This action cannot be undone.</p>
            <div className="confirmation-buttons">
              <button
                className="confirm-btn"
                onClick={handleConfirmRemove}
                disabled={isRemoving}
                type="button"
              >
                {isRemoving ? "Removing..." : "Yes, Remove"}
              </button>
              <button
                className="cancel-btn"
                onClick={handleCancelRemove}
                disabled={isRemoving}
                type="button"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RemoveEnrollmentButton;
