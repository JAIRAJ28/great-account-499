import React, { Suspense, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import ImageScroll from './ImageScroll';
import img1 from "./assets/Images/1.webp";
import img2 from "./assets/Images/2.webp";
import img3 from "./assets/Images/3.webp";
import img04 from "./assets/Images/4.webp";
import img05 from "./assets/Images/5.webp";
import img06 from "./assets/Images/6.webp";
import img07 from "./assets/Images/7.webp";
import img08 from "./assets/Images/8.webp";
import img09 from "./assets/Images/9.webp";
import img010 from "./assets/Images/10.webp";
import { motion } from "framer-motion";

const CoverVideo = React.lazy(() => import('./CoverVideo'));
const Navbar = React.lazy(() => import('./Navbar'));



const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;
//Section-2 About-US
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
  width: 50%;
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
const Right = styled.div`
  width: 50%;
  position: relative;
  
  /* min-height: 100vh; */
  img {
    width: 100%;
    height: auto;
  }
  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    top: 30%;
  }
  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;
      position: absolute;
      left: 60%;
      bottom: 20%;
    }
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

//Section3
const Section3 = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  /* background-color: orange; */
`;

const Title3 = styled.h1`
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

const Left3 = styled.div`
  width: 50%;
  font-size:20px;
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 12%;
   margin-right:100px;
  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }
  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const CarouselContainer = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
  margin-top:30px
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

//Section-4 Text Animation
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  gap: 20px;
  margin-top:-300px;
    `;


const Banner = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  color: #333;
  animation-duration: 4s;
  animation-iteration-count: infinite;
`;
const moveRight = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const moveLeft = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;
const BannerRight = styled(Banner)`
  animation-name: ${moveRight};
  animation-timing-function: ease-in-out;
`;

const BannerLeft = styled(Banner)`
  animation-name: ${moveLeft};
  animation-timing-function: ease-in-out;
`;




const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img04, img05, img06, img07, img08, img09, img010, "https://static.zara.net/photos///2023/V/0/3/p/0061/580/250/203/w/1016/0061580250_1_1_1.jpg?ts=1679661068144", "https://static.zara.net/photos///2023/V/0/3/p/6061/643/251/202/w/1354/6061643251_1_1_1.jpg?ts=1679661807862", "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-dresses/subhome-xmedia-12//w/3200/IMAGE-landscape-fill-98d3f952-ac71-4167-84cb-9c8f473aea8c-default_0.jpg?ts=1679497898062", "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-shoes-bags/subhome-xmedia-12//w/3200/IMAGE-landscape-default-fill-ce49b3e7-f165-4b94-b66f-e2a6c02ce53a-default_0.jpg?ts=1679487177965", "https://static.zara.net/photos///2023/V/0/2/p/5584/463/250/32/w/1054/5584463250_15_1_1.jpg?ts=1679414433843", "https://static.zara.net/photos///2023/V/0/1/p/3332/403/400/33/w/1014/3332403400_15_1_1.jpg?ts=1679415850071"];



  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);



  return (
    <>
      <Section id="home">
        <Suspense fallback={<></>}>
          <Navbar />
          <CoverVideo />
        </Suspense>
      </Section>
      <Section2 id="fixed-target" className="about">
        <Title
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
        >
          About Us
        </Title>
        <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
          We&apos;re fashion studio based in california. We create unique designs
          that will blow your mind. We also design unique jwellery pieces.
          Fashion is an ART that can not be grasped by everyone.
          <br />
          <br />
          We are very dedicated to making our products. We offer unique and
          creative products to a wide range of people. We have a variety of
          styles, but for most people, all of the options are in the box. We
          specialize in making things that make you happy.
          <br />
          <br />
          We strive to build on our vision. As a fashion label, we do our best to
          create amazing experiences for all people. We are always looking to make
          something that is easy for everyone.
        </Left>

        <Right>
          <img width="400" height="600" src={img1} alt="About Us" />
          <img
            width="400"
            height="600"
            className="small-img-1"
            src={img2}
            alt="About Us"
            data-scroll
            data-scroll-speed="5"
          />
          <img
            width="400"
            height="600"
            className="small-img-2"
            src={img3}
            alt="About Us"
            data-scroll
            data-scroll-speed="-2"
          />
        </Right>
      </Section2>



      <Section3 id="shop">
        <Title3 data-scroll data-scroll-speed="-1">
          New Collection
        </Title3>
        <Left3>
          <p>
            The brand new collection is currently being developed in USA. We
            create our products using best quality material, including the use of
            some of the pure fabrics to make our products. All products are made
            using the best materials, from the finest cotton to the finest
            fabrics.
            <br /> <br />
            We have lots of different clothing options like shoes, jackets and
            dresses. Not only clothes but we also provide unique Jewellery as
            well. It is great for us to carry our new clothes all around the
            country and look different.
          </p>
        </Left3>
        <CarouselContainer>
          <CarouselImage src={images[currentImageIndex]} />

        </CarouselContainer>
      </Section3>

      <Container id="direction">
        <BannerRight>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#direction"
          >
            Fashion is an armour
          </span>
        </BannerRight>
        <BannerLeft data-scroll data-scroll-speed="-2" data-scroll-target="#direction">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#direction"
          >
            To survive everyday life
          </span>
        </BannerLeft>
        <BannerRight>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#direction"
          >
            One is never over-dressed or
          </span>
        </BannerRight>
        <BannerLeft>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#direction"
          >
            under-dressed
          </span>
        </BannerLeft>
        <BannerRight data-scroll data-scroll-speed="6" data-scroll-target="#direction">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#direction"
          >
            with a Little Black Dress.
          </span>
        </BannerRight>
      </Container>
    <ImageScroll/>
    </>
  );
};

export default Home;
