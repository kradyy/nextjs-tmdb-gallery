import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

type Movie = {
    id: number,
    title: string,
    overview: string,
    poster_path: string
}

type Props = {
    movie: Movie
}

export default function Movie({movie}: Props) {
    return (
        <div className="flex flex-col items-center">
            <Link href={`/movie/${movie.id}`} className="group relative h-full">
                <div className="absolute group-hover:opacity-100 w-full h-full transition-all duration-500 text-center bg-black/50 opacity-0 flex justify-center items-center">
                     <h2 className="text-white text-lg mx-10 font-montserrat font-medium">{movie.title}</h2>
                </div>
                <Image src={`${process.env.API_IMAGE_URL}/t/p/w500${movie.poster_path}`} alt={movie.title} width="500" height="500" className="h-full object-cover"/>
            </Link>
        </div>
    )
}