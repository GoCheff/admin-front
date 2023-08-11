import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

import tw from "twin.macro";

const Header = tw.header`flex flex-col items-center w-full mb-10`;

const Nav = tw.nav`flex items-center justify-center w-full`;

const Ul = tw.ul`flex items-center justify-around list-none p-3 w-full`;

const _Link = tw(
  NavLink
)`py-3 px-5 font-bold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:pb-px after:w-full after:bg-primary after:transition-all after:duration-300 after:ease-in-out after:opacity-0 after:transform after:scale-x-0 after:origin-center hover:after:opacity-100 hover:after:scale-x-100 after:rounded`;

const Link = styled(_Link)`
  &.active {
    ${tw`after:opacity-100 after:scale-x-100 after:pb-0.5`}
  }
`;

const S = {
  C: { Header, Nav, Ul, Link },
};

export { S };
