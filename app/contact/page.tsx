"use client";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import Form from "@/components/Form";
import Image from "next/image";
import InfoItem from "@/components/InfoItem";

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex  items-center overflow-x-hidden"
    >
      <div className="container mx-auto pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="flex flex-col gap-12 xl:flex-row h-full">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex-1 flex flex-col justify-center"
          >
            <h3 className="h3 mb-3 text-center xl:text-left">Contact Info</h3>
            {/* items */}
            <div className="flex flex-col items-center xl:items-start gap-12">
              {/* item */}
              <InfoItem
                imgSrc="/assets/contact/pin.svg"
                title="Address"
                description={
                  <p className="leading-relaxed">
                    123/45 Elm St, Suite 800 <br />
                    Los Angels, CA 90012
                  </p>
                }
              />
              <InfoItem
                imgSrc="/assets/contact/phone.svg"
                title="Phone number"
                description={
                  <div className="pt-1 flex-1">
                    <p>Phone: +99(0) 999 333 667</p>
                    <p>Fax: +99(0) 999 322 678</p>
                  </div>
                }
              />
              <InfoItem
                imgSrc="/assets/contact/email.svg"
                title="Email address"
                description={
                  <div className="flex flex-col gap-1">
                    <p>info@youremail.com</p>
                    <p>support@youremail.com</p>
                  </div>
                }
              />
            </div>
          </motion.div>
          {/* form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex-1"
          >
            <div className="bg-[#f0cfbc] w-full max-w-[580px] gap-4 p-10 mx-auto xl:mx-0">
              <h3 className="h3 mb-8 text-center">Get in touch</h3>
              <Form />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
