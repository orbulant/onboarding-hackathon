import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar, Text, Button } from "@nextui-org/react";

enum routes {
  home = "/",
  trial = "/trial",
}

const Layout = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();

  return (
    <div>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            Bitwewe Trading Board
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="underline">
          <Navbar.Link
            color="inherit"
            isActive={router.pathname === routes.home}
            href={routes.home}
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            color="inherit"
            isActive={router.pathname === routes.trial}
            href={routes.trial}
          >
            Free Trial
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <h1>By: Tan Ka-Shing, Kelvin Leong, Pook Wei Jie and Goh Yu Sheng</h1>
      </footer>
    </div>
  );
};

export default Layout;
