import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

function MovieCard({ fetchedMovieOptions, posterUrls }) {
  console.log("Options", fetchedMovieOptions, "Urls", posterUrls);

  if (fetchedMovieOptions.length !== posterUrls.length) {
    return <div>Error: poster doesn't match!</div>;
  }
  return (
    <div className="grid-rows-1 grid grid-cols-5 gap-2 w-fit h-fit">
      {fetchedMovieOptions.map((movie, index) => (
        <div
          key={movie.id || index}
          className="flex flex-col gap-2 w-fit h-fit"
        >
          <Card className="w-[13rem]">
            <CardContent>
              {posterUrls[index] ? (
                <AspectRatio ratio={3 / 4}>
                  <Image
                    src={posterUrls[index]}
                    alt={movie.title}
                    fill
                    sizes="208px"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              ) : null}
            </CardContent>
            <CardFooter>{movie.title}</CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;
