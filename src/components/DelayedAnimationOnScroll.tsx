import { useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function DelayedAnimationOnScroll(props: any) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setIsVisible(true); // Set isVisible to true after the delay
    }, props.delay);

    return () => {
      clearTimeout(delayTimeout); // Clear the timeout if the component unmounts
    };
  }, [props.delay]);

  return (
    <AnimationOnScroll
      {...props}
      animateIn={isVisible ? props.animateIn : ""} // Trigger animation when isVisible is true
    >
      {props.children}
    </AnimationOnScroll>
  );
}

export default DelayedAnimationOnScroll;
