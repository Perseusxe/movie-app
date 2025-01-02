import { ArrowRight, Link2 } from "lucide-react";
import Link from "next/link";
import { Star } from "lucide-react";
import { options } from '@/constants/api'

export const API_KEY = "f39690f9830ce804b7894ac1def4f7e9";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
  },
};
export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
};
const Card = ({ movie }: { movie: Movie }) => {
  return <div></div>;
};

export async function Movies({
  endpoint,
  title,
}: {
  endpoint: string;
  title: string;
}) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`,
    options
  );
  const data = await res.json();
  const movies: Movie[] = data.results;
  return (
    <div>
      <div className="flex items-center justify-around">
        <h2 className="text-[white] font-[600] text-[24px] ml-[20px]">
          {title}
        </h2>
        <Link href={`/${endpoint}`}>
          <div className="flex items-center">
            <h4 className="text-[white] font-[500] text-[14px]">See More</h4>
            <ArrowRight className="stroke-[white] w-[18px] h-[18px]" />
          </div>
        </Link>
      </div>
      <div className="p-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-[#28242c] rounded-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="rounded-t-lg"
            />
            <div className="h-[76px] font-sans">
            <div className="flex">
              <Star className="fill-[White]"/>
                <div className="text-[white]">{movie.vote_average.toFixed(1)}</div>
               <p className="text-[#A1A1AA]">/10</p>
              </div>
              <div className="text-[#FAFAFA]">{movie.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
