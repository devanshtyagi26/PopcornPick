"use client";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Welcome to PopcornPick
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Discover your next favorite movie with personalized recommendations
          powered by cutting-edge machine learning.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="mt-4"
          onClick={() => router.push("/")}
        >
          Explore Recommendations
        </Button>
      </section>

      <Separator />

      {/* What We Do Section */}
      {/* What We Do Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What We Do</h2>
        <p className="text-muted-foreground leading-relaxed">
          PopcornPick leverages movie similarity analysis and user preferences
          to bring curated movie lists tailored just for you. Whether you're
          into action, romance, or indie films, our smart engine has got you
          covered.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Our recommendation system uses a{" "}
          <strong>content-based filtering</strong> approach, analyzing movie
          features like genre, cast, and plot keywords to find films similar to
          those you love. This means you get personalized, relevant suggestions
          without needing to rate dozens of movies.
        </p>
      </section>

      <Separator />

      {/* Mission Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed">
          We aim to simplify movie discovery and help you spend less time
          searching and more time enjoying great films. PopcornPick is built to
          be your friendly movie guide in the vast cinematic universe.
        </p>
      </section>

      <Separator />

      {/* Creator Section */}
      <section className="space-y-6 flex flex-col items-center text-center">
        <h2 className="text-2xl font-semibold">Meet the Creator</h2>
        <Avatar className="w-24 h-24 mx-auto">
          <AvatarImage
            src="https://media.licdn.com/dms/image/v2/D5603AQFzurmeOEjQEA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1733141188155?e=2147483647&v=beta&t=VkayHsyNA50kx-Xpmq8lnYAS_3eoZ4K9WEZLl53PrWs"
            alt="Creator's Avatar"
          />
          <AvatarFallback>PP</AvatarFallback>
        </Avatar>
        <p className="max-w-md text-muted-foreground leading-relaxed">
          Hi, I'm <strong>Devansh Tyagi</strong>, the developer behind
          PopcornPick. Passionate about movies and tech, I built this app to
          help movie lovers discover hidden gems effortlessly.
        </p>
        <div className="flex space-x-4">
          <Button asChild variant="outline" size="sm">
            <a
              href="https://github.com/devanshtyagi26"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </Button>

          <Button asChild variant="outline" size="sm">
            <a
              href="https://www.linkedin.com/in/tyagi-devansh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </Button>

          <Button asChild variant="outline" size="sm">
            <a
              href="mailto:johndoe@example.com"
              className="flex items-center space-x-2"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
          </Button>
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold">Get in Touch</h2>
        <p className="text-muted-foreground mb-4">
          Have questions or feedback? Reach out at{" "}
          <a
            href="mailto:tyagidevansh3@gmail.com"
            className="text-blue-600 underline"
          >
            tyagidevansh3@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
