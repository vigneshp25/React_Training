import { NavigationList } from "./NavigationList"
const Navigation = ()=>{
    return(
        <ul className="flex">
            { NavigationList.forEach(
                (ele) => {
                    <li key={ele}>{ele}</li>
                }
            )}
        </ul>
    )
}
export default Navigation