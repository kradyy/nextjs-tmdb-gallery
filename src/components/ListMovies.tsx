import React from 'react'
import Movie from './Movie'

type Props = {
    movies: any
}

export default function ListMovies({movies}: Props) {
  //console.log(movies)

  return (
    <div className="grid grid-cols-auto">
        {movies.results.map((movie: any) => (
            <Movie movie={movie} key={movie.id} />
        ))}
    </div>
  )
}