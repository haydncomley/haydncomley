import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>CheckCheck</title>
        <link rel="icon" href="icon.png"></link>
      </Head>
      <div>
        <img
          src="/icon.png"
          width="128"
          height="128"
          alt="The CheckCheck Logo"
        />
        <p>
          Hello the CheckCheck on fresh.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
