"use client";
import styles from "./style.module.scss";
import { useState, useEffect, useRef } from "react";
import Project from "./SliderComponent";
import { motion } from "framer-motion";
import gsap from "gsap";
import sparshImage from "./SliderComponent/images/Sparsh Card.png"
import wegoImage from "./SliderComponent/images/WeGo Card.png"
import learnImage from "./SliderComponent/images/LearnWithWilly Card.png"
import portfolioImage from "./SliderComponent/images/Portfolio Card.png"
import pinterestImage from "./SliderComponent/images/Pinterest Card.png"
import virtualImage from "./SliderComponent/images/Virtual Resilience Card.png"
import tangiImage from "./SliderComponent/images/TangiART Card.png"
import beyondImage from "./SliderComponent/images/Beyond The Canvas Card.png"
import delayImage from "./SliderComponent/images/UltraDelay Card.png"

const projects = [
  {
    title: "Sparsh",
    src: sparshImage,
    color: "#3D8ACF",
    stack: "RedBrick Hacks 2023 Winner",
    link: "//www.behance.net/gallery/209738361/Sparsh-An-accessible-tap-to-pay-network-for-UPI",
  },
  {
    title: "WeGo",
    src: wegoImage,
    color: "#EC5B42",
    stack: "UI/UX and Research",
    link: "//www.behance.net/gallery/171155309/UIUX-Case-Study-WeGo",
  },
  {
    title: "Learn With Willy",
    src: learnImage,
    color: "#9BDAFA",
    stack: "UI/UX and Research",
    link: "//www.behance.net/gallery/175548369/Learn-with-Willy-Design-Research-Project",
  },
  {
    title: "parthganjoo.me",
    src: portfolioImage,
    color: "#000000",
    stack: "React Portfolio Website",
    link: "//parthganjoo.me",
  },
  {
    title: "Pinterest Gift Template",
    src: pinterestImage,
    color: "#8E292B",
    stack: "React Website for Gifting",
    link: "//github.com/ParthGanjoo/Pinterest-Home-Template",
  },
  {
    title: "Virtual Resilience",
    src: virtualImage,
    color: "#5c5c5c",
    stack: "Extended Reality Meditation Experience",
    link: "//github.com/sociallyencrypted/UDXREndSem",
  },
  {
    title: "TangiART",
    src: tangiImage,
    color: "#AF393A",
    stack: "Tangible Art Storytelling",
    link: "//drive.google.com/drive/folders/1SvwkOrmy8xVxFjNGnKH4fLGOFjB25d13?usp=drive_link",
  },
  {
    title: "Beyond The Canvas",
    src: beyondImage,
    color: "#b042ff",
    stack: "IndiaHCI Arts Track Submission",
    link: "//drive.google.com/drive/folders/1-A155lfWF21ODeghKue10HdBlnjp3M95?usp=sharing",
  },
  {
    title: "UltraDelay",
    src: delayImage,
    color: "#3d251e",
    stack: "Guitar Effects with Arduino",
    link: "//drive.google.com/drive/u/1/folders/1l30aFJbysXqFSG5x40a2erTnNNcAi4zo",
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function ProjectComponent() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 1.2,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 1.2,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className={styles.projects}>
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              stack={project.stack}
              link={project.link}
              manageModal={manageModal}
              key={index}
            />
          );
        })}
      </div>
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={styles.modalContainer}>
          <div
            style={{ top: index * -100 + "%" }}
            className={styles.modalSlider}>
            {projects.map((project, index) => {
              const { src, color } = project;
              return (
                <div
                  className={styles.modal}
                  style={{ backgroundColor: color }}
                  key={`modal_${index}`}>
                  <img
                    src={`${src}`}
                    width={500}
                    height={0}
                    alt="project Image"
                    style={{ width: "80%", height: "auto" }}
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          ref={cursor}
          className={styles.cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}></motion.div>
        <motion.div
          ref={cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={`${styles.cursorLabel} text-xs`}>
          View
        </motion.div>
      </>
    </main>
  );
}
