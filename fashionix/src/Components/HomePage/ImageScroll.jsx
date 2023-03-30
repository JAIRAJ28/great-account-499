import styled from 'styled-components';
import { useState, useEffect } from 'react';
import img11 from "./assets/Images/11.webp";
import img12 from "./assets/Images/12.webp";
import img13 from "./assets/Images/13.webp";
import img14 from "./assets/Images/14.webp";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width:400px;
  margin:auto;
  height:500px;
  border:3px solid black;
  overflow: hidden;
  padding:20px;
  `;

const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap:30px;
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

const Photos = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover;
`;

const ImageScroll = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [img11, img12, img13, img14, "https://static.zara.net/photos///2023/V/0/2/p/8211/309/481/2/w/1016/8211309481_2_1_1.jpg?ts=1677836234631", "https://static.zara.net/photos///2023/V/0/1/p/9598/049/712/2/w/1016/9598049712_15_1_1.jpg?ts=1679654110428", "https://static.zara.net/photos///2023/V/0/1/p/2813/710/800/4/w/1016/2813710800_2_4_1.jpg?ts=1679669648045"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((currentImage) =>
                currentImage === images.length - 1 ? 0 : currentImage + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <Container>
            <PhotoWrapper style={{ transform: `translateY(-${currentImage * 100}%)` }}>
                {images.map((image) => (
                    <Photos key={image} src={image} />
                ))}
            </PhotoWrapper>
        </Container>
    );
};

export default ImageScroll;
