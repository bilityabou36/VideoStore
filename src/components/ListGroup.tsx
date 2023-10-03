import { useState } from "react"



function ListGroup() {
    let items = ['New York', 'Hong Kong', 'Chicago', 'Monrovia']
    const [selected, setSelected] = useState(-1)
    
    
  return (
    <>
    <h1> List</h1> 
    {  items.length === 0 &&  <p> item not foun</p> }
    <ul>
    {items.map((item, index)=>(
       <li className={
        selected === index ? "list-group-item active"
        : "list-group-item"
     
     


       }>
        {item}
        </li>
      
    ))}
    </ul>
     </>

  );
}

export default ListGroup;




// {  items.length === 0 ?  <p> item not foun</p> : null} 
// {  items.length === 0 &&  <p> item not foun</p> } better conditional redering

















 