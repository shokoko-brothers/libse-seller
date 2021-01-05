import { memo, useContext } from "react";
import styled from "styled-components";
import { LocaleContext } from "../../../contexts/locale";
import { listStyles } from "../../List/style";

const Details = ({ details }) => {
  const { locale } = useContext(LocaleContext);

  return (
    <StyledDetails>
      {details.map((detail, index) => (
        <Detail key={index}>
          {detail[`name_${locale}`]}: {detail[`value_${locale}`]}
        </Detail>
      ))}
    </StyledDetails>
  );
};

const StyledDetails = styled.ul`
  padding-left: 0;
  list-style-position: inside;
`;

const Detail = styled.li`
  margin: 0.2em 0;
`;

export default memo(Details);
