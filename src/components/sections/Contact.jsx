import React from "react";
import styled from "styled-components";

// Main Container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 4rem 2rem;
`;

// Wrapper for entire section (title + card + 3D)
const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
`;

// Title + Description
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// Contact Card styled like form
const ContactCard = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;
`;

// Title inside card
const ContactCardTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 12px;
`;

// Email Link styled
const EmailLink = styled.a`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  word-break: break-all;

  &:hover {
    text-decoration: underline;
  }
`;

// Flex container for card and 3D
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SplineWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  height: 390px; /* reduced from 500px */
  overflow: hidden;
  border-radius: 12px;
  position: relative;

  iframe {
    position: absolute;
    top: -50px; /* adjusted from -80px */
    left: -10%;
    width: 120%;
    height: 500px; /* reduced from 700px */
    transform-origin: top center;
    border: none;
  }

  @media (max-width: 960px) {
    height: 300px; /* reduced from 400px */
    iframe {
      top: -40px; /* adjusted from -60px */
      height: 450px; /* reduced from 600px */
      width: 120%;
      left: -10%;
      transform: scale(1); /* removed extra scaling */
    }
  }
`;


const Contact = () => {
  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <FlexBox>
          <ContactCard>
            <ContactCardTitle>Email Me 🚀</ContactCardTitle>
            <EmailLink href="mailto:beherapriyabrata16@gmail.com">
              beherapriyabrata16@gmail.com
            </EmailLink>
          </ContactCard>
          <SplineWrapper>
            <iframe
              src="https://my.spline.design/nexbotrobotcharacterconcept-oT7Jv15aUOiO6vsD47soJVd4/"
              title="3D Robot"
              frameBorder="0"
              allowFullScreen
            />
          </SplineWrapper>
        </FlexBox>
      </Wrapper>
    </Container>
  );
};

export default Contact;
