
import { Link } from "react-router-dom";

export default function MenuNav() {

    return (

        <section className="flex justify-between list-none">
            <div className="flex gap-4">
                <Link to="/">Home</Link>
                <Link to="Lista-dei-Post">Posts</Link>
            </div>

            <Link to='Log-In'>Log In</Link>

        </section>
    )
}