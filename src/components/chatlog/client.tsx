'use client'
import { db } from "@/utils/db"
import { View } from "./view"

export const Client = () => {

    //  db.connect("chats")


    const options = {
        content: ""
    }

    return <View data={options} />
}