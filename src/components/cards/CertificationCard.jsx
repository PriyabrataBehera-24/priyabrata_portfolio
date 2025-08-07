import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 340px;
  height: 410px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  object-fit: cover;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0px 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Organization = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 80};
`;

const Date = styled.div`
  font-size: 14px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 60};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

// const Description = styled.div`
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 99};
//   overflow: hidden;
//   margin-top: 8px;
//   display: -webkit-box;
//   max-width: 100%;
//   -webkit-line-clamp: 3;
//   -webkit-box-orient: vertical;
//   text-overflow: ellipsis;
// `;

const Button = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  margin-top: auto;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 6px;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

const CertificationCard = ({ certification }) => {
  return (
    <Card>
      <Image src={certification.image} alt={certification.title} />
      <Details>
        <Title>{certification.title}</Title>
        <Organization>{certification.organization}</Organization>
        <Date>{certification.date}</Date>
        {/* <Description>{certification.description}</Description> */}
      </Details>
      <Button href={certification.credential} target="_blank" rel="noopener noreferrer">
        View Credential
      </Button>
    </Card>
  );
};

export default CertificationCard;
