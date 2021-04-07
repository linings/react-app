import { useEffect, useState } from "react";
import getData from "../utils/getData";

const useFetch = (tableName, dependancy) => {
    const [state, setState] = useState([]);
    
    useEffect(() => {
        getData(tableName)
            .then(result => {
                setState(result);
            })
    }, [dependancy]);
    return state;
}

export default useFetch;