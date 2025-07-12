import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

function MovieCard({ fetchedMovieOptions, posterUrls }) {
  console.log("Options", fetchedMovieOptions, "Urls", posterUrls);

  if (fetchedMovieOptions.length !== posterUrls.length) {
    return <div className="text-red-500">Error: poster doesn't match!</div>;
  }

  return (
    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        gap-4
        p-4
        place-items-baseline
      "
    >
      {fetchedMovieOptions.map((movie, index) => (
        <Card
          key={movie.id || index}
          className="
            w-[10.5rem]    /* default on mobile */
            sm:w-[9rem]
            md:w-[10rem]
            lg:w-[11rem]
            xl:w-[13rem]
            p-2
          "
        >
          <CardContent className="px-0">
            {posterUrls[index] ? (
              <AspectRatio ratio={3 / 4}>
                <Image
                  src={posterUrls[index]}
                  alt={movie.title}
                  fill
                  sizes="418px"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            ) : null}
          </CardContent>
          <CardFooter className="text-center text-xs sm:text-sm font-medium self-center">
            {movie.title}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default MovieCard;
