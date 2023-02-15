import ListMovies from '@/components/ListMovies'
import { request as trequest  } from '../lib/tmdb'

// (page) revalidate: 10 = 10 seconds, then it will be updated
export const revalidate = 10

export default async function Home() {
  const movies = await trequest('movie/popular')
  //console.log(movies)

  return (
    <main className="h-screen">
        {movies && <ListMovies movies={movies} /> }
    </main>
  )
}