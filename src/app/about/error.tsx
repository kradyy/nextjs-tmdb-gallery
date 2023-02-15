"use client"

interface Error {
    error: { message: string },
    reset: () => void
}

export default function Error({ error, reset }: Error ): JSX.Element {
    return (
        <div>
            This aint loading up {error.message}
            <button onClick={() => reset()}>Go home</button>
        </div>
    )
}