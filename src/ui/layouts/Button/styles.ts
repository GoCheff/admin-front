import tw from "twin.macro";

const Button = tw.button`flex justify-center items-center bg-primary text-white p-4 rounded font-bold hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-opacity-50 transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary`;

const S = { C: { Button } };

export { S };
