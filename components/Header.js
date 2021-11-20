import HeaderItem from "./HeaderItem";
import { HomeIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header className="">
      <HeaderItem title="HOME" Icon={HomeIcon} />
    </header>
  );
}

export default Header;
