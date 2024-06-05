import Layout from "../../components/Layout/Layout";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";
import { GeneralSection } from "./GeneralSection";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <Layout>
      <div className="bg-inherit">
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div> */}
        {/* <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span> */}
        
      <HeroSection/>
      <HorizontalScrollCarousel />
      <GeneralSection/>
    </div>
    </Layout>
  );
};
const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object
}

export { Home };
const cards = [
  {
    url: "https://img.freepik.com/free-photo/medium-shot-smiley-old-man-outdoors_23-2151038746.jpg?t=st=1717585632~exp=1717589232~hmac=9ee9748b63f2614863e7f4d7d966305f8d42ee6204e0db0eb22df95f823488bd&w=1380",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://img.freepik.com/free-photo/medium-shot-smiley-old-man-outdoors_23-2151038746.jpg?t=st=1717585632~exp=1717589232~hmac=9ee9748b63f2614863e7f4d7d966305f8d42ee6204e0db0eb22df95f823488bd&w=1380",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://img.freepik.com/free-photo/medium-shot-smiley-old-man-outdoors_23-2151038746.jpg?t=st=1717585632~exp=1717589232~hmac=9ee9748b63f2614863e7f4d7d966305f8d42ee6204e0db0eb22df95f823488bd&w=1380",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://img.freepik.com/free-photo/medium-shot-smiley-old-man-outdoors_23-2151038746.jpg?t=st=1717585632~exp=1717589232~hmac=9ee9748b63f2614863e7f4d7d966305f8d42ee6204e0db0eb22df95f823488bd&w=1380",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://img.freepik.com/free-photo/medium-shot-smiley-old-man-outdoors_23-2151038746.jpg?t=st=1717585632~exp=1717589232~hmac=9ee9748b63f2614863e7f4d7d966305f8d42ee6204e0db0eb22df95f823488bd&w=1380",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://img.freepik.com/free-photo/medium-shot-smiley-old-man-outdoors_23-2151038746.jpg?t=st=1717585632~exp=1717589232~hmac=9ee9748b63f2614863e7f4d7d966305f8d42ee6204e0db0eb22df95f823488bd&w=1380",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://img.freepik.com/free-photo/medium-shot-smiley-old-man-outdoors_23-2151038746.jpg?t=st=1717585632~exp=1717589232~hmac=9ee9748b63f2614863e7f4d7d966305f8d42ee6204e0db0eb22df95f823488bd&w=1380",
    title: "Title 7",
    id: 7,
  },
];