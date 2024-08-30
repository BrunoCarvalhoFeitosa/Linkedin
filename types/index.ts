export interface Experience {
    companyLogo: string
    companyName: string
    jobYearsWorked: string
    jobTitle: string
    jobHiringModel: string
    jobRegion: string
    jobDescription: string
}

export interface User {
    id: string
    name?: string | null
    description?: string | null
    about?: string | null
    phone?: string | null
    address?: string | null
    email?: string | null
    emailVerified?: Date | null
    image?: string | null
    coverImage?: string | null
    education?: any 
    experience?: Experience[]
    certificates?: any 
    skills?: any 
    hashedPassword?: string | null
    createdAt?: Date
    updatedAt?: Date
}