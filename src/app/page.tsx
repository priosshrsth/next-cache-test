import Link from "next/link";

import { LatestPost } from "@/app/_components/post";
import { getServerAuthSession } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";

export const dynamic = "force-dynamic";

export default async function Home() {
  const latestPost = await api.post.random();
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  // Clear the console using process.stdout.write
  // process.stdout.write("\x1Bc"); // This is the ANSI escape sequence to clear the screen
  // ANSI escape code for pink text
  const pink = "\x1b[38;5;200m"; // Color 200 is a pinkish color in the 256-color table
  const reset = "\x1b[0m"; // Reset color to default

  // Log a pink-colored message using console.log
  console.log(`${pink}Hello! from App directory${reset}`);
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">First Steps →</h3>
              <div className="text-lg">
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <div className="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {latestPost ? latestPost.name : "Loading tRPC query..."}
            </p>

            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-center text-2xl text-white">
                {session && <span>Logged in as {session.user?.name}</span>}
              </p>
              {/*<Link*/}
              {/*  href={session ? "/api/auth/signout" : "/api/auth/signin"}*/}
              {/*  className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"*/}
              {/*>*/}
              {/*  {session ? "Sign out" : "Sign in"}*/}
              {/*</Link>*/}

              <Link
                href="/contact"
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              >
                Contact
              </Link>

              <Link
                href="/client"
                prefetch={false}
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              >
                Client Page
              </Link>
              <Link
                href="/demo"
                prefetch={false}
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              >
                Demo Page
              </Link>
            </div>
          </div>

          {session?.user && <LatestPost />}
        </div>
      </main>
    </HydrateClient>
  );
}
