import { Box, Button, Flex, Heading } from "@chakra-ui/react";
function PriceDetail() {
  return (
    <Flex
      flexDirection={"column"}
      boxShadow="xl"
      border="1px solid grey"
      borderRadius={"10px"}
      gap="3"
      padding={"5px"}
    >
      <Flex
        gap={"4"}
        flexDirection="column"
        padding={"10px"}
        border="0px solid red"
      >
        <Flex
          gap="50px"
          border="0px solid green"
          justifyContent="space-between"
        >
          <Heading
            as="p"
            fontSize={"18px"}
            fontWeight="500"
            fontFamily={"Inter"}
          >
            Total Price
          </Heading>
          <Heading
            as="p"
            fontSize={"16px"}
            fontWeight="500"
            fontFamily={"Inter"}
            justifyContent="flex-end"
          >
            ₹ 4098
          </Heading>
        </Flex>
        <Box border={"1px dashed #CECEDF"}></Box>
        <Flex gap="50px" border="0px solid blue" justifyContent="space-between">
          <Heading
            as="p"
            fontSize={"18px"}
            fontWeight="500"
            fontFamily={"Inter"}
          >
            Total After Discount
          </Heading>
          <Heading
            as="p"
            fontSize={"16px"}
            fontWeight="500"
            fontFamily={"Inter"}
            justifyContent="flex-end"
          >
            ₹ 2799
          </Heading>
        </Flex>
        <Box border={"1px dashed #CECEDF"}></Box>
        <Flex
          gap="50px"
          border="0px solid grey"
          justifyContent={"space-between"}
        >
          <Heading
            as="p"
            fontSize={"18px"}
            fontWeight="500"
            fontFamily={"Inter"}
          >
            Tax
          </Heading>
          <Heading
            as="p"
            fontSize={"16px"}
            fontWeight="500"
            fontFamily={"Inter"}
            justifyContent="flex-end"
            color="green.900"
          >
            ₹503.82
          </Heading>
        </Flex>
        <Box border={"1px dashed #CECEDF"}></Box>
        <Flex
          gap="50px"
          border="0px solid grey"
          justifyContent={"space-between"}
        >
          <Heading
            as="p"
            fontSize={"18px"}
            fontWeight="500"
            fontFamily={"Inter"}
          >
            Convenience Fees
          </Heading>
          <Heading
            as="p"
            fontSize={"18px"}
            fontWeight="500"
            fontFamily={"Inter"}
            justifyContent="flex-end"
            color="#0FBD95"
          >
            Free
          </Heading>
        </Flex>
        <Box border={"1px dashed #CECEDF"}></Box>
        <Flex
          gap="50px"
          border="0px solid grey"
          justifyContent={"space-between"}
        >
          <Heading
            as="p"
            fontSize={"18px"}
            fontWeight="600"
            fontFamily={"Inter"}
          >
            Total payable
          </Heading>
          <Heading
            as="p"
            fontSize={"16px"}
            fontWeight="600"
            fontFamily={"Inter"}
            justifyContent="flex-end"
          >
            ₹ 3302.82
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default PriceDetail;