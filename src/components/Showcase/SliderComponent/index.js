import React from "react";
import styles from "./style.module.scss";


export default function Project({ index, title, manageModal, stack, link }) {
  return (
    <a
      href={`https://${link}`}
      rel="noopener noreferrer"
      target="_blank"
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className={styles.project}>
      <h1 className="text-white">{title}</h1>
      <p>{stack}</p>
    </a>
  );
}
