import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import useForm from "../../context/FormContext/FormContext.js";

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
  const { setEditSelection, setSearchSelection } = useForm()

  // Track page changes
  useEffect(() => {
    setShowExitPrompt(false)
    setSearchSelection(null)
  }, [pathname])

  // Track page unmounts
  window.onload = function () {
    initBeforeUnLoad(showExitPrompt);
  };

  useEffect(() => {
    initBeforeUnLoad(showExitPrompt);
  }, [showExitPrompt]);

  return [showExitPrompt, setShowExitPrompt];
}