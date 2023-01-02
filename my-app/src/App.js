import logo from './logo.svg';
import './App.css';



function App() {

  const name ="sharva"
const myStyle ={
  color: "red",
  fontSize: "50px",
}

const customStyle ={
  color: "red",
  fontSize: "20px",
}


  function getGreeting(name){
    if(name==="sharva"){
      return(
        <div className='App'>
        <h1 style={customStyle}>Hello, {name}!</h1>

        </div>
      );
    }
return <div className='App'>

  
<h1 style={myStyle}> Hello , {name}</h1>


</div>


  }
  console.log(name)
  
}


export default App;
