'use server'

import { cookies } from "next/headers"

const apiBaseURL = process.env.NODE_ENV === 'production' ? process.env.API_BASE_URL : "http://localhost:8080"

export async function validateAdminAuth () {
    return cookies().has("adminAuth")
}

export async function createUserAction(formData: FormData) {

    const getValue = (value: string) => {
        return formData.get(value)?.toString()
    }

    const body = {
        userName: getValue("name"),
        userLastname: getValue("lastName"),
        userDni: getValue("dni"),
        userEmail:getValue("email") ,
        userAddress: getValue("address"),
        userPassword: getValue("dni"),
        playerBirthdate: getValue("birthday")
    }

    try {
        const data = await fetch(`${apiBaseURL}/players/save` , {  
            method: "POST",
            headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
        })
        return data.json()
    } catch (error: any) {
        throw new Error(error)
    }
    
}

export async function logoutAdmin () {
    cookies().delete("adminAuth")
}