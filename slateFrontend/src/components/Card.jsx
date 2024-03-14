function Card(props) {
  return (
    <div>
        <div className="card">
            <img src={props.imageUrl}/>
            <h2>
                {props.name}
            </h2>
            <h2>
                {props.email}
            </h2>
        </div>
    </div>
  )

}
export default Card;
