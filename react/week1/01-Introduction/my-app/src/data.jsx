import { useState, useEffect} from 'react'

function useFetchData(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch("https://api.github.com/users")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(`Error: ${err}`));
    }, [url]);

    return { data };
}

export default useFetchData




