import "../../Style/logo.css"
export default function Logo(props){
    
    return (
        <div>
            
            <section id="logo">
            <img id="img" src={props.img} alt="" />
            <p>{props.description1}</p>
               
            </section>
        </div>
    )
}