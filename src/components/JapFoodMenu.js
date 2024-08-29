const JapFoodMenu = (props) => {

    return(
    <nav>
        <ul id="menu">
            <li>
                <a href="#">{props.home}</a>
            </li>
            <li>
                <a href="#">{props.about}</a>
            </li>
            <li>
                <a href="#">{props.menu}</a>
            </li>
            <li>
                <a href="#">{props.contact}</a>    
            </li>
        </ul>
    </nav>
    );
}

export default JapFoodMenu;