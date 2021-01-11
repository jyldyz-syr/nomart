import image1 from "../../img/nomart3.png";
import image2 from "../../img/nomart4.png";
import image3 from "../../img/nomart5.png";

import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Row,
  Col,
} from "reactstrap";

const items = [
  {
    src: image1,
    altText: "Slide 1",
    title: "Be Smart With Gadget",
    caption: "Zhyldyz lorem ipsums",
  },
  {
    src: image2,
    altText: "Slide 2",
    title: "Be Smart With Gadget",
    caption: "Zhyldyz lorem ipsums",
  },
  {
    src: image3,
    altText: "Slide 3",
    title: "Be Smart With Gadget",
    caption: "Zhyldyz lorem ipsums",
  },
];

const HeroBlock = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{ width: "100%" }} />
        {/* <CarouselCaption captionText={item.caption} captionHeader={item.title}  /> */}
      </CarouselItem>
    );
  });

  return (
    <Container fluid={true}>
      <Row>
        <Col xs="12" lg="12">
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroBlock;
