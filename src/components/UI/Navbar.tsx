import {
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";

import { addAlpha } from "@/utils";
import {
  Box,
  Button,
  CloseButton,
  Collapse,
  Divider,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  useToken,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiMailSend, BiSolidPhone } from "react-icons/bi";
import {
  FaChevronDown,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import SocialButton from "../SocialButton";

export default function WithSubnavigation() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [offset, setOffset] = useState(0);
  const isOffset = offset >= 80;
  const [activeLink, setActiveLink] = useState("/");
  const _activeOffset = isOffset ? "white" : "brand.primary";

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (id === "#") {
      return;
    }
    if (element) {
      setActiveLink(id);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const offset = window.scrollY;
      setOffset(offset);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        const offset = window.scrollY;
        setOffset(offset);
      });
    };
  }, []);

  return (
    <>
      <Flex
        py={"10px"}
        px={{ base: 5, sm: 5, md: 10, lg: 16, xl: 32 }}
        h={{ base: "50px", sm: "50px" }}
        align={"center"}
        justify={{ base: "center", sm: "center" }}
        bgColor={"brand.primary"}
        color={"white"}
        fontSize={{ base: 14, sm: 14, md: 16, lg: 16 }}
        fontWeight={400}
        transition={"all 0.2s ease-in-out"}
        overflow={"hidden"}
      >
        <Flex
          align={"center"}
          display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
        >
          <Link href={"#"}>
            <Flex direction={"row"} align={"center"} gap={1} mr={4}>
              <BiMailSend />
              <Text noOfLines={1}>oxbournconsulting@gmail.com</Text>
            </Flex>
          </Link>
          <Link href={"#"}>
            <Flex direction={"row"} align={"center"} gap={1}>
              <BiSolidPhone />
              <Text noOfLines={1}>+234805465678</Text>
            </Flex>
          </Link>
        </Flex>
        <Stack
          direction={"row"}
          ml={{ base: "none", sm: "none", md: "auto", lg: "auto" }}
          spacing={6}
        >
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Flex>
      <Flex
        bg={isOffset ? "brand.primary" : "white"}
        //color={isOffset ? "white" : "gray.600"}
        py={{ base: 2 }}
        px={{ base: 5, sm: 5, md: 10, lg: 16, xl: 32 }}
        //borderColor={useColorModeValue("gray.200", "gray.900")}
        borderBottom={isOffset ? "none" : 1}
        align={"center"}
        position={"sticky"}
        top={0}
        h={"60px"}
        direction={"row"}
        transition={"all 0.3s ease-in-out"}
        minHeight={{ base: "60px", sm: "60px", md: "80px", lg: "100px" }}
        zIndex={20}
      >
        <Flex
          flex={{ md: "none", lg: "auto" }}
          ml={{ sm: -2 }}
          display={{ base: "none", sm: "none", md: "flex", lg: "none" }}
          w={"fit-content"}
          pos={"relative"}
        >
          <IconButton
            onClick={onToggle}
            color={"white"}
            bgColor={"brand.primary"}
            size={"md"}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={1}
          justify={{
            base: "space-between",
            sm: "space-between",
            md: "center",
            lg: "start",
          }}
          marginLeft={{ md: "10px", lg: "auto" }}
        >
          <Link href={"/"}>
            <Flex
              align={"center"}
              justifyContent={"flex-start"}
              gap={"5px"}
              fontSize={{ base: "25px", sm: "25px", md: "35px", lg: "35px" }}
              overflowY={"hidden"}
            >
              <Box
                as="span"
                color={isOffset ? "white" : "blackAlpha.800"}
                fontFamily={"inherit"}
                fontWeight={600}
              >
                Oxbourn
              </Box>
            </Flex>
          </Link>

          <Flex
            //color={isOffset ? "white" : ""}
            display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
            ml={10}
            align={"center"}
          >
            <DesktopNav
              isOffset={isOffset}
              _activeOffset={_activeOffset}
              activeLink={activeLink}
              handleClickScroll={handleClickScroll}
            />
          </Flex>
        </Flex>
        <Flex
          flex={{ md: "none", lg: "auto" }}
          ml={{ sm: -2 }}
          display={{ base: "flex", sm: "flex", md: "none", lg: "none" }}
          w={"fit-content"}
          pos={"relative"}
        >
          <IconButton
            rounded={"sm"}
            onClick={onToggle}
            color={"white"}
            bgColor={"brand.primary"}
            size={"md"}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Button
          as={"a"}
          rounded={"sm"}
          display={{ base: "none", md: "inline-flex", lg: "inline-flex" }}
          fontSize={"16px"}
          fontWeight={600}
          padding={"25px 30px"}
          color={"brand.primary"}
          textTransform={"capitalize"}
          bg={"white"}
          border={"1px"}
          borderColor={"brand.primary"}
          transition={".3s"}
          href={"#contact"}
          onClick={() => handleClickScroll("#contact")}
          _hover={{
            transform: "translateY(-5px)",
            boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.2)",
            bg: offset ? "" : "brand.primary",
            color: isOffset ? "" : "white",
          }}
          _focus={{
            outline: "none",
          }}
        >
          Contact us
        </Button>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent fontFamily={"inherit"}>
          <MobileNav
            activeLink={activeLink}
            handleClickScroll={handleClickScroll}
            onClose={onClose}
          />
        </DrawerContent>
      </Drawer>
    </>
  );
}

