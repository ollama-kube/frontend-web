import Image from "next/image";
import styles from "./page.module.css";

export default function Home({ params }: any ) {
    return <>
        Specific Chat { params.slug }
    </>
}
