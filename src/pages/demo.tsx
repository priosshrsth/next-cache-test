import Link from "next/link";

export default function ClientPage() {
  return (
    <section>
      <h1>Demo Page</h1>
      <Link href="/client">Client Page</Link>
    </section>
  );
}

export function getServerSideProps() {
  // ANSI escape code for pink text
  const pink = "\x1b[38;5;200m"; // Color 200 is a pinkish color in the 256-color table
  const reset = "\x1b[0m"; // Reset color to default

  // Log a pink-colored message using console.log
  console.log(`${pink}This message is in pink!${reset}`);
  return {
    props: {},
  };
}
