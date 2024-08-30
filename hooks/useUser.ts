"use client"
import axios from "axios"

export const useUser = async (name: string) => {
    try {
        const response = await axios.get(`/api/users/${name}`)
        const data = response.data

        return { data }
    } catch (error) {
        console.error("Error while get user", error)
        throw error
    }
}