interface DesktopNavProps {
  activeLink?: string;
  isOffset?: boolean;
  _activeOffset?: "white" | "brand.primary";
  handleClickScroll: (id: string) => void;
}

interface MobileNavProps extends DesktopNavProps {
  onClose: () => void;
}

const DesktopNav = ({
  _activeOffset,
  activeLink,
  handleClickScroll,
  isOffset,
}: DesktopNavProps) => {
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  const handleActiveLink = (id: string) => {
    if (id === activeLink) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover
            trigger={"hover"}
            placement={"bottom-start"}
            styleConfig={{
              transition: ".3s",
            }}
          >
            <PopoverTrigger>
              <Flex
                align={"center"}
                justify={"center"}
                borderBottom={4}
                borderBottomStyle={"solid"}
                borderBottomColor={
                  handleActiveLink(navItem.href as string)
                    ? _activeOffset
                    : "transparent"
                }
                _hover={{
                  textDecoration: "none",
                  borderBottomColor: isOffset ? "white" : "brand.primary",
                }}
              >
                <Box
                  as="a"
                  p={2}
                  noOfLines={1}
                  href={navItem.href ?? "#"}
                  fontSize={"16px"}
                  fontWeight={500}
                  height={"fit-content"}
                  color={isOffset ? "white" : "brand.text"}
                  onClick={() => handleClickScroll(navItem.href as string)}
                >
                  {navItem.label}
                </Box>
                <Box
                  as={"span"}
                  fontSize={"16px"}
                  fontWeight={500}
                  height={"fit-content"}
                  color={isOffset ? "white" : "brand.text"}
                >
                  {navItem.children ? <FaChevronDown /> : ""}
                </Box>
              </Flex>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={5}
                minW={"sm"}
                zIndex={99}
                border={1}
                borderStyle={"solid"}
                borderColor={"#eee"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav
                      key={child.label}
                      {...child}
                      handleClickScroll={handleClickScroll}
                    />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

interface SubNavProps extends NavItem {
  handleClickScroll?: (id: string) => void;
}

const DesktopSubNav = ({
  label,
  href,
  subLabel,
  handleClickScroll,
}: SubNavProps) => {
  const [brandColor] = useToken("colors", ["brand.primary"]);
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: addAlpha(brandColor, 0.1) as string }}
    >
      <Stack
        direction={"row"}
        align={"center"}
        onClick={() => handleClickScroll && handleClickScroll(href as string)}
      >
        <Box>
          <Text transition={"all .3s ease"} fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"brand.primary"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = ({
  onClose,
  activeLink,
  handleClickScroll,
}: MobileNavProps) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      display={{ lg: "none" }}
      height={"100%"}
      fontFamily={"inherit"}
    >
      <Flex
        h="20"
        alignItems="center"
        justifyContent="space-between"
        pos={"sticky"}
        top={"0px"}
        p={"0px 15px"}
      >
        <Logo />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Divider mb={"5px"} />
      <Stack height={"80vh"} overflowY={"auto"}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem
            activeLink={activeLink}
            handleClickScroll={handleClickScroll}
            key={navItem.label}
            {...navItem}
          />
        ))}
      </Stack>
      <Stack
        direction={"row"}
        w={"100%"}
        align={"center"}
        justify={"center"}
        spacing={6}
        pos={"sticky"}
        bottom={0}
        padding={"10px"}
        bgColor={"white"}
        borderTop={"1px"}
        borderTopStyle={"solid"}
        borderTopColor={"#eee"}
      >
        <Button
          as={"a"}
          fontSize={"16px"}
          fontWeight={600}
          padding={"25px 30px"}
          color={"white"}
          textTransform={"capitalize"}
          bg={"brand.primary"}
          borderRadius={5}
          transition={".3s"}
          href={"#contact"}
          onClick={() => handleClickScroll("#contact")}
          w="full"
          _focus={{
            outline: "none",
          }}
        >
          Contact us
        </Button>
      </Stack>
    </Stack>
  );
};

