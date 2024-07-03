import { Link } from "react-router-dom"
export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sit dolorem ratione, veniam necessitatibus debitis esse omnis excepturi deleniti expedita maxime optio obcaecati quibusdam non enim unde ullam placeat! Debitis!</p>

        <p>Go to <Link to ='/'>HomePage</Link>.</p>
    </div>
  )
}
