import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";

const Home = () => {
  const projectCount = useRef(null);

  const animationProjectsCount = () => {
    animate(0, 20, {
      duration: 2,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: "0",
        opacity: 1,
      },
    },
    buton: {
      h1: {
        initial: {
          y: "-100%",
          opacity: 0,
        },
        whileInView: {
          y: "0",
          opacity: 1,
        },
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Hi, I am <br /> Sadiq Amaan
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewpara",
            }}
          />
          <div>
            <a href="mailto:amaankhan1666@gmail.com" target={'blank'}>Hire Me!</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>
          <article>
              <span className="tech">
                CURRENTLY USING
                <Typewriter className='subtech'
            options={{
              strings: ["REACT-JS", "NEXT-JS"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewpara2",
            }}
          /></span>
          </article>
          <aside>
            <article>
              <p>
                +<motion.span whileInView={animationProjectsCount} ref={projectCount}></motion.span>
              </p>
              <span>Projects Made</span>
            </article>
            <article className="data">
              <p>Contact</p>
              <span><Typewriter
            options={{
              strings: ["amaankhan1666@gmail.com"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewpara1",
            }}
          /></span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Sadiq" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
