'use server'

import { cookies } from "next/headers"

const apiBaseURL = process.env.API_BASE_URL

export async function authDNI(formData: FormData) {
    const dni = formData.get("dni")?.toString()  ;
    if (!dni) return false; 
    const validDNI = await validateDNI(dni)
    if (!validDNI) return false;

    cookies().set("dni", dni, {maxAge: 60 , httpOnly: true})
    return true
}

const validateDNI =async (dni: string) => {
    try {
        const getUserByDNI = await fetch(`${apiBaseURL}/players/getByDni/${dni}`, {method: 'GET'})
        return getUserByDNI.status === 200 ? true : false; 
        
    } catch (error) {
        return false
    }
}

export async function authUser(formData:FormData) {
    const dni = cookies().get("dni")?.value  ;
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    const getUserByDNI = await fetch(`${apiBaseURL}/players/getByDni/${dni}`, {method: 'GET'})

    const user = await getUserByDNI.json()

    if (!user) return false;
    cookies().set("userAuth", "true")
    return user.userEmail === email && user.userPassword === password ? true : false;
}

export async function adminAuth (password?: string ){
    const validPassword = password === process.env.ADMIN_PASSWORD ? true : false;
    if (!validPassword) return false
    cookies().set("adminAuth", "true" )
    return true
}