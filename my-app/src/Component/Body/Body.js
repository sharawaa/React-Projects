import "../../Style/body.css"
import Questions from "./Questions"
import Blog from "./Blog"

import Home from "./Home"

export default function Body(){
    return(
        <div id="body_container">
            <Home />
            <Questions />
            <Blog />
        </div>
    )}