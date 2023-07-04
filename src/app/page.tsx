import Image from "next/image";
// @ts-ignore
import { styled, icss } from "no-stitches/runtime";
import { Container, Header } from "@/components/Header/Header";
import { cookies } from "next/headers";
import { Counter } from "@/components/Counter";

const fs = 22;

const Main = styled("main", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "100vh",
});

const Description = styled("div", () => ({
  display: "inherit",
  justifyContent: "inherit",
  alignItems: "inherit",
  // fontSize: "0.9rem",
  fontSize: fs,
  maxWidth: 1200,
  width: "100%",
  zIndex: "2",
  // fontFamily: theme.typography.fontFamily,
  "& a": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
  },
  "& p": {
    position: "relative",
    margin: "0",
    padding: "1rem",
    backgroundColor: "primary.300",
    // border: `1px solid rgba(${theme.vars.palette.success[400]}, 0.3)`,
    // borderRadius: theme.shape.borderRadius / 20,
  },
}));

const Code = styled("code", () => ({
  fontWeight: "700",
  // fontFamily: theme.typography.fontFamilyCode,
}));

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(25%, auto))",
  width: "var(--max-width)",
  maxWidth: "100%",

  "@media (max-width: 700px)": {
    gridTemplateColumns: "1fr",
    marginBottom: "120px",
    maxWidth: "320px",
    textAlign: "center",
  },

  "@media (min-width: 701px) and (max-width: 1120px)": {
    gridTemplateColumns: "repeat(2, 50%)",
  },
});

const Card = styled("a", {
  padding: "1rem 1.2rem",
  borderRadius: "var(--border-radius)",
  background: "rgba(var(--card-rgb), 0)",
  border: "1px solid rgba(var(--card-border-rgb), 0)",
  transition: "background 200ms, border 200ms",

  "& span": {
    display: "inline-block",
    transition: "transform 200ms",
  },
  "& h2": {
    fontWeight: 600,
    marginBottom: "0.7rem",
  },

  "& p": {
    margin: 0,
    opacity: "0.6",
    fontSize: "0.9rem",
    lineHeight: "1.5",
    maxWidth: "30ch",
  },

  "@media (hover: hover) and (pointer: fine)": {
    "&:hover": {
      background: "rgba(var(--card-rgb), 0.1)",
      border: "1px solid rgba(var(--card-border-rgb), 0.15)",
    },

    "&:hover span": {
      transform: "translateX(4px)",
    },
  },
  "@media (prefers-reduced-motion)": {
    "&:hover span": {
      transform: "none",
    },
  },

  "@media (max-width: 700px)": {
    padding: "1rem 2.5rem",
    "& h2": {
      marginBottom: "0.5rem",
    },
  },
});

const Center = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  padding: "4rem 0",
  "&::before": {
    background: "var(--secondary-glow)",
    borderRadius: "50%",
    width: "480px",
    height: "360px",
    marginLeft: "-400px",
  },
  "&::after": {
    background: "var(--primary-glow)",
    width: "240px",
    height: "180px",
    zIndex: -1,
  },
  "&::before,&::after": {
    content: '""',
    left: "50%",
    position: "absolute",
    filter: "blur(45px)",
    transform: "translateZ(0)",
  },
  "@media (max-width: 700px)": {
    padding: "8rem 0 6rem",
    "&::before": { transform: "none", height: "300px" },
  },
});

export default function Home() {
  const currentMode = cookies().get("mode");
  async function updateMode() {
    "use server";
    cookies().set("mode", currentMode?.value === "dark" ? "" : "dark");
  }

  return (
    <Main>
      <Header>
        <Container>
          Header
          <form action={updateMode}>
            <button type="submit">
              {currentMode?.value === "dark" ? "dark" : "light"}
            </button>
          </form>
        </Container>
      </Header>
      <Description>
        <Container>
          <p>
            Get started by editing&nbsp;
            <Code>src/app/page.tsx</Code>
          </p>
          <div>
            <Counter />
          </div>
        </Container>
      </Description>

      <Center>
        <Image
          className={icss(() => ({
            position: "relative",
            // backgroundColor: theme.palette.primary.main,
            "@media (prefers-color-scheme: dark)": {
              filter: "invert(1) drop-shadow(0 0 0.3rem #ffffff70)",
            },
          }))}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </Center>

      <Grid>
        <Card
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </Card>

        <Card
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </Card>

        <Card
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </Card>

        <Card
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </Card>
      </Grid>
    </Main>
  );
}
