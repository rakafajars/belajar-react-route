import { Link } from "react-router-dom";


export const Header = () => {
    return (
        <div>
            <div>My Blog</div>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/profile"}>Profile</Link>

            </div>
        </div>
    )
}



