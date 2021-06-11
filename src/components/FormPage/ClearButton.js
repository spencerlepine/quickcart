import React from "react"
import Button from "@material-ui/core/Button";

const ClearButton = ({ handleClick, label, className }) => (
    <Button
      className={className}
      onClick={handleClick}
      color="secondary"
      fullWidth
      variant="contained"
    >
      {label}
    </Button>
  )

export default ClearButton