import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import styles from "./Checkout.module.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
let cartProduct = [
  {
    id: 1,
    type: "jackets",
    category: "mens",
    "name href":
      "https://www.zara.com/in/en/basic-bomber-jacket-p04302408.html",
    image:
      "https://static.zara.net/photos///2023/V/0/1/p/4302/408/800/2/w/382/4302408800_2_1_1.jpg?ts=1669650630859",
    image2:
      "https://static.zara.net/photos///2023/V/0/1/p/4302/408/800/2/w/382/4302408800_2_1_1.jpg?ts=1669650630859",
    name: "BASIC BOMBER JACKET",
    color: 2,
    price: 2990,
  },
  {
    id: 2,
    type: "jackets",
    category: "mens",
    "name href":
      "https://www.zara.com/in/en/water-repellent-technical-jacket-p01538303.html",
    image:
      "https://static.zara.net/photos///2023/V/0/2/p/1538/303/800/2/w/382/1538303800_2_1_1.jpg?ts=1676881489770",
    image2:
      "https://static.zara.net/photos///2023/V/0/2/p/1538/303/800/2/w/382/1538303800_2_1_1.jpg?ts=1676881489770",
    name: "WATER-REPELLENT TECHNICAL JACKET",
    color: 3,
    price: 4990,
  },
  {
    id: 3,
    category: "mens",
    type: "jackets",
    "name href":
      "https://www.zara.com/in/en/faux-suede-bomber-jacket-p08574333.html",
    image:
      "https://static.zara.net/photos///2023/V/0/2/p/8574/333/732/2/w/382/8574333732_2_1_1.jpg?ts=1678438191969",
    image2:
      "https://static.zara.net/photos///2023/V/0/2/p/8574/333/732/2/w/382/8574333732_2_1_1.jpg?ts=1678438191969",
    name: "FAUX SUEDE BOMBER JACKET",
    color: 2,
    price: 4990,
  },
];

