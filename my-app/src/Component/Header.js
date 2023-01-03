import "../Style/header.css";
import Button from "react-bootstrap/Button"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Header(){
    return(
     <header>
        <ul>
            <li><img src="./stackoverflow-ar21.svg" alt="" /></li>
            <li>
            <Dropdown>
      <Dropdown.Toggle variant="" id="Our company">
        Follow us
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </li>
            
            <a href="">Careers</a>

            <li>
                <a href="">Careers</a>
            </li>

            <li>
                <a href="">Open position</a>
            </li>

            <li>
            <Dropdown>
      <Dropdown.Toggle variant="" id="Our company">
        Follow us
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </li>
            <li>
            <Button variant="primary">Contact</Button>
            </li>
            <div className="custom"></div>
            
        </ul>
     </header>   
    )
}