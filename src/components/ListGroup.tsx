import { MouseEvent } from "react";


function ListGroup() {
    let items = ['New York', 'Hong Kong', 'Chicago', 'Monrovia']
    const handleClick =(event: MouseEvent) =>console.log(event)
  return (
    <>
    <h1> List</h1> 
    {  items.length === 0 &&  <p> item not foun</p> }
    <ul>
    {items.map((item)=>(
       <li className="list-group-item" key={item} onClick={handleClick}>
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

















 