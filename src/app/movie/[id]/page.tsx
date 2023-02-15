import { request as trequest } from "@/lib/tmdb"
import { useRouter } from "next/navigation"
import Image from 'next/image'

interface Props {
  params: {
    id: number | string
  }
}

export default async function MovieInformation({params}: Props ): Promise<JSX.Element> {
  const { id } = params

  const MovieInformation = await trequest(`movie/${id}`)
  
  return (
    <div className="flex justify-center items-center flex-col font-montserrat mt-52">
      <h1 className="text-3xl font-extralight font-montserrat text-slate-300">Movie Information</h1>

      <h2 className="text-4xl font-bold text-white">{MovieInformation.title}</h2>

      <div className="max-w-[40em] mx-auto">

      <Image src={`${process.env.API_IMAGE_URL}/t/p/w500${MovieInformation.poster_path}`} alt={MovieInformation.title} className="mx-auto my-5 shadow-xl" width="500" height="500" />

      <p className="text-center text-slate-500 px-10">{MovieInformation.overview}</p>
      </div>
    </div>
  )
}
