import type { MetaFunction } from "@remix-run/node";
import { Hero } from "~/components/Hero";
import { Statistics } from "~/components/Statistics";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Hero />
      <Statistics />
    </div>
  );
}
