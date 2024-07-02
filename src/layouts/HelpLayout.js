import { NavLink, Outlet } from "react-router-dom"

export default function HelpLayout() {
  return (
    <div className='help-layout'>
      <h2>Website Help</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis architecto ullam obcaecati reiciendis odio sequi ipsa nihil assumenda quisquam consectetur nisi provident quo consequatur exercitationem, quia nemo harum doloribus.</p>
      
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet/>
    </div>
  )
}
