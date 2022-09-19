import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [dataUser, setDataUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const request = async () => {
        const response = await fetch(url);
        const result = await response.json();
        setDataUser(result);
        setIsLoading(false)
        }
        request();
    }, [url]);
    return [dataUser, isLoading]
}

export default useFetch