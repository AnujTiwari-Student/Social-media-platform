/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import img from "../assets/Group 1.png"

function Widget() {
  return (
    <div className="ml-6 h-[790px]">
      <img
        src={img.src}
        title="Embedded post"
        className="w-fit 2xl:min-w-[400px] h-full"
      ></img>
    </div>
  );
}

export default Widget;
