import React from "react";
import styled from "styled-components";

const Card = ({
  char,
  setCharacterOne,
  setCharacterTwo,
  charToChoose,
  setIsOpenCharacterModal,
}) => {
  const { name, image } = char;

  const handleClick = (char, charToChoose) => {
    charToChoose === 1 ? setCharacterOne(char) : setCharacterTwo(char);
    setIsOpenCharacterModal(false);
  };

  return (
    <StyleCard onClick={() => handleClick(char, charToChoose)}>
      <img src={image} alt={name} />
    </StyleCard>
  );
};

export default Card;

const StyleCard = styled.div`
  width: 100px;
  height: 100px;
  transition: all linear 0.3s;

  @media screen and (max-width: 700px) {
    width: 100px;
    height: 100px;
  }

  @media screen and (max-width: 540px) {
    width: 70px;
    height: 70px;
  }

  @media screen and (max-width: 450px) {
    width: 50px;
    height: 50px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 1px 5px 15px black;
  }

  &:hover {
    transform: scale(1.15);
  }
`;
