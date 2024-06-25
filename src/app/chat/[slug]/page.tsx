import { Chat } from "@/components/chat";
import Image from "next/image";

interface page {
    params: {
        slug: string,
    }
}

export default function Home({ params }: page ) {
  return <>
    <Chat />
  </>
}
