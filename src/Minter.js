//OK

import * as React from "react";
import "./index.css";
import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected, mintNFT } from "./util/interact.js";
import digitalWallet1 from "./images/digitalWallet1.png";
import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";
import { FormControl, Input, FormLabel } from "@chakra-ui/react";
import SlideFadeOnScroll from "../src/components/SlideFadeOnScroll";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";

const Minter = () => {
  //const CreateYourNFT = () => {
  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");

  useEffect(() => {
    async function fetchData() {
      const { address, status } = await getCurrentWalletConnected();
      setWallet(address);
      setStatus(status);

      addWalletListener();
    }
    fetchData();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a rel="noreferrer" target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your browser.
          </a>
        </p>
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => {
    const { success, status } = await mintNFT(url, name, description);
    setStatus(status);
    if (success) {
      setName("");
      setDescription("");
      setURL("");
    }
  };

  return (
    <>
      <Navigation />
      <Box as="section" w={"100%"} py={10}>
        <Container borderRadius="md" maxW="container.xl" py={20}>
          <SlideFadeOnScroll>
            <Heading
              mb={10}
              p={4}
              borderRadius="md"
              textShadow="1px 4px orange"
              align="center"
              bgGradient="linear(to-l, orange, yellow)"
              _hover={{
                bgGradient: "linear(to-r, red, orange, red)",
              }}
            >
              CREATE YOUR NFT
            </Heading>

            <Box align="center" borderRadius="md" boxShadow="xl" pt={20} pb={20} overflow="hidden">
              <Box pb={10}>
                <Image src={digitalWallet1} alt="digitalWallet1" width="400" height="500" placeholder={"blurred"} />
              </Box>
              <div className="CreateYourNFT">
                <Text fontSize={30} mb={10} textAlign="center">
                  Choose your Wallet
                </Text>
                <Button
                  id="walletButton"
                  fontSize={18}
                  fontWeight={700}
                  maxWidth={280}
                  height={50}
                  width="100%"
                  padding={0}
                  colorScheme="red"
                  onClick={connectWalletPressed}
                >
                  {walletAddress.length > 0 ? (
                    "Connected: " + String(walletAddress).substring(0, 6) + "..." + String(walletAddress).substring(38)
                  ) : (
                    <span>Connect Metamask 🦊</span>
                  )}
                </Button>
                <br />
                <br />
                <Button
                  id="walletButton"
                  fontSize={18}
                  fontWeight={700}
                  maxWidth={280}
                  height={50}
                  width="100%"
                  padding={0}
                  colorScheme="blue"
                  onClick={connectWalletPressed}
                >
                  {walletAddress.length > 0 ? (
                    "Connected: " + String(walletAddress).substring(0, 6) + "..." + String(walletAddress).substring(38)
                  ) : (
                    <span>Connect Coinbase Wallet</span>
                  )}
                </Button>
                <br />
                <br />
                <Button
                  id="walletButton"
                  fontSize={18}
                  fontWeight={700}
                  maxWidth={280}
                  height={50}
                  width="100%"
                  padding={0}
                  colorScheme="green"
                >
                  {walletAddress.length > 0 ? (
                    "Connected: " + String(walletAddress).substring(0, 6) + "..." + String(walletAddress).substring(38)
                  ) : (
                    <span>Connect Mobile Wallet</span>
                  )}
                </Button>
                <br />
                <br />
                <Text fontSize={30} mb={10} textAlign="center">
                  Simply add your asset's link{" "}
                  <span role="img" aria-label="Pensive emoji">
                    😃
                  </span>{" "}
                  name & description, then press " Mint NFT ".
                  <br />
                  {process.env.NODE_ENV === "development" ? <></> : null}
                  <br />
                  <br />
                  <Box marginLeft={20} marginRight={20}>
                    <form>
                      <FormControl mb={4}>
                        <FormLabel textAlign="center" fontSize={26} mb={3}>
                          <span role="img" aria-label="emoji board">
                            🖼 Link to asset :
                          </span>{" "}
                        </FormLabel>

                        <Input
                          id="url"
                          fontSize={20}
                          type="text"
                          placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
                          onChange={(event) => setURL(event.target.value)}
                        />
                      </FormControl>

                      <FormControl id="name" mb={4}>
                        <FormLabel textAlign="center" fontSize={26} mb={3}>
                          <span role="img" aria-label="interrogative emoji">
                            🤔 Name :
                          </span>{" "}
                        </FormLabel>
                        <Input
                          fontSize={20}
                          type="text"
                          placeholder="e.g. Create your NFT!"
                          onChange={(event) => setName(event.target.value)}
                        />
                      </FormControl>

                      <FormControl id="description" mb={4}>
                        <FormLabel textAlign="center" fontSize={26} mb={3}>
                          <span role="img" aria-label="hand who's writing with a pen">
                            ✍️ Description :
                          </span>{" "}
                        </FormLabel>
                        <Input
                          id="description"
                          fontSize={20}
                          type="text"
                          placeholder="e.g. This is your favorite picture ;)"
                          onChange={(event) => setDescription(event.target.value)}
                        />
                      </FormControl>
                    </form>

                    <br />
                  </Box>
                  <Button id="mintButton" size="lg" colorScheme="green" onClick={onMintPressed}>
                    Mint your NFT
                  </Button>
                  <br />
                  <br />
                  <p id="status" style={{ color: "red" }}>
                    {status}
                  </p>
                </Text>
              </div>
            </Box>
          </SlideFadeOnScroll>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Minter;

// FONCTIONNE
/*
import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected, mintNFT } from "./util/interact.js";

const Minter = (props) => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");

  useEffect(() => {
    async function fetchData() {
      const { address, status } = await getCurrentWalletConnected();
      setWallet(address);
      setStatus(status);

      addWalletListener();
    }
    fetchData();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a rel="noreferrer" target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your browser.
          </a>
        </p>
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => {
    const { success, status } = await mintNFT(url, name, description);
    setStatus(status);
    if (success) {
      setName("");
      setDescription("");
      setURL("");
    }
  };

  return (
    <div className="Minter">
      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " + String(walletAddress).substring(0, 6) + "..." + String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

      <br></br>
      <h1 id="title">🧙‍♂️ Alchemy NFT Minter</h1>
      <p>Simply add your asset's link, name, and description, then press "Mint."</p>
      <form>
        <h2>🖼 Link to asset: </h2>
        <input
          type="text"
          placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
          onChange={(event) => setURL(event.target.value)}
        />
        <h2>🤔 Name: </h2>
        <input type="text" placeholder="e.g. My first NFT!" onChange={(event) => setName(event.target.value)} />
        <h2>✍️ Description: </h2>
        <input
          type="text"
          placeholder="e.g. Even cooler than cryptokitties ;)"
          onChange={(event) => setDescription(event.target.value)}
        />
      </form>
      <button id="mintButton" onClick={onMintPressed}>
        Mint NFT
      </button>
      <p id="status" style={{ color: "red" }}>
        {status}
      </p>
    </div>
  );
};

export default Minter;
*/

//export default CreateYourNFT;