const CartandCheckout = () => {
  console.log(cartProduct, "cart");

  const [cartProd, setCartProd] = useState(cartProduct);
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openCard, setOpenCard] = React.useState(false);

  const [success, setSuccess] = React.useState(false);

  const subTotal = 0;
  const cartCount = 0;

  const navigate = useNavigate();
  let subtotal = 0;
  for (let i = 0; i < cartProd.length; i++) {
    let amount = +cartProd[i].price;
    console.log(amount);
    subtotal = Math.round(subtotal + amount);
  }

  let disAmount = 0;
  if (subtotal > 2000) {
    disAmount = Math.round((10 / 100) * subtotal);
  }

  let prodDiscount = 0;
  for (let i = 0; i < cartProd.length; i++) {
    let amount = +cartProd[i].strike_price - +cartProd[i].price;
    console.log(amount);
    prodDiscount = Math.round(prodDiscount + amount);
  }
  let total = subtotal - disAmount;

  let deliveryAmt = 50;
  if (subtotal > 1000) {
    deliveryAmt = "FREE";
  }

  function handleClick(id) {
    let deletedArray = cartProd.filter((elem) => elem.id !== id);
    setCartProd(deletedArray);
    localStorage.setItem("cartItem", JSON.stringify(deletedArray));
  }
  if (cartProduct.length === 0) {
    return (
      <Box>
        <center>
          <Box>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxMzZSinllmTl-vLPJoxaqR69Lj9W8nCzRw&usqp=CAU" />
          </Box>
          <Box>
            <Text as="b" color="red">
              YOUR CART IS EMPTY
            </Text>
          </Box>
          <Box color="blue" textDecoration={"underline"}>
            <Link to="/products">Continue Shopping</Link>
          </Box>
        </center>
      </Box>
    );
  }
  return (
    <Box mt={"130"}>
      <Flex w={"95%"} m={" auto"} justify="space-between">
        <Box width="70%" mt={"130"}>
          {cartProd.map((el) => {
            return (
              <Flex h={"250px"} m={"10px auto"} p={8} justify="space-between">
                <Box w="18%">
                  <Image src={el.image} h="100%" w="100%" />
                </Box>
                <Box w="50%" textAlign={"left"}>
                  <Text color="gray">{el.name}</Text>
                  <Text as="b" fontSize={"sm"}>
                    {el.type.toUpperCase()}
                  </Text>
                  <Text color="gray">{el.category}</Text>
                  <Text as="b">Rs. {el.price}</Text>
                  <br />
                  <Box mt={2}>
                    <DeleteIcon
                      onClick={() => handleClick(el.id)}
                      color="red"
                      fontSize={"20px"}
                    />
                  </Box>
                </Box>
                <Box w="25%" textAlign={"left"} mt={8}>
                  <Text>Delivery within 5-7 days</Text>
                </Box>
              </Flex>
            );
          })}
        </Box>
        <Box width="28%" mt={"130"}>
          <Box bg="#F2F2F2" pb={5} pt={1} my={4}>
            <Text
              fontSize={"xl"}
              mt={3}
              mb={3}
              textAlign="left"
              ml="10px"
              fontWeight={"bold"}
            >
              Price Break-up
            </Text>
            <Flex justify={"space-between"} px={"3"} py={2}>
              <Box>
                <Text>Subtotal</Text>
              </Box>
              <Box color="black">Rs. {subtotal}</Box>
            </Flex>
            <Flex justify={"space-between"} px={"3"} py={2}>
              <Box>
                <Text>No. of product(s)</Text>
              </Box>
              <Box>{cartProduct.length}</Box>
            </Flex>
            <Flex justify={"space-between"} px={"3"} py={2}>
              <Box>
                <Text color="pink">
                  {subtotal > 2000 ? "Discount (10%)" : "Discount"}
                </Text>
              </Box>
              <Box>Rs. {disAmount}</Box>
            </Flex>
            <Flex justify={"space-between"} px={"3"} py={2}>
              <Box>
                <Text>Delivery</Text>
              </Box>
              <Box color="green">{deliveryAmt}</Box>
            </Flex>
            <hr />
            <Flex justify={"space-between"} px={"3"} py={2}>
              <Box>
                <Text as="b">TOTAL</Text>
              </Box>
              <Box color="black">Rs. {total}</Box>
            </Flex>
            <center>
              <Text color="blue" fontSize={"sm"}>
                Free Delivery on shopping above ₹ 1000 & 10% discount on order
                above Rs.2000
              </Text>
            </center>
          </Box>

          <div className={styles.container}>
            <div className={styles.infoContainer}>
              <div className={styles.details}>
                <div
                  className={styles.card}
                  style={{ border: openAdd ? "2px solid #ee4a1b" : "" }}
                  onClick={() => setOpenAdd(!openAdd)}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiNFRTRBMUIiIGN4PSI5IiBjeT0iOSIgcj0iOSIvPjxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTEzIDkuNjRIOS44M1YxM0g4LjE1NFY5LjY0SDVWOC4xNTZoMy4xNTNWNUg5LjgzdjMuMTU2SDEzeiIvPjwvZz48L3N2Zz4K "
                    alt=""
                  />
                  <p>Add Shipping Address</p>

                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIzLjk2NjM5NiAxMi4xMjYyNDJjLjAzMDQ2MS4xOTc3MjYtLjAzMDQ2LjQwNjgwOS0uMTgyNzY1LjU1OTExM2wtNS4zNzQwMTIgNS4zNzQwMTJjLS4yNTM4NC4yNTM4NC0uNjY1Mzk4LjI1Mzg0LS45MTkyMzggMC0uMjUzODQxLS4yNTM4NC0uMjUzODQxLS42NjUzOTggMC0uOTE5MjM5TDIyLjUwNiAxMi4xMjVsLTUuMDE1NjItNS4wMTUzOGMtLjI1Mzg0LS4yNTM4NDEtLjI1Mzg0LS42NjUzOTkgMC0uOTE5MjQuMjUzODQxLS4yNTM4NC42NjUzOTktLjI1Mzg0LjkxOTI0IDBsNS4zNzQwMSA1LjM3NDAxMmMuMTUyMzA1LjE1MjMwNS4yMTMyMjcuMzYxMzg3LjE4Mjc2Ni41NTkxMTR6IiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4="
                    alt=""
                  />
                </div>
                {openAdd ? (
                  <div className={styles.detailsInput}>
                    <input type="text" placeholder="Full Name" required />
                    <textarea
                      cols="30"
                      rows="10"
                      placeholder="Address"
                      required
                    />
                    <input type="text" placeholder="City" required />
                    <input type="text" placeholder="State" required />
                    <input type="text" placeholder="Country" required />
                    <input type="tel" placeholder="Mobile Number" required />
                  </div>
                ) : (
                  <></>
                )}
                <div
                  className={styles.card}
                  onClick={() => {
                    alert("Your order placed successfully");
                    navigate("/");
                  }}
                  style={{ border: openAdd ? "2px solid #ee4a1b" : "" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiNFRTRBMUIiIGN4PSI5IiBjeT0iOSIgcj0iOSIvPjxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTEzIDkuNjRIOS44M1YxM0g4LjE1NFY5LjY0SDVWOC4xNTZoMy4xNTNWNUg5LjgzdjMuMTU2SDEzeiIvPjwvZz48L3N2Zz4K "
                    alt=""
                  />
                  <p>Choose COD</p>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIzLjk2NjM5NiAxMi4xMjYyNDJjLjAzMDQ2MS4xOTc3MjYtLjAzMDQ2LjQwNjgwOS0uMTgyNzY1LjU1OTExM2wtNS4zNzQwMTIgNS4zNzQwMTJjLS4yNTM4NC4yNTM4NC0uNjY1Mzk4LjI1Mzg0LS45MTkyMzggMC0uMjUzODQxLS4yNTM4NC0uMjUzODQxLS42NjUzOTggMC0uOTE5MjM5TDIyLjUwNiAxMi4xMjVsLTUuMDE1NjItNS4wMTUzOGMtLjI1Mzg0LS4yNTM4NDEtLjI1Mzg0LS42NjUzOTkgMC0uOTE5MjQuMjUzODQxLS4yNTM4NC42NjUzOTktLjI1Mzg0LjkxOTI0IDBsNS4zNzQwMSA1LjM3NDAxMmMuMTUyMzA1LjE1MjMwNS4yMTMyMjcuMzYxMzg3LjE4Mjc2Ni41NTkxMTR6IiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4="
                    alt=""
                  />
                </div>
                <div
                  className={styles.card}
                  onClick={() => setOpenCard(!openCard)}
                  style={{ border: openAdd ? "2px solid #ee4a1b" : "" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiNFRTRBMUIiIGN4PSI5IiBjeT0iOSIgcj0iOSIvPjxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTEzIDkuNjRIOS44M1YxM0g4LjE1NFY5LjY0SDVWOC4xNTZoMy4xNTNWNUg5LjgzdjMuMTU2SDEzeiIvPjwvZz48L3N2Zz4K "
                    alt=""
                  />
                  <p>Add Card Details</p>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIzLjk2NjM5NiAxMi4xMjYyNDJjLjAzMDQ2MS4xOTc3MjYtLjAzMDQ2LjQwNjgwOS0uMTgyNzY1LjU1OTExM2wtNS4zNzQwMTIgNS4zNzQwMTJjLS4yNTM4NC4yNTM4NC0uNjY1Mzk4LjI1Mzg0LS45MTkyMzggMC0uMjUzODQxLS4yNTM4NC0uMjUzODQxLS42NjUzOTggMC0uOTE5MjM5TDIyLjUwNiAxMi4xMjVsLTUuMDE1NjItNS4wMTUzOGMtLjI1Mzg0LS4yNTM4NDEtLjI1Mzg0LS42NjUzOTkgMC0uOTE5MjQuMjUzODQxLS4yNTM4NC42NjUzOTktLjI1Mzg0LjkxOTI0IDBsNS4zNzQwMSA1LjM3NDAxMmMuMTUyMzA1LjE1MjMwNS4yMTMyMjcuMzYxMzg3LjE4Mjc2Ni41NTkxMTR6IiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4="
                    alt=""
                  />
                </div>

                {openCard ? (
                  <div className={styles.detailsInput}>
                    <input
                      type="text"
                      placeholder="Card Number"
                      pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
                      className={styles.cardNum}
                      required
                    />
                    <input type="text" placeholder="Name on Card" />
                    <div className={styles.dateDetails}>
                      <input
                        type="text"
                        placeholder="Month"
                        className={styles.month}
                        min="1"
                        max="12"
                        size="2"
                        maxlength="2"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Year"
                        className={styles.year}
                        min="2000"
                        max="2050"
                        size="4"
                        maxlength="4"
                        required
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        className={styles.cvv}
                        size="3"
                        maxlength="3"
                        required
                      />
                    </div>
                    <button
                      className={styles.btn}
                      onClick={() => {
                        alert("Your order placed successfully");
                        navigate("/");
                      }}
                    >
                      Place Order
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </Box>
      </Flex>
    </Box>
  );
};

export default CartandCheckout;
