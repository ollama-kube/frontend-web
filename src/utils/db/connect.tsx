import { openDB } from "idb"


export const connect = (slug: string) => {
    
    return openDB(slug.toString(), 1, {
        upgrade(db) {
            db.createObjectStore(
                slug.toString(), { 
                    keyPath: 'id', 
                    autoIncrement: true 
                }
            )
        }
    })
}
