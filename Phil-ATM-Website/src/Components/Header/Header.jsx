import { Link } from "react-router-dom";

function Header() {
  return (
    <nav class="bg-zinc-800 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-zinc-800">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <Link to={"/"} class="flex items-center text-white">
          <img src="https://imgur.com/ViCzhzJ.png" id="logo" alt="" />
        </Link>
      </div>
    </nav>
  );
}

export default Header;
