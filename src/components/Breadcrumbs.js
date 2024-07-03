// TO get the location of the user visiting the site 

import { Link, useLocation } from "react-router-dom"

export default function Breadcrumbs() {
    const location = useLocation()
    // console.log(location)

    // /help/contact --> help | contact
    let currentLink =''

    // to get the location as the arrays 
    //to remove the empty string if there is something like /help/contact/ = the extra slash causes empty sting
    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb =>{
        currentLink =+ `/${crumb}`
        return(
            <div className="crumb" key={crumb}>
                <Link to={currentLink}>{crumb}</Link>
            </div>
        )
    })

  return (
   <div className="breadcrumbs">
    {crumbs}
   </div>
  )
}
