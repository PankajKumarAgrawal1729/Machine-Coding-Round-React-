import { Container, DragBox } from "../index";

function DragDropCard() {
  return (
    <Container containerStyle={`bg-[#D2E3C8]`} headingStyle={`text-[#4F6F52]`}>
      <div className="flex flex-col justify-start rounded-2xl w-[800px] h-[650px] m-auto bg-[#F9F7F7] drop-shadow-[2px_2px_0_rgba(0, 0, 0, 0.25)] p-4 mt-5">
        <h1 className="font-sans font-[700] text-[28px] leading-[52px]">
          Manage Bundle
        </h1>
        <p className="font-sans font-[400] text-[17px] leading-[25px] text-[#4B4747] break-words">
          Change orders of the products based on priority
        </p>
        <DragBox />
      </div>
    </Container>
  );
}

export default DragDropCard;
