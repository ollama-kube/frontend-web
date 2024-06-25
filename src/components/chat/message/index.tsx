


interface message {
    role: string,
    content: string
}


export const Message = ({ role, content }: message ) => {



    return <>
        <p>{role} says: </p>
        <p>{content}</p>
    </>
}