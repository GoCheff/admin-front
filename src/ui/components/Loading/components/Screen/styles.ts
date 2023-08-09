import tw from "twin.macro";

const BackgroundLogo = tw.div`
  flex flex-col items-center justify-center w-full h-screen
`;

const LoadingContainer = tw.div`
  flex flex-col items-center justify-center w-60 h-60 bg-white rounded-full shadow-5
`;

const S = {
  BackgroundLogo,
  LoadingContainer,
};

export { S };
