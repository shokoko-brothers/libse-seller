import { memo, useContext } from "react";
import hamburgerIcon from "../../../img/menu.svg";
import styled from "styled-components";
import { clearButtonStyles } from "../../Button/style";
import { ContentDirectionContext } from "../../../contexts/contentDirection";
import useTranslation from "../../../hooks/useTranslation";
import translations from "../../../translations/strings/header";

const SidebarToggler = ({ onClick }) => {
  const { contentDirection } = useContext(ContentDirectionContext);
  const { t } = useTranslation();

  return (
    <StyledSidebarToggler
      onClick={onClick}
      onMouseDown={(e) => e.preventDefault()}
      contentDirection={contentDirection}
    >
      <HamburgerIcon
        className="sidebar__hamburgerIcon"
        src={hamburgerIcon}
        alt={t(translations, "toggleSidebar")}
      />
    </StyledSidebarToggler>
  );
};

export const StyledSidebarToggler = styled.button`
  ${clearButtonStyles}
  height: 3rem;
  padding: 0 1em;
  margin-right: ${(props) =>
    props.contentDirection === "ltr" ? ".5em" : "-1.05em"};
  margin-left: ${(props) =>
    props.contentDirection === "ltr" ? "-1.05em" : ".5em"};

  &:hover,
  &:focus {
    .sidebar__hamburgerIcon {
      opacity: 0.6;
    }
  }

  &:focus {
    outline-color: #fff;
  }
`;

export const HamburgerIcon = styled.img`
  width: 1.2em;
  transition: opacity 0.1s;
`;

export default memo(SidebarToggler);
