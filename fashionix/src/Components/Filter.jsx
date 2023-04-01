import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Accordion,
  AccordionItem,
  Box,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  Tooltip,
  SliderThumb,
  Flex,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const Filter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sliderValue, setSliderValue] = React.useState(5);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const btnRef = React.useRef();
  const sizes = "sm";
  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="white"
        onClick={onOpen}
        textColor="black"
        border={"1px solid gray"}
        borderRadius={"none"}
      >
        Filter
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={sizes}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody mt={5} pt={5}>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      PRICE
                    </Box>
                    <AddIcon boxSize={3} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={7}>
                  <Slider aria-label="slider-ex-1" defaultValue={30}>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      SIZE
                    </Box>
                    <AddIcon boxSize={3} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex justifyContent={"space-between"} pb={4}>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      XXL
                    </Button>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      XL
                    </Button>
                  </Flex>
                  <Flex justifyContent={"space-between"} pb={4}>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      L
                    </Button>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      M
                    </Button>
                  </Flex>
                  <Flex justifyContent={"space-between"} pb={4}>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      S
                    </Button>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      TYPE OF PRODUCT
                    </Box>
                    <AddIcon boxSize={3} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex justifyContent={"space-between"} pb={4}>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      JACKETS
                    </Button>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      T-SHIRT
                    </Button>
                  </Flex>
                  <Flex justifyContent={"space-between"} pb={4}>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      SHIRTS
                    </Button>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      BERMUDA SHORTS
                    </Button>
                  </Flex>
                  <Flex justifyContent={"space-between"} pb={4}>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      BLAZERS
                    </Button>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      CARGO
                    </Button>
                  </Flex>
                  <Flex justifyContent={"space-between"} pb={4}>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      JOGGING TROUSERS
                    </Button>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      OVERSHIRT
                    </Button>
                  </Flex>
                  <Flex justifyContent={"space-between"} pb={4}>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      SUITS
                    </Button>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      TROUSERS
                    </Button>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      COLOUR
                    </Box>
                    <AddIcon boxSize={3} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex justifyContent={"space-between"} pb={4}>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      BEIGE
                    </Button>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      BLACK
                    </Button>
                  </Flex>
                  <Flex justifyContent={"space-between"} pb={4}>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      BLUE
                    </Button>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      BROWN
                    </Button>
                  </Flex>
                  <Flex justifyContent={"space-between"} pb={4}>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      GREEN
                    </Button>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      GREY
                    </Button>
                  </Flex>
                  <Flex justifyContent={"space-between"} pb={4}>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      MAGENTA
                    </Button>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      NEON
                    </Button>
                  </Flex>
                  <Flex justifyContent={"space-between"} pb={4}>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      ORANGE
                    </Button>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      PINK
                    </Button>
                  </Flex>
                  <Flex justifyContent={"space-between"} pb={4}>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      PRINTED
                    </Button>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      WHITE
                    </Button>
                  </Flex>
                  <Flex justifyContent={"space-between"} pb={4}>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      YELLOW
                    </Button>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      PRINTED
                    </Box>
                    <AddIcon boxSize={3} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex justifyContent={"space-between"} pb={4}>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      CHECKED
                    </Button>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      PLAIN
                    </Button>
                  </Flex>
                  <Flex justifyContent={"space-between"} pb={4}>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      STRIPED
                    </Button>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      PRINTED
                    </Button>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      MATERIALS
                    </Box>
                    <AddIcon boxSize={3} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex justifyContent={"space-between"} pb={4}>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      KNITWEAR
                    </Button>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      LINEN
                    </Button>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      FIT
                    </Box>
                    <AddIcon boxSize={3} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex justifyContent={"space-between"} pb={4}>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      REGULAR FIT
                    </Button>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      RELAXED FIT
                    </Button>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      TYPE OF SLEEVE
                    </Box>
                    <AddIcon boxSize={3} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex justifyContent={"space-between"} pb={4}>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      LONG SLEEVES
                    </Button>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                      border={"none"}
                      fontWeight={"normal"}
                      fontSize={"xs"}
                    >
                      SHORT SLEEVES
                    </Button>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Filter;
