import styled, { css } from "styled-components";
import theme from "../../shared/theme";
import measurements from "../../shared/measurements";

export const inputStyles = css`
  font-size: 1rem;
  border: 1px solid ${theme.border.grey};
  padding: 0.7em 0.6em;
  border-radius: ${measurements.borderRadius.input};
`;

export const Input = styled.input`
  ${inputStyles}
  width: ${({ half }) => (half ? "calc(50% - .5em)" : "100%")};
  margin-bottom: 0.8em;

  &[data-tiny="true"] {
    margin-bottom: 0;
    margin-left: ${(props) =>
      props.contentDirection === "ltr" ? "1em" : "initial"};
    margin-right: ${(props) =>
      props.contentDirection === "rtl" ? "1em" : "initial"};
    width: 4em;
  }
`;

export const TextArea = styled.textarea`
  font-size: 1rem;
  border: 1px solid ${theme.border.grey};
  margin-bottom: 0.8em;
  padding: 0.7em 0.6em;
  width: 100%;
  border-radius: ${measurements.borderRadius.input};
`;
