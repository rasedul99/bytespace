import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/footer";
import { GridLines } from "@/components/grid-lines";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = { title: "Page not found · ByteSpace" };

export default function NotFound() {
  return (
    <>
      <main className="relative overflow-hidden bg-blue-800 px-4 pb-32 text-white">
        <GridLines />
        <Navbar />

        <div className="relative mx-auto flex max-w-300 flex-col items-center pt-20 text-center">
          <p
            aria-hidden
            className="bg-linear-to-b from-lime-400 from-30% to-lime-400/15 bg-clip-text font-heading text-[clamp(160px,34vw,490px)] -mb-[0.19em] font-semibold leading-none tracking-tight text-transparent select-none"
          >
            404
          </p>
          <h1 className="-mt-6 relative heading-s sm:heading-l">
            The page you are looking
            <br className="hidden sm:block" /> for doesn’t exist
          </h1>
          <p className="mt-10 body-l text-gray-50">
            Try to use a correct url or go back to homepage to start again
          </p>
          <Link
            href="/"
            className="mt-10 flex h-12 items-center rounded-full bg-lime-400 px-8 label-l text-gray-950 transition hover:brightness-95"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
