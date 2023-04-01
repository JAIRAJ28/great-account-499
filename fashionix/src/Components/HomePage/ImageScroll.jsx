import styled from 'styled-components';
import { useState, useEffect } from 'react';
import img11 from "./assets/Images/11.webp";
import img12 from "./assets/Images/12.webp";
import img13 from "./assets/Images/13.webp";
import img14 from "./assets/Images/14.webp";



const DIV = styled.div`
  
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  border: 3px solid black;
  overflow: hidden;
  padding: 20px;
`;



const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  animation: scroll 5s linear infinite;
  
  @keyframes scroll {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-60%);
    }
  }
`;
const Section2 = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;
  position: relative;
  display: flex;
  @media (max-width: 48em) {
    width: 90vw;
  }
  @media (max-width: 30em) {
    width: 100vw;
  }
  /* justify-content: center;
  align-items: center; */
`;
const Left = styled.div`
  width: 70%;
  font-size:20px;
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 12%;
   margin-right:100px;
  @media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;
    padding: 2rem;
    font-weight: 600;
    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 2rem;
    width: 70%;
  }
`;
const Title = styled.h1`
  font-size:50px;
  text-transform: capitalize;
  position: absolute;
  top: 1rem;
  left: 5%;
  margin-left:100px;
  z-index: 5;
  span {
    display: inline-block;
  }
  @media (max-width: 64em) {
    font-size:30px;
    top: 0;
    left: 0%;
  }
  @media (max-width: 48em) {
    font-size:30px;
    left:12%;
  }
`;

const Photos = styled.img`
  height: 400px;
  width: 100%;
  object-fit: cover;
`;

const ImageScroll = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [    img11,    img12,    img13,    img14,    "https://static.zara.net/photos///2023/V/0/2/p/8211/309/481/2/w/1016/8211309481_2_1_1.jpg?ts=1677836234631",    "https://static.zara.net/photos///2023/V/0/1/p/9598/049/712/2/w/1016/9598049712_15_1_1.jpg?ts=1679654110428",    "https://static.zara.net/photos///2023/V/0/1/p/2813/710/800/4/w/1016/2813710800_2_4_1.jpg?ts=1679669648045"  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(currentImage =>
        currentImage === images.length - 1 ? 0 : currentImage + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ display: "flex",paddingLeft:"100px",paddingRight:"100px",marginTop:"70px",marginBottom:"-400px"}}>
    <Section2 id="fixed-target" className="about">
    <Title
      data-scroll
      data-scroll-speed="-2"
      data-scroll-direction="horizontal"
    >
      New Arrivals
    </Title>
    <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
    There is new collection available for cool clothes in all sizes. This collection
    is a great way to find a new look for you. It offers a variety of cool apparel
    styles to fit your taste, while you can also find some cool clothes that you can
    wear everyday.
    <br />
    <br />
    The first line of clothing you will see on this collection is for men. The
    collection also includes three new styles for women.
    <br />
    <br />
    Give it a try and experience a new look.
    </Left>
   </Section2>

      <Container>
        <PhotoWrapper style={{ transform: `translateY(-${currentImage * 100}%)` }}>
          {images.map(image => (
            <Photos key={image} src={image} />
          ))}
        </PhotoWrapper>
      </Container>
    </div>
  );
};

export default ImageScroll;
