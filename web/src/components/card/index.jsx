import React from "react";
import "./card.scss";
import { motion } from "framer-motion/dist/framer-motion";
function Card({ data, setSearchData }) {
  return (
    <div className="card">
      <motion.div
        animate={{ x: [-20, 0], opacity: [0, 1] }}
        whileHover={{scale:1.03}}
        transition={{ duration: 0.7 }}
        className="left-img"
      >
        <motion.img  src={data.photos[0]} alt="img" />
      </motion.div>

      <motion.div
        animate={{ x: [15, 0], opacity: [0, 1] }}
        transition={{ duration: 1.3 }}
        className="right"
      >
        <div className="title">
          <a href={data.url}>
            <h4>{data.title}</h4>
          </a>
        </div>

        <div className="desc">
          <p>{data.description}</p>
          <a href={data.url}>อ่านต่อ...</a>
        </div>
        <div className="tags">
          <h2>หมวด</h2>
          {data.tags.map((tag, i) => (
            <>
              <p
                onClick={(e) => {
                  setSearchData(tag);
                  console.log(e.target.value)
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                name={tag}
                value={tag}
                key={i}
              >
                {tag}
              </p>
            </>
          ))}
        </div>
        <div className="images">
          {data.photos.slice(1, 4).map((photo, i) => (
            <motion.div
              className="image"
              animate={{ y: [i * 50, 0], scale: [0.65, 1], opacity: [0, 1] }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <img src={photo} alt={photo} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
