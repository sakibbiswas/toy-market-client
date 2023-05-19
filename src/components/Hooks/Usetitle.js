import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - TOY-SHOP`
    }, [title])
}
export default useTitle;