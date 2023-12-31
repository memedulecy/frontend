import { styled } from "styled-components";
import { Link } from "react-router-dom";

export default function CreationButton() {
  return (
    <Link to="/create">
      <StyledCreationButton
        src={`${process.env.PUBLIC_URL}/assets/images/plus-button.png`}
        alt="creation-button"
      />
    </Link>
  );
}

const StyledCreationButton = styled.img`
  position: absolute;
  width: 52px;
  height: 52px;
  bottom: 5%;
  right: 10%;
`;
