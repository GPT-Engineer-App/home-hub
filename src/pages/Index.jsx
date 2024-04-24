// Real Estate Acquisition Form
import { Box, Container, FormControl, FormLabel, Input, Button, Heading, Text, useToast } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      propertyAddress: formData.get("propertyAddress"),
    };

    // Simulate sending data to a server
    console.log("Form Data Submitted:", data);
    toast({
      title: "Submission Successful",
      description: "We've received your information and will get in touch soon!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Reset form after submission
    event.target.reset();
  };

  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" mb={6} textAlign="center">
        Property Submission Form
      </Heading>
      <Text fontSize="lg" mb={6}>
        If you have a property you're looking to sell, please enter your contact information below and we will get in touch with you shortly.
      </Text>
      <Box as="form" onSubmit={handleSubmit}>
        <FormControl isRequired mb={4}>
          <FormLabel htmlFor="name">Full Name</FormLabel>
          <Input id="name" name="name" placeholder="John Doe" />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input id="email" name="email" type="email" placeholder="john.doe@example.com" />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel htmlFor="phone">Phone Number</FormLabel>
          <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" />
        </FormControl>
        <FormControl isRequired mb={6}>
          <FormLabel htmlFor="propertyAddress">Property Address</FormLabel>
          <Input id="propertyAddress" name="propertyAddress" placeholder="1234 Main St, Anytown, State, 12345" />
        </FormControl>
        <Button leftIcon={<FaPaperPlane />} colorScheme="blue" type="submit" w="full">
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Index;
