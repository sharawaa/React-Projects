import "../Style/header.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Header(){
    return(
      <div id="container">
     <header>
        <ul>
            <li className="li"><img src="./stack-overflow-wordmark.svg" alt="stack" /></li>
            <li className="li"><Button variant="light">About</Button>{' '}</li>
            <li className="li"><Button variant="light">Products</Button>{' '}</li>
            <li className="li"><Button variant="light">For Teams</Button>{' '}</li>
            <li className="li"><InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><img src="search-svgrepo-com.svg" alt="" /></InputGroup.Text>
        <Form.Control id="basic-addon2"
          placeholder="search.."
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup></li>
      <li className="li"><Button variant="secondary">Log in</Button>{' '}</li>
      <li className="li"><Button variant="primary">Sign Up</Button>{' '}
      </li>
            
        </ul> 
     </header>   
     </div>
    )
}