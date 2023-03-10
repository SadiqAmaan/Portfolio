import React from "react";
import vg from "../assets/vg.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Contact = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      x: "-100%",
      opacity: 0,
    },
    two: {
      x: "100%",
      opacity: 0,
    },
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = () => {
    console.log(name, email, message)
    toast.success('Message Sent')
  };

  return (
    <div id="contact">
      <motion.section
        whileInView={animations.whileInView}
        initial={animations.one}
        transition={{
          delay: 0.3,
        }}
      >
        <form onSubmit={submitHandler}>
          <h2>Contact Me</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
          />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
          />
          <button type="submit">Submit Now</button>
        </form>
      </motion.section>
      <motion.aside
        whileInView={animations.whileInView}
        initial={animations.two}
        transition={{
          delay: 0.2,
        }}
      >
        <img src={vg} alt="" />
      </motion.aside>
    </div>
  );
};

export default Contact;
