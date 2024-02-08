
import React,{ useRef ,useState} from "react";
import Card from "./Card";

function Foreground() {
  const ref=useRef(null)
  const data = [
    {
      desc: "The unique animation I have ever seen in my life really. It's no joke.",
      filesize: "0.5Mb",
      close: true,
      tag: { isopen: true, title: "Download Now", tagcolor: "green" },
    },
    {
      desc: "Through Sheryians I learned this thing with the help of Youtube .Amazing? ",
      filesize: "0.5Mb",
      close: false,
      tag: { isopen: true, title: "Upload Now", tagcolor: "blue" },
    },
    {
      desc: "You can too make this stuff just learn ,learn and learn React.Js !!",
      filesize: "1Mb",
      close: true,
      tag: { isopen: false, title: "Download Now", tagcolor: "green" },
    },
  ];

  return (
    <div ref={ref} className="top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5 fixed z-[3]">
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
