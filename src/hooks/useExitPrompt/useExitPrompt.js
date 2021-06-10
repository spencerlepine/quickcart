import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

const initBeforeUnLoad = (showExitPrompt) => {
  window.onbeforeunload = (event) => {
    if (showExitPrompt) {
      const e = event || window.event;
      e.preventDefault();
      if (e) {
        e.returnValue = '';
      }
      return '';
    }
  };
};

// Hook
export default function useExitPrompt(bool) {
  const [showExitPrompt, setShowExitPrompt] = useState(bool);
  const { pathname } = useLocation()

  // Track page changes
  useEffect(() => {
      setShowExitPrompt(false)
  }, [pathname])

  // Track page unmounts
  window.onload = function() {
    initBeforeUnLoad(showExitPrompt);
  };

  useEffect(() => {
    initBeforeUnLoad(showExitPrompt);
  }, [showExitPrompt]);

  return [showExitPrompt, setShowExitPrompt];
}