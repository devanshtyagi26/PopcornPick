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
import MovieCard from "./MovieCard";

export default function MovieBox() {
  const [movieOptions, setMovieOptions] = useState([]);
  const [fetchedMovieOptions, setFetchedMovieOptions] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");
  const [open, setOpen] = useState(false);
  const [output, setOutput] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch movie drop-down list via local secure API route
  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await axios.get("/api/movies");
        setMovieOptions(res.data);
      } catch (error) {
        console.error("Error fetching movies via proxy:", error);
      }
    }
    fetchMovies();
  }, []);

  // Fetch Recommendations via dynamic local secure API route
  async function recommendMovies() {
    if (!selectedMovie) return;
    setLoading(true);
    try {
      const res = await axios.get(
        `/api/movies/${encodeURIComponent(selectedMovie)}`,
      );
      setFetchedMovieOptions(res.data);
      setOutput(true);
    } catch (error) {
      console.error("Error getting recommendations via proxy:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-2 w-full h-full justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>PopcornPick – Your Movie Matchmaker</CardTitle>
          <CardDescription>
            Smart movie recommendations tailored to your taste — powered by AI,
            built for binge-watchers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col w-full space-y-1.5">
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
                          <div className="p-4 text-sm text-muted-foreground text-center">
                            Loading movie options...
                          </div>
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
            disabled={selectedMovie === "" || loading}
            onClick={recommendMovies}
          >
            {loading ? "Analyzing..." : "Recommend"}
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-fit h-fit px-5 min-w-[22rem]">
        <CardHeader>
          <CardTitle>AI Recommendation</CardTitle>
        </CardHeader>
        {output ? (
          fetchedMovieOptions.length > 0 ? (
            <CardContent className="flex flex-col pl-5 justify-center gap-2 items-baseline pb-6">
              {fetchedMovieOptions.map((movie, index) => (
                <p key={movie.id || index} className="text-sm font-medium">
                  {index + 1}. {movie.title || movie}
                </p>
              ))}
            </CardContent>
          ) : (
            <CardContent className="flex justify-center items-center text-sm text-muted-foreground pb-6">
              No Movie Found...
            </CardContent>
          )
        ) : (
          <CardContent className="flex justify-center items-center text-sm text-muted-foreground pb-6">
            Choose a movie...
          </CardContent>
        )}
      </Card>
    </div>
  );
}
