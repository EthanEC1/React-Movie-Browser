import React from "react";
import { Link } from "react-router-dom";

function Page404(){
    return(
        <div>
            <h1>Page not found</h1>
            <Link className="px-3" to="/">Go to home page</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Page404;