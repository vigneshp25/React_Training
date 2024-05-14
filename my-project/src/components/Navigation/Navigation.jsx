import { NavigationList } from "./NavigationList"
const Navigation = ()=>{
    return(
        <ul className="flex content-center flex-wrap">
            { NavigationList.map((ele) => <li key={ele} className="px-4 py-2 hover:bg-yellow-500 cursor-pointer hover:text-white"><a href="javascript;">{ele}</a></li>)}
        </ul>
    )
}
export default Navigation