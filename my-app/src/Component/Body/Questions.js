import "../../Style/questions.css"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


export default function Body(){
return(<>
   <div id="questions_container">
    <div id="top">
        <section id="">
        <h2>All Questions</h2>

        <p>7,153,351 questions </p>
        
        </section>


        <section>
        <Button variant="primary">Ask Questions</Button>{' '}
        <p></p>
      <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">Left</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary">Middle</Button>
      
    </ButtonGroup>
<p></p>
    
        </section>
    </div>





    </div> 

</>
)}