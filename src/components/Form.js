import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  FormLabel,
  Button,
  Textarea,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useState } from "react";

const Form = ({ isOpen, onClose }) => {
  const [contactRequest, setContactRequest] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setContactRequest(true);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>You can send a message</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {!contactRequest ? (
            <form onSubmit={handleFormSubmit}>
              <FormControl id="first-name" mb={4} isRequired>
                <FormLabel>First name</FormLabel>
                <Input placeholder="Joe" required />
              </FormControl>
              <FormControl id="name" mb={4} isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Doe" required />
              </FormControl>
              <FormControl id="email" mb={4} isRequired>
                <FormLabel>Your email</FormLabel>
                <Input type="email" placeholder="joe@doe.com" />
              </FormControl>
              <FormControl id="message" mb={4} isRequired>
                <FormLabel>Your message</FormLabel>
                <Textarea placeholder="Your message" />
              </FormControl>

              <Button type="submit" mb={4}>
                Submit
              </Button>
            </form>
          ) : (
            <Alert status="success" mb={4}>
              <AlertIcon />
              Thank you for your message !
            </Alert>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Form;
