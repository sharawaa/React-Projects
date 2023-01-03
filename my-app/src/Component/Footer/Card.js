import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../../Style/card.css"
export default function Footer(){
    return (

<div id='cards'>
  <section>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./8666780_aperture_photography_icon.png" />
      <Card.Body>
       
        <Card.Text>
        Check out our FAQ about how Stack Overflow works.
        </Card.Text>
        <Button variant="warning">Get help</Button>
      </Card.Body>
    </Card>
    </section>

    <section>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./8666778_download_down_save_icon.png" />
      <Card.Body>
        
        <Card.Text>
         


To share feedback about our platform ,


        </Card.Text>
        <Button variant="warning">Go somewhere</Button>
      </Card.Body>
    </Card>
    </section>

    <section>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./8666723_mail_icon.png" />
      <Card.Body>
        
        <Card.Text>
        Looking for help with Stack Overflow for Teams?
        </Card.Text>
        <Button variant="warning">Teams help</Button>
      </Card.Body>
    </Card>
    </section>
</div>
)}