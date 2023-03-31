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
                      Price
                    </Box>
                    <AddIcon boxSize={3} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={7}>
                  <Slider
                    id="slider"
                    defaultValue={5}
                    min={0}
                    max={100}
                    colorScheme="teal"
                    onChange={(v) => setSliderValue(v)}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                  >
                    <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
                      25%
                    </SliderMark>
                    <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
                      50%
                    </SliderMark>
                    <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
                      75%
                    </SliderMark>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    {/* <Tooltip
                      hasArrow
                      bg="teal.500"
                      color="white"
                      placement="top"
                      isOpen={showTooltip}
                      label={`${sliderValue}%`}
                    >
                      <SliderThumb />
                    </Tooltip> */}
                  </Slider>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Size
                    </Box>
                    <AddIcon boxSize={3} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex justifyContent={"space-around"} pb={4}>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                    >
                      Black
                    </Button>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                    >
                      Gray
                    </Button>
                  </Flex>
                  <Flex justifyContent={"space-around"} pb={4}>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                    >
                      Black
                    </Button>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                    >
                      Gray
                    </Button>
                  </Flex>
                  <Flex justifyContent={"space-around"} pb={4}>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                    >
                      Black
                    </Button>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Type
                    </Box>
                    <AddIcon boxSize={3} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex justifyContent={"space-around"} pb={4}>
                    <Button colorScheme="gray" variant="outline">
                      Jacket
                    </Button>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      borderRadius={"none"}
                    >
                      T-shirt
                    </Button>
                  </Flex>
                  <Flex justifyContent={"space-around"} pb={4}>
                    <Button colorScheme="gray" variant="outline">
                      Shirt
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
