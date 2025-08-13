"use client";

import { useState } from "react";

// Constants for localStorage keys to avoid typos and ensure consistency
const STORAGE_KEYS = {
  ENROLLMENT_NUMBER: "enrollmentNumber",
  STUDENT_PROFILE: "studentProfile",
  USER_ENROLLMENT: "userEnrollment"
} as const;

interface RemoveEnrollmentButtonProps {
  onRemoveEnrollment?: () => Promise<void> | void;
  onEnrollmentRemoved?: () => void; // Callback for when enrollment is successfully removed
}

const RemoveEnrollmentButton = ({ 
  onRemoveEnrollment, 
  onEnrollmentRemoved 
}: RemoveEnrollmentButtonProps) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemoveClick = () => setShowConfirmation(true);

  const handleCancelRemove = () => setShowConfirmation(false);

  const handleConfirmRemove = async () => {
    setIsRemoving(true);
    try {
      // Remove all enrollment-related data from localStorage
      Object.values(STORAGE_KEYS).forEach(key => {
        localStorage.removeItem(key);
      });

      // Call the optional callback
      if (onRemoveEnrollment) {
        await onRemoveEnrollment();
      }

      setShowConfirmation(false);
      
      // Call the success callback if provided, otherwise reload
      if (onEnrollmentRemoved) {
        onEnrollmentRemoved();
      } else {
        alert("Enrollment number removed successfully!");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error removing enrollment:", error);
      setErrorMessage("Error removing enrollment number. Please try again.");
    } finally {
      setIsRemoving(false);
    }
  };

  return (
    <div className="mt-2.5">
      {!showConfirmation ? (
        <button
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white border-0 rounded-md cursor-pointer text-sm font-medium transition-all duration-300 shadow-lg shadow-red-600/20 hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-600/30 active:translate-y-0 active:shadow-lg active:shadow-red-600/20"
          onClick={handleRemoveClick}
          title="Remove saved enrollment number"
          type="button"
        >
          <svg
            className="w-4 h-4"
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
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl max-w-md w-[90%] text-center">
            <h4 className="m-0 mb-4 text-gray-900 dark:text-white text-lg font-semibold">
              Confirm Removal
            </h4>
            <p className="m-0 mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              Are you sure you want to remove your saved enrollment number? 
              This action cannot be undone.
            </p>
            <div className="flex gap-3 justify-center">
              <button
                className={`px-5 py-2.5 border-0 rounded-md cursor-pointer font-medium transition-all duration-300 ${
                  isRemoving 
                    ? "bg-gray-500 text-white cursor-not-allowed" 
                    : "bg-red-600 text-white hover:bg-red-700"
                }`}
                onClick={handleConfirmRemove}
                disabled={isRemoving}
                type="button"
              >
                {isRemoving ? "Removing..." : "Yes, Remove"}
              </button>
              <button
                className={`px-5 py-2.5 border-0 rounded-md cursor-pointer font-medium transition-all duration-300 ${
                  isRemoving 
                    ? "bg-gray-400 text-white opacity-60 cursor-not-allowed" 
                    : "bg-gray-600 text-white hover:bg-gray-700"
                }`}
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
