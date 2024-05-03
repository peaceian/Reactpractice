//React中，選值是使用標籤value上的屬性定義select
import { useState } from "react";
function MySelect(){
    const [fruit,setFruit] = useState('');
    const handleChange = (event)=>{
        setFruit(event.target.value)
    }
    return(
        <form>
            <select value={fruit} onChange={handleChange}>
                <option value="Apple">Apple</option>
                <option value="Banana">Banana</option>
                <option value="Cherry">Cherry</option>
            </select>
        </form>
    )

}
export default MySelect;
//取值用select的value