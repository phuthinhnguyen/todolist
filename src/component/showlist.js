import { GiCheckMark } from 'react-icons/gi';
function Showlist(props){
    function doneList(e,item){
        e.preventDefault();
        props.doneList(item)
    }
    return(
        <div>
            <table style={{width:"100%"}}>
                <tbody>
                    {props.toDoList.map((item,index)=>(
                        item.status?
                        (<tr key={index} style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
                            <td>{item.name}</td>
                            <td><button onClick={(e)=>doneList(e,item)}>x</button></td>
                        </tr>):
                        (<tr key={index} style={{backgroundColor:"gray",width:"100%",display:"flex",justifyContent:"space-between"}}>
                            <td style={{textDecoration:"line-through"}}><GiCheckMark/> {item.name}</td>
                            <td><button onClick={(e)=>doneList(e,item)}>x</button></td>
                        </tr>)
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Showlist;