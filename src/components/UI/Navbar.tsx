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
import { BiMailSend, BiSolidBriefcase, BiSolidPhone } from "react-icons/bi";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
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
        bgColor={"brand.primary"}
        color={"white"}
        fontSize={{ base: 14, sm: 14, md: 16, lg: 16 }}
        fontWeight={400}
        transition={"all 0.2s ease-in-out"}
        overflowX={"hidden"}
      >
        <Button
          as={"a"}
          display={{
            base: "none",
            sm: "inline-flex",
            md: "none",
            lg: "none",
          }}
          fontSize={"16px"}
          fontWeight={600}
          padding={"15px 20px"}
          color={"brand.primary"}
          textTransform={"capitalize"}
          bg={"white"}
          border={"1px"}
          borderColor={"brand.primary"}
          borderRadius={5}
          transition={".3s"}
          href={"#"}
          _hover={{
            bg: offset ? "" : "brand.primary",
            color: isOffset ? "" : "white",
          }}
        >
          Contact us
        </Button>
        <Flex
          align={"center"}
          display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
        >
          <Link href={"#"}>
            <Flex direction={"row"} align={"center"} gap={1} mr={4}>
              <BiMailSend />
              <Text noOfLines={1}>Example@example gmail.com</Text>
            </Flex>
          </Link>
          <Link href={"#"}>
            <Flex direction={"row"} align={"center"} gap={1}>
              <BiSolidPhone />
              <Text noOfLines={1}>+00884567000</Text>
            </Flex>
          </Link>
        </Flex>
        <Stack direction={"row"} ml="auto" spacing={6}>
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
        borderColor={useColorModeValue("gray.200", "gray.900")}
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
              fontSize={"35px"}
            >
              <Box as={"span"} color={isOffset ? "white" : "brand.primary"}>
                <BiSolidBriefcase />
              </Box>
              <Heading
                color={isOffset ? "white" : ""}
                fontFamily={"inherit"}
                fontWeight={600}
              >
                Oxbourn
              </Heading>
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
          display={{ base: "none", md: "inline-flex", lg: "inline-flex" }}
          fontSize={"16px"}
          fontWeight={600}
          padding={"25px 30px"}
          color={"brand.primary"}
          textTransform={"capitalize"}
          bg={"white"}
          border={"1px"}
          borderColor={"brand.primary"}
          borderRadius={5}
          transition={".3s"}
          href={"#"}
          _hover={{
            bg: offset ? "" : "brand.primary",
            color: isOffset ? "" : "white",
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
        <DrawerContent>
          <MobileNav
            activeLink={activeLink}
            handleClickScroll={handleClickScroll}
            onClose={onClose}
          />
        </DrawerContent>
      </Drawer>
      {/**<Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse> */}
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
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                noOfLines={1}
                href={navItem.href ?? "#"}
                fontSize={"16px"}
                fontWeight={500}
                height={"fit-content"}
                color={isOffset ? "white" : "brand.text"}
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
                transformOrigin={".5s"}
                onClick={() => handleClickScroll(navItem.href as string)}
              >
                {navItem.label}
              </Box>
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
      _hover={{ bg: addAlpha(brandColor, 0.5) as string }}
    >
      <Stack
        direction={"row"}
        align={"center"}
        onClick={() => handleClickScroll && handleClickScroll(href as string)}
      >
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "white" }}
            fontWeight={500}
          >
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
          fontSize={"40px"}
        >
          {/**<Image
                src={logo.src}
                height={60}
                width={60}
                alt={"oxbourn-logo"}
              /> */}
          <Box as={"span"} color={"brand.primary"}>
            <BiSolidBriefcase />
          </Box>
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
    label: "Find Work",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "Overview",
    children: [
      {
        label: "About us",
        subLabel: "Brief Information about Oxbourn",
        href: "#about",
      },
      {
        label: "Achievments",
        subLabel: "Brief Overview",
        href: "#qo",
      },
      {
        label: "Why Oxbourn",
        subLabel: "Why we are here",
        href: "#whyoxbourn",
      },
    ],
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
];
