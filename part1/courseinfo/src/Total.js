const Total = (props) => {
    let num = 0;
    props.parts.forEach(part => num += part.exercises);
    return (
        <p>Number of exercises {num}</p>
    )
  }
  
  export default Total