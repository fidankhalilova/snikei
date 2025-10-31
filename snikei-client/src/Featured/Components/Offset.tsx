import React, { useEffect } from "react";

interface OffCanvasProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const OffCanvas: React.FC<OffCanvasProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black z-40 transition-all duration-300 ${
          isOpen ? "opacity-60" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleBackdropClick}
      />

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default OffCanvas;
