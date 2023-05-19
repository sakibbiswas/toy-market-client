import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Toy-Shop`
    }, [title])
}
export default useTitle;