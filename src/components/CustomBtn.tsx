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
      color={"white"}
      colorScheme="orange"
      boxShadow={"box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"}
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
        bg: "brand.primary",
        transition: "0.5s",
      }} */
