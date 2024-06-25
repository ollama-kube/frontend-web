import { useState } from "react"
import { db } from ".."

export const useIndexedDB = (slug: string) => {
    const [ entry, setEntry ] = useState()
    
    const actions = {
        add: "",
        get: db.get()
    }


    return { data, }
}