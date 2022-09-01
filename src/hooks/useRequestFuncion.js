import {useState, useEffect} from 'react';

const useRequestFuction = () => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [controller, setcontroller] = useState();

    const axiosFetch = async (configObj) => {
        const {
            axiosInstance,
            method,
            url,
            requestConfig = {}
        } = configObj;

        try {
            setLoading(true)
            const ctrl = new AbortController();
            setcontroller(ctrl);
            const res = await axiosInstance[method.toLowerCase()](url, {
                ...requestConfig,
                signal: ctrl.signal
            });
            console.log(res)
            setResponse(res.data)
        } catch (err) {
            console.log(err.message)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        console.log(controller)

        return () => controller && controller.abort();
    }, [controller]);
    
    return [response, error, loading, axiosFetch]
}


export default useRequestFuction