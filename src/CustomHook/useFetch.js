// The fetch logic may be needed in other components as well, so we will extract that into a custom Hook.
// Move the fetch logic to a new file to be used as a custom Hook:
import { useState,useEffect } from "react";
const useFetch = (url) => {
    const [data,setData] = useState(null);
    useEffect(
        () => {
            fetch(url)
            .then((res)=>res.json())
            .then((data)=>setData(data));
        },[url]
    );
    return [data];
};
export default useFetch;