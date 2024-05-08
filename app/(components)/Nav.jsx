import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


const Nav = () => {
  return (
    <nav className="border m-3 p-3 rounded-md flex justify-between items-center bg-white text-black">
      <div className="space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome}  className="icon "/>
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket}  className="icon"/>
        </Link>
      </div>
      <div>
        <p>Flynt</p>
      </div>
    </nav>
  );
};

export default Nav;
