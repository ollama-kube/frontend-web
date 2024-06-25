import Image from "next/image";
import styles from "./page.module.css";
import { Messages } from "@/components/messsages";

export default function Home({ params }: any ) {
    return <>
        Specific Chat { params.slug }

        <Messages />
    </>
}
