import Part from './Part'

const Content = ({parts}) => {
    let lists = []
    parts.forEach((part, index) => lists.push(<Part part={part}  key={index}/>))
    console.log(lists)
    return (
      <div>
        {lists}
      </div>
    )
  }
  
  export default Content