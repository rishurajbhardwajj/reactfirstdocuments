import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"
export default function card({ data ,reference}) {
  return (
    
    <motion.div drag dragConstraints ={reference} dragElastic={1.0} dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }} whileHover={{ scale: 1.2 }}
    onHoverStart={e => {}}
    onHoverEnd={e => {}} className="relative flex-shrink-0 px-8 py-4 text-white my-1 mx-1 w-52 h-60 bg-zinc-800 overflow-hidden rounded-[40px]">
      <FaRegFileAlt />
      <p className="mt-5 text-sm font-semibold ">{data.desc}</p>
      <div className="absolute bottom-0 left-0 w-full footer ">
        <div className="flex items-center justify-between px-8 py-4 mb-1">
          <h5>{data.filesize}</h5>
          <span className="flex items-center justify-center bg-black rounded-full w-9 h-9">
            {data.close ? (
              <IoIosCloseCircle />
            ) : (
              <FaDownload size="0.8em" color="white" />
            )}
          </span>
        </div>
        {data.tag.isopen && (
          <div className={`flex items-center justify-center w-full py-3 ${data.tag.tagcolor === "blue" ? "bg-blue-600":"bg-green-600"} tag`}>
            <h3 className="text-sm font-semibold">{data.tag.title}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}
