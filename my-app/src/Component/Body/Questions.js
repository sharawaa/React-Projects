import "../../Style/questions.css"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import SingleResult from "./SingleResult";


const results = [
  {
    title: "component to rerender without calling setState?",
    description:
      "observable object that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
    vote: 3000 +"  votes",
    answers: 32 + " answers",
    views: 7 + " views",
   
  },
  {
    title: "force a React component to rerender without calling setState?",
    description:
      "(to the component), observable object that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
      vote: 1000 +"  votes",
      answers: 12 + " answers",
      views: 5 + " views",
  },
  {
    title: "rerender without calling setState?",
    description:
      "that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
      vote: 2000 +"  votes",
      answers: 31 + " answers",
      views: 4 + " views",
  },
  
];

export default function Body(){
return(
<>
  <div id="questions_container">
        <div id="top">
            <section id="">
              <h2>All Questions</h2>

              <p>7,153,351 questions </p>
            
            </section>


            <section id="ask">
                <Button variant="primary">Ask Questions</Button>{' '}
              <p></p>
                <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Newest</Button>
                <Button variant="light">Active</Button>
                <Button variant="light">Bounted</Button>
                <Button variant="light">Unanswered</Button>
                <Button variant="light">More</Button>
                </ButtonGroup>
        
            </section>
        </div>


        <div>
          <SingleResult 
            title={results[0].title}
            description={results[0].description}
            asd={results[0].asd}
            answers={results[0].answers}
            vote= {results[0].vote}
            views={results[0].views}/>
        </div>

        <div>
          <SingleResult 
            title={results[1].title}
            description={results[1].description}
            asd={results[1].asd}
            answers={results[1].answers}
            vote= {results[1].vote}
            views={results[1].views}/>
        </div>
        <div>
          <SingleResult 
            title={results[2].title}
            description={results[2].description}
            asd={results[2].asd}
            answers={results[2].answers}
            vote= {results[2].vote}
            views={results[2].views}/>
        </div>
        <div>
          <SingleResult 
            title={results[1].title}
            description={results[1].description}
            asd={results[1].asd}
            answers={results[1].answers}
            vote= {results[1].vote}
            views={results[1].views}/>
        </div>
        <div>
          <SingleResult 
            title={results[0].title}
            description={results[0].description}
            asd={results[0].asd}
            answers={results[0].answers}
            vote= {results[0].vote}
            views={results[0].views}/>
        </div>
        <div>
          <SingleResult 
            title={results[1].title}
            description={results[1].description}
            asd={results[1].asd}
            answers={results[1].answers}
            vote= {results[1].vote}
            views={results[1].views}/>
        </div>
        <div>
          <SingleResult 
            title={results[1].title}
            description={results[1].description}
            asd={results[1].asd}
            answers={results[1].answers}
            vote= {results[1].vote}
            views={results[1].views}/>
        </div>
        <div>
          <SingleResult 
            title={results[1].title}
            description={results[1].description}
            asd={results[1].asd}
            answers={results[1].answers}
            vote= {results[1].vote}
            views={results[1].views}/>
        </div>
        <div>
          <SingleResult 
            title={results[1].title}
            description={results[1].description}
            asd={results[1].asd}
            answers={results[1].answers}
            vote= {results[1].vote}
            views={results[1].views}/>
        </div>




  </div> 

</>
)}