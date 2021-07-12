import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const withAutoClose = (Component) => props => {
  const params = useParams();
  const [showElem, setShowElem] = useState(false);

  // Close the menu when the page changes
  useEffect(() => {
    setShowElem(false);
  }, [params])

  // CLICKS OUTSIDE: https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

  const toggleElem = (manualToggle = null) => {
    setShowElem((prevState) => (
      manualToggle === null ? !prevState : manualToggle
    ));
  };

  return <Component toggleElem={toggleElem} showElem={showElem} />;
}

export default withAutoClose;
