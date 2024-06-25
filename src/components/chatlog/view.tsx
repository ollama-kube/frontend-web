




interface view {
    data: {
        content: string
    }
}

export const View = ({ data }: view) => {



    return <div>
        { data.content }
    </div>
}