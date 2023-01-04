export default function Logo(props){
    
    return (
        <div id="logo">
            <section>
            <img src={props.img} alt="" />
                <p>{props.description1}</p>
               
            </section>
        </div>
    )
}