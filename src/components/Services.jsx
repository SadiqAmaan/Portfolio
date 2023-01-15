import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle, AiFillPrinter } from "react-icons/ai";
import { SiAdobephotoshop} from "react-icons/si";

const Services = () => {
const animations ={
    whileInView:{
        x:0, y:0, opacity:1,
    },
    one:{

        x:"-100%", opacity: 0
    },
    twoThree:{
        
        y:"-100%", opacity: 0
    },
    four:{

        x:"100%", opacity: 0
    },
}



  return (
    <div id="services">
      <h2>SERVICES</h2>
      <section>
        <motion.div className="box1" whileInView={animations.whileInView} initial={animations.one}>
          <h3>1+</h3>
          <p>Years Experienced</p>
        </motion.div>
        <motion.div className="box2" whileInView={animations.whileInView} initial={animations.twoThree}>
          <AiFillIeCircle />
          <span>Web Development</span>
        </motion.div>
        <motion.div className="box3" whileInView={animations.whileInView} initial={animations.twoThree} transition={{
            delay: 0.2,
        }}>
          <SiAdobephotoshop />
          <span>Designing</span>
        </motion.div>
        <motion.div className="box4" whileInView={animations.whileInView} initial={animations.four}>
          <AiFillPrinter />
          <span>Printing</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
