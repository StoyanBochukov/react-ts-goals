import { FC, type ReactNode } from "react";

interface HeaderPropTypes {
    children: ReactNode,
    image: {
        src: string,
        alt: string
    }
}

const Header: FC<HeaderPropTypes> = ({ children, image }) => {
  return (
   <header>
    <img {...image} />
    { children }
   </header>
  )
}

export default Header