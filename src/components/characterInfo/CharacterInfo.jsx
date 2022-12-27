import React, { useState } from "react";
import styled from "styled-components";

const CharacterInfo = ({
  setIsOpenCharacterModal,
  setCharToChoose,
  characterToShow,
  charNumber,
}) => {
  const handleChooseChar = (charNumber) => {
    setIsOpenCharacterModal(true);
    setCharToChoose(charNumber);
  };

  return (
    <StyleCharacterInfoContainer>
      {!characterToShow ? (
        <div>
          <div className="backgroundContainer">
            <img src="./images/background.jpg" alt="" />
          </div>
          <div className="profil-image">
            <img
              src="https://elcomercio.pe/resizer/1Jof6GG7D5ikDvmymCn10G7TGZI=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/KRKOINCP7JGR7KWT4HNBDSJPDA.jpg"
              alt=""
            />
          </div>
          {<h3>Rick Sanchez</h3>}
          <div className="data-container">
            <div className="status">
              <p>unknow</p>
            </div>
            <div>
              <div>
                <h4>Planeta</h4>
                <p>Tierra</p>
              </div>
              <div>
                <h4>Raza</h4>
                <p>Humano</p>
              </div>
            </div>
          </div>
          <button onClick={() => handleChooseChar(charNumber)}>
            Elegir Personaje {charNumber}
          </button>
        </div>
      ) : (
        <div>
          <div className="backgroundContainer">
            <img src="./images/background.jpg" alt="Rick and morty image" />
          </div>
          <div className="profil-image">
            <img src={characterToShow.image} alt={characterToShow.name} />
          </div>
          <h3>{characterToShow.name}</h3>
          <div className="data-container">
            <div className="status">
              <p>{characterToShow.status}</p>
            </div>

            <div>
              <h4>Planeta</h4>
              <p>{characterToShow.location.name}</p>
            </div>
            <div>
              <h4>Raza</h4>
              <p>{characterToShow.species}</p>
            </div>
          </div>
          <button onClick={() => handleChooseChar(charNumber)}>
            Elegir Personaje {charNumber}
          </button>
        </div>
      )}
    </StyleCharacterInfoContainer>
  );
};

export default CharacterInfo;

const StyleCharacterInfoContainer = styled.div`
  padding-bottom: 3rem;
  width: 90%;
  max-width: 400px;
  text-align: center;
  border-radius: 15px;
  position: relative;
  background-color: white;

  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  @media screen and (max-width: 700px) {
    padding-bottom: 1rem;
  }

  .backgroundContainer {
    border-radius: 15px;
    overflow: hidden;
  }

  h3 {
    margin-top: 4rem;
    text-transform: uppercase;

    @media screen and (max-width: 700px) {
      margin-top: 2rem;
    }
  }

  .data-container {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;

    h4 {
      font-size: 1.4rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  .profil-image {
    width: 130px;
    height: 130px;
    border: 5px solid white;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    top: 23%;
    left: 33%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media screen and (max-width: 400px) {
      left: 28%;
    }
  }

  .status {
    display: grid;
    place-content: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    color: white;
    text-transform: uppercase;

    background: #ff416c;
    background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
    background: linear-gradient(to right, #ff4b2b, #ff416c);

    p {
      font-size: 0.8rem;
    }

    @media screen and (max-width: 700px) {
      position: absolute;
      top: 10px;
      left: 10px;
    }
  }

  button {
    margin: auto;
    padding: 0.5rem;
    background-color: transparent;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 0.8rem;
    cursor: pointer;

    background: #f85032;
    background: -webkit-linear-gradient(to right, #e73827, #f85032);
    background: linear-gradient(to right, #e73827, #f85032);

    @media screen and (max-width: 700px) {
      position: absolute;
      top: 30px;
      right: 10px;
    }
  }

  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
  }
`;
