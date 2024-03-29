import { Link } from "react-router-dom";
import ErrorForm from "./ErrorForm";

function Page404() {
    return ( 
        <div className="text-center max-w-7xl mx-auto">

            <h2 className="sm:text-3xl text-9xl">404</h2>
            <h2 className="sm:text-2xl text-5xl mb-4">Page not found</h2>
            <ErrorForm/>
            <div className="text-start">
            <p>Possible causes:</p>
             <ul className="ml-4">
                <li>The address was entered wrong</li>
                <li>Unfortunately we had to remove the content from the air</li>
                <li>The address of the desired content may have changed links</li>
             </ul>
            <Link to={"/"} className="p-2 bg-blue  rounded border-blue">Go to home page</Link>
            </div>
        </div>
     );
}

export default Page404;