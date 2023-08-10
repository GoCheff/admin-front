import { NavLink } from "react-router-dom";

import tw from "twin.macro";

const Header = tw.header`flex flex-col items-center`;

const Ul = tw.nav`flex items-center list-none`;

const Link = tw(NavLink)``;

const S = {
  C: { Header, Ul, Link },
};

export { S };
