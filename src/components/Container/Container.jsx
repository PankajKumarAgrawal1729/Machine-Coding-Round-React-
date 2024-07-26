
import { Header, Footer } from "../index";

function Container({ children, containerStyle, headingStyle }) {
  return (
    <div
      className={`relative flex flex-col justify-center items-center w-screen h-screen ${containerStyle}`}
    >
      <Header style={headingStyle} />
      {children}
      <Footer />
    </div>
  );
}

export default Container;

