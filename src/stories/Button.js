import React from "react"
import { StyledButton } from "./Button.styled"

/**
 * Primary UI component for user interaction
 */
export const Button = ({ children, ...props }) => {
  return (
    <StyledButton type="button" {...props}>
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  as: "x-button",
}
