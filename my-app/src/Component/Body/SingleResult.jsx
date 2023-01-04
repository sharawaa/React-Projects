import "../../Style/singleResult.css"
export default function SingleResult(props){
    
    return (
        <div id="prop">
            <section>
                <p>{props.answers}</p>
                <p>{props.views}</p>
                <p>{props.vote}</p>
            </section>

            <section id="title">
                <h5>{props.title}</h5>
                <p>{props.description}</p>
                <p>{props.asd}</p>
            </section>
        </div>
    )
}