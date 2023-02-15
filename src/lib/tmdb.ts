import React from 'react'

// (fetch) revalidate: 10 = 10 seconds, then it will be updated
const request = async (endpoint: string) => {
    const response = await fetch(`${process.env.API_URL}${endpoint}?api_key=${process.env.API_KEY}`, { next: { revalidate: 10 } })
    const data = await response.json()
    return data
}

export { request } 