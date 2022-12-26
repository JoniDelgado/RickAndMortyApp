import React, { useState } from "react";
import styled from "styled-components";

const Card = ({ char, setCharacterOne, setCharacterTwo, charNumber }) => {
  const { name, image } = char;

  const handleClick = (char, charNumber) => {
    charNumber === 1 ? setCharacterOne(char) : setCharacterTwo(char);
  };

  return (
    <StyleCard onClick={() => handleClick(char, charNumber)}>
      <img src={image} alt={name} />
    </StyleCard>
  );
};

export default Card;

const StyleCard = styled.div`
  width: 100px;
  height: 100px;
  transition: all linear 0.3s;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 1px 5px 15px black;
  }

  &:hover {
    transform: scale(1.15);
  }
`;
