import "../../Style/blog.css"
import Card from 'react-bootstrap/Card';
import Logo from "./Logo";

const logos = [
  {
    
    img: "https://www.svgrepo.com/show/303109/adobe-xd-logo.svg",
    description1: "Idiom for a schoolboy being purposely overly verbose only to make an essay look longer",
    
   
  },
  {
   
    img: "https://www.svgrepo.com/show/303154/instagram-2016-logo.svg",
    description1: "Difference between detonate and explode",
  },]

export default function Body(){
return(<>
   <div id="home_container">

    <section>
   <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </section>

      <section>
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      </section>
      <section><h4>Hot Network Questions</h4></section>

      <section id="logos">
        <Logo img={logos[0].img}
        description1={logos[0].description1}
        />
        <Logo img={logos[1].img}
                description1={logos[1].description1}/>
      </section>





    </div> 

</>
)}