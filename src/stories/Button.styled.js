import styled from "@emotion/styled"

export const StyledButton = styled.button`
  background-color: black;
  color: white;

  padding: 1em 1.5em;

  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  cursor: pointer;
  border: none;
  border-radius: 8px;
  transition: all 0.45s ease;

  &:hover {
    letter-spacing: 1em;
  }
`
