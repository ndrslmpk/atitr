import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <p id="index-page">
      This is a demo for Atitr.
      <br />
      Check out <a href="/product">our product page for more</a>
    </p>
  );
}
