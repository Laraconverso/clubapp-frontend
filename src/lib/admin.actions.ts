'use server'

import { Coach, Player } from "@/models/admin.model"
import dayjs from "dayjs"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

const apiBaseURL = process.env.API_BASE_URL

export async function validateAdminAuth () {
    return cookies().has("adminAuth")
}

export async function logoutAdmin () {
    cookies().delete("adminAuth")
}

// ----------------------------------- PLAYERS CRUD -------------------------------- 


export async function createPlayerAction(formData: FormData) {

    const getValue = (value: string) => {
        return formData.get(value)?.toString() || ""
    }
    const category = dayjs(getValue("birthday")).year().toString()
    
    const body:Player = {
        userName: getValue("name"),
        userLastname: getValue("lastName"),
        userDni: getValue("dni"),
        userEmail:getValue("email") ,
        userAddress: getValue("address"),
        userPassword: getValue("dni"),
        playerBirthdate: getValue("birthday"),
        categoryName: category
    }

    try {
        const data = await fetch(`${apiBaseURL}/players/save` , {  
            method: "POST",
            headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
        })
        revalidatePath("/admin/players", "layout")
        revalidatePath("/admin/teams")
        return data.json()
    } catch (error: any) {
        throw new Error(error)
    }
    
}

export async function deletePlayerAction (id: string) {
    try {
        const request = await fetch(`${apiBaseURL}/players/${id}`, {method: 'DELETE'})
        if (!request.ok) return false; 
        revalidatePath("/admin/players", "layout")
        return request.ok

    } catch (error: any) {
        throw new Error(error)
    }
}

// ----------------------------------- COACHES CRUD -------------------------------- 
export async function createCoachAction (formData: FormData){
    const getValue = (value: string) => {
        return formData.get(value)?.toString() || ""
    }

    const body: Coach = {
        userName: getValue("name"),
        userLastname: getValue("lastName"),
        userDni: getValue("dni"),
        userEmail:getValue("email") ,
        userAddress: getValue("address"),
        userPassword: getValue("dni"),
        roleId: 3,
        clubId: 1
        
    }

    try {
        const data = await fetch(`${apiBaseURL}/coaches/save` , {  
            method: "POST",
            headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
        })
        revalidatePath("/admin/coaches", "layout")
        return data.json()
    } catch (error: any) {
        throw new Error(error)
    }

}

export async function deleteCoachAction (id: string) {
    try {
        const request = await fetch(`${apiBaseURL}/coaches/${id}`, {method: 'DELETE'})
        if (!request.ok) return false; 
        revalidatePath("/admin/players", "layout")
        return request.ok

    } catch (error: any) {
        throw new Error(error)
    }
}
