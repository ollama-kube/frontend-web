'use client'

import { FormEvent, useEffect, useState } from "react"
import { addConversation, getConversations } from "./storage"
import { useParams } from "next/navigation"
import { openDB } from "idb"
import { db } from "@/utils/db"

export const Chat = () => {
    //  const [ messages, setMessages] = useState<Array<{role: string, content: string}> | null >(null)
    //  const [ input, setInput ] = useState()


    const { slug } = useParams()

    useEffect(() => {
        db.connect(slug.toString())

    }, [])


    useEffect(() => {

    }, [db.get()])


    const message = {
        get() {},
        add() {},
        delete() {}
    }


    const handle = {
        async submit(e: FormEvent) {
            e.preventDefault()
            //  const newMessage = { role: "", content: "" }
            //  await addConversation(newMessage)
            //  messages ? [...messages, newMessage] : [newMessage]
            //  setMessages(messages ? [...messages, newMessage] : [newMessage])
        }
    }






    return <>
        {
        //  messages && messages.map((message, index) => {
        //      //  console.log(message)
        //      return <div key={`${message.role}-${index}`}>
        //          {message.content}
        //      </div>
        //  })
        }


        <form onSubmit={(e: FormEvent) => handle.submit(e)}>
            <input type="text" placeholder="prompt"/>
        </form>
    </>
}