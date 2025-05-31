"use client";

import { useEffect, useState } from "react";

const roles = ["Web Developer", "Photographer", "Video Editor"];
const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const DELAY_BEFORE_DELETING = 2000;

export default function Typewriter() {
  const [text, setText] = useState(roles[0]); // 👈 Start with "Web Developer"
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // 👈 Add flag

  useEffect(() => {
    let timeout;
    const currentRole = roles[roleIndex];

    // Avoid animating the first role immediately, wait one render
    if (!hasAnimated) {
      timeout = setTimeout(() => {
        setText(""); // reset to start typing from empty
        setHasAnimated(true);
      }, 500); // adjust delay if needed
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }, DELETING_SPEED);
    } else {
      if (text !== currentRole) {
        timeout = setTimeout(() => {
          setText(currentRole.slice(0, text.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, DELAY_BEFORE_DELETING);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, hasAnimated]);

  return (
    <span style={styles.wrapper}>
      {text}
      <span style={styles.cursor}>|</span>
    </span>
  );
}

const styles = {
  wrapper: {
    whiteSpace: "pre",
    display: "inline-block",
  },
  cursor: {
    display: "inline-block",
    marginLeft: "2px",
    animation: "blink 1s step-start infinite",
    color: "#00cd78",
  },
};