interface MobileNavItemProps extends NavItem {
  activeLink?: string;
  handleClickScroll: (id: string) => void;
}

const MobileNavItem = ({
  label,
  children,
  href,
  handleClickScroll,
  activeLink,
}: MobileNavItemProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const handleActiveLink = (id: string) => {
    if (id === activeLink) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <Stack spacing={2} onClick={children && onToggle}>
      <Box margin={2} marginInline={5}>
        <Box
          py={2}
          px={2}
          as="a"
          href={href ?? "#"}
          w={"100%"}
          display={"flex"}
          fontFamily={"inherit"}
          borderRadius={5}
          justifyContent="space-between"
          alignItems="center"
          _hover={{
            textDecoration: "none",
            bgColor: "#eee",
          }}
          bgColor={
            handleActiveLink(href as string) ? "brand.primary" : "transparent"
          }
          onClick={() => handleClickScroll(href as string)}
        >
          <Text
            fontWeight={600}
            //color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Box>
      </Box>
      <Divider />
      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          // mt={2}
          marginInline={5}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children
            ? children.map((child) => (
                <Box
                  as="a"
                  key={child.label}
                  py={2}
                  href={child.href}
                  fontFamily={"inherit"}
                  fontWeight={400}
                  fontSize={16}
                  _hover={{
                    color: "brand.primary",
                    fontWeight: "500",
                  }}
                  onClick={() => handleClickScroll(child.href as string)}
                >
                  {child.label}
                </Box>
              ))
            : ""}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const Logo = () => {
  return (
    <Flex justify={"flex-start"}>
      <Link href={"/"}>
        <Flex
          align={"center"}
          justifyContent={"flex-start"}
          gap={"5px"}
          fontSize={"30px"}
        >
          <Heading color={"#555"} fontFamily={"inherit"} fontWeight={600}>
            Oxbourn
          </Heading>
        </Flex>
      </Link>
    </Flex>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About us",
    href: "#about",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Portfolio",
    href: "#portfolio",
  },
  {
    label: "Blog",
    href: "#singleblog",
  },
  {
    label: "Overview",
    children: [
      {
        label: "Achievments",
        subLabel: "Number overview",
        href: "#qo",
      },
      {
        label: "Why Oxbourn",
        subLabel: "Why patner with us",
        href: "#whyoxbourn",
      },
    ],
  },
];
