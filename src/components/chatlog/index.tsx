import { Suspense } from "react"
import { View } from "./view"
import { Client } from "./client"

export const Chatlog = () => {


    return <Suspense fallback={<View data={{ content: "" }} />}>
        <Client />
    </Suspense>
}