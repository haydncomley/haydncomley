import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function CV() {
  return (
    <>
      <Head>
        <title>CheckCheck</title>
        <link rel="icon" href="icon.png"></link>
      </Head>
      <div>
        Hello there!
      </div>
    </>
  );
}
