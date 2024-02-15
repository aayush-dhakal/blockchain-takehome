import Moralis from "moralis";

const initializeMoralis = async (apiKey) => {
  try {
    await Moralis.start({
      apiKey,
    });
    console.log("Moralis initialized successfully.");
  } catch (error) {
    console.error("Error initializing Moralis:", error);
    throw error;
  }
};

export default initializeMoralis;
