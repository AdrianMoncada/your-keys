import React from 'react';
import axios from '../../apis/axiosRequest';
import useRequest from '../../hooks/useRequest';

const TestRequest = () => {
    const [response, error, loading] = useRequest({
        axiosInstance: axios,
        method: 'GET',
        url: 'pokemon/ditto',
        requestConfig: {
            headers: {
                'Content-Language': 'en-US',
            },
            data: {

            }
        }
    })


    /* 
        endpoint: /category
        me trae todas las categorias

        endpoint: /category/{id}
        me trae la categoria en especifica

        ----------------------------------------

        endpoint: /vehicle
        me trae array de todos los vehiculos

        endpoint: /vehicle/{id}
        me trae el vehiculo en especifico

        -----------------------------------------

        endpoint: /vehicle/city/{id}
        me trae una ciudad en especifica
    */
    
  return (
    <div>
        <h2>Nose que hago</h2>
        {
            loading && <p>Loading</p>
        }

        {
            !loading && error && <p>{error}</p>
        }
        {
            !loading && !error && response && <p>{console.log(response)}</p>
        }
    </div>
  )
}

export default TestRequest