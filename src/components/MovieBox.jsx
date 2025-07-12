"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import axios from "axios";
import { NextResponse } from "next/server";
import MovieCard from "./MovieCard";

export default function MovieBox() {
  const [movieOptions, setMovieOptions] = useState([]);
  const [fetchedMovieOptions, setFetchedMovieOptions] = useState([]);
  const PosterURI = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await axios.get(
          "https://popcornpick-backend.onrender.com/movies"
        );
        setMovieOptions(res.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, []);

  async function recommendMovies() {
    try {
      const res = await axios.get(
        `https://popcornpick-backend.onrender.com/movies/${selectedMovie}`
      );

      setFetchedMovieOptions(res.data);

      let posters = await Promise.all(
        res.data.map((movie) => fetchPoster(movie.id))
      );

      setPosterUrls(posters);
      setOutput(true);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  async function fetchPoster(movie_id) {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${PosterURI}`
      );
      console.log(res.data);
      return "https://image.tmdb.org/t/p/w500/" + res.data.poster_path;
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }
  const [selectedMovie, setSelectedMovie] = useState("");
  const [open, setOpen] = useState(false);
  const [output, setOutput] = useState(false);
  const [posterUrls, setPosterUrls] = useState([]);

  return (
    <div className="flex flex-col gap-2 w-[100%] h-[100%] justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>PopcornPick – Your Movie Matchmaker</CardTitle>
          <CardDescription>
            Smart movie recommendations tailored to your taste — powered by AI,
            built for binge-watchers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              {/* Searchable Dropdown using Command Menu */}
              <div className="flex flex-col w-[100%] space-y-1.5">
                <Label>Select a Movie</Label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className="w-full justify-between"
                    >
                      {selectedMovie || "Search or select a movie"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0 max-h-90 overflow-y-auto">
                    <Command>
                      <CommandInput placeholder="Search movies..." />
                      <CommandEmpty>No movie found.</CommandEmpty>
                      <CommandGroup>
                        {movieOptions.length > 0 ? (
                          movieOptions.map((movie, index) => (
                            <CommandItem
                              key={`${movie}-${index}`}
                              value={movie}
                              onSelect={(currentValue) => {
                                setSelectedMovie(currentValue);
                                setOpen(false);
                              }}
                            >
                              {movie}
                            </CommandItem>
                          ))
                        ) : (
                          <CommandEmpty>Loading movies...</CommandEmpty>
                        )}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            disabled={selectedMovie === ""}
            onClick={() => {
              if (selectedMovie !== "") {
                recommendMovies();
              }
            }}
          >
            Recommend
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-fit h-fit px-2 min-w-[25rem]">
        <CardHeader>
          <CardTitle>AI Recommendation</CardTitle>
        </CardHeader>
        {output ? (
          fetchedMovieOptions.length > 0 ? (
            <>
              <CardDescription className="flex justify-center items-center">
                <MovieCard
                  fetchedMovieOptions={fetchedMovieOptions}
                  posterUrls={posterUrls}
                />
              </CardDescription>
            </>
          ) : (
            <CardDescription className="flex justify-center items-center">No Movie Found...</CardDescription>
          )
        ) : (
          <CardDescription className="flex justify-center items-center">Choose a movie...</CardDescription>
        )}
      </Card>
    </div>
  );
}
