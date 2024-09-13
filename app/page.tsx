"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";

// コンポネント
import ModalVideo from "@/components/ModalVideo";

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center h-full">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 2, duration: 1, ease: "easeInOut" },
            }}
            className="w-full text-center xl:text-left xl:w-[500px] pt-[120px]"
          >
            <motion.h1
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="h1 mb-6"
            >
              Natural Beauty <br /> Starts Here
            </motion.h1>
            <motion.p
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="lead max-w-xl mx-auto"
            >
              Tailored skincare solutions for a healthy complexion, offering customized
              care for radiant skin
            </motion.p>
            <div className="flex flex-col xl:flex-row items-center gap-6 max-w-max mx-auto xl:mx-0">
              <motion.button
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="btn btn-lg"
              >
                Book an appointment
              </motion.button>
              <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                <ModalVideo />
              </motion.div>
            </div>
          </motion.div>
          {/* image */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, bottom: "-100%" }}
              animate={{
                opacity: 1,
                bottom: 0,
                transition: { delay: 2.4, duration: 1.2, ease: "easeInOut" },
              }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="hidden xl:flex fixed bottom-0"
            >
              <Image
                src="/assets/home/img.png"
                width={864}
                height={650}
                quality={100}
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
