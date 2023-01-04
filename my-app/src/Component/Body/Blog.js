import "../../Style/blog.css"
import Card from 'react-bootstrap/Card';
import Logo from "./Logo";

const logos = [
  {
    
    img: "https://static.vecteezy.com/system/resources/previews/003/731/316/original/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg",
    description1: "observable object that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
    
   
  },
  {
   
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1qzX0vcbvxBob5xjcnf7yqutumhsnk_BG09M5cLCv7J6FNr8C27QtAlxJnOCheq6lrg&usqp=CAU",
    description1: "(to the component), observable object that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
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

      <section>
        <Logo img={logos[0].img}
        description1={logos[0].img}
        />
      </section>





    </div> 

</>
)}