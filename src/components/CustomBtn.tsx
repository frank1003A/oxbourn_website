import { Button, ButtonProps } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

interface CustomBtnProps extends ButtonProps {}
const CustomBtn = ({ children, ...rest }: CustomBtnProps) => {
  const cardRef = useRef(null);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    if (!cardRef.current) {
      return;
    }

    let card = cardRef.current as HTMLButtonElement;

    card.addEventListener("mouseenter", () => {
      setIsOver(true);
    });
    card.addEventListener("mouseleave", () => {
      setIsOver(false);
    });

    return () => {
      card.removeEventListener("mouseenter", () => {
        setIsOver(true);
      });
      card.removeEventListener("mouseleave", () => {
        setIsOver(false);
      });
    };
  }, []);
  return (
    <Button
      ref={cardRef}
      pos={"relative"}
      transition={"0.3s"}
      zIndex={1}
      color={isOver ? "#694fff" : "white"}
      _before={{
        content: `""`,
        pos: "absolute",
        h: isOver ? "100%" : "0%",
        w: isOver ? "100%" : "0%",
        left: 0,
        top: 0,
        opacity: isOver ? 1 : 0,
        borderRadius: "inherit",
        border: "1px solid",
        borderColor: "#694fff",
        zIndex: -1,
        bg: "#fff",
        transition: "0.3s",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomBtn;

/** _before={{
        content: `""`,
        pos: "absolute",
        h: isOver ? "100%" : "6%",
        w: isOver ? "100%" : "6%",
        right: 0,
        bottom: 0,
        borderRadius: "5px",
        zIndex: -1,
        bg: "#694fff",
        transition: "0.5s",
      }} */
