import { useEffect, useRef, useState } from "react";

/**
 * Wraps content and fades/slides it into view when it scrolls into the viewport.
 * Dependency-free (IntersectionObserver). Honours prefers-reduced-motion via CSS.
 *
 * Props:
 *  - delay:   stagger delay in ms
 *  - as:      element/tag to render (default "div")
 *  - className: extra classes merged onto the wrapper
 */
export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
