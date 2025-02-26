
const Pets = (props) => {
    return(
        <div className="details">
            <div className="img">
                <img src={props.url} alt="" />
            </div>
            <div className="info">
                <h1>{props.name}</h1>
                <h2>{props.breed}</h2>
            </div>
        </div>
    );
}

export default Pets;