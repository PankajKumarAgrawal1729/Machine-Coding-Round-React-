import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="absolute bottom-0 right-0 p-4">
        <Link to="https://chaicode.com/">
        <img className="w-36 h-36 rounded-2xl" src="https://shorturl.at/P9yD5" alt="Footer Image" />
        </Link>
      </div>
  );
}

export default Footer;
