import React, {useState} from "react";
import {Link} from "react-router-dom";

const SideDrawerListElement = (props) => {
    const [linkClass, setLinkClass] = useState(props.linkClass);


    return(
        <li className={"nav-item"}>
            <Link onClick={clickLink} className={linkClass} to={props.link}>
                {props.icon}
                {props.text}
            </Link>
        </li>
    )
}

export default SideDrawerListElement;