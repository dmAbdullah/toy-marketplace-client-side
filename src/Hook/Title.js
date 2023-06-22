import { useEffect } from "react"

const Title= title=> {
    useEffect(()=> {
document.title= `Toy Shop-${title}`;
    }, [title])
}

export default Title;