"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Popcorn } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-[60%] rounded-b-2xl px-4 py-3 dark:bg-card bg-card border-b shadow-sm">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link
          href="/"
          className="text-xl flex justify-center items-center gap-1 font-semibold"
        >
          <Popcorn /> PopcornPick
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:underline">
            Movies
          </Link>
          <Link
            href="https://www.linkedin.com/posts/tyagi-devansh_tensorflowjs-machinelearning-neuralnetworks-activity-7339620891867172865-I3LN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaIw4wB7K8nr6GbKnpzS5_wW9Wb4yeCgAQ"
            target="_blank"
            className="text-sm font-medium hover:underline"
          >
            Demo
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline">
            About
          </Link>
        </nav>

        {/* Mobile nav trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px]">
              <nav className="flex flex-col gap-4 mt-6">
                <Link
                  href="/movies"
                  className="text-sm font-medium hover:underline"
                >
                  Movies
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium hover:underline"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium hover:underline"
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}
