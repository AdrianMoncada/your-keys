import React, {useState} from 'react'
import AddImages from './AddImages'
import ImagesMain from './ImagesMain'

const ListImages = ({urls, setUrls}) => {
    /* const [urls, setUrls] = useState([]) */

    const addUrl = url => {
        if(!url.url || /^\s*$/.test(url.url)) {
            return
        }

        const newUrl = [url, ...urls]

        setUrls(newUrl)
    }

    const updateUrl = (id, newValue) => {
        if(!newValue.url || /^\s*$/.test(newValue.url)) {
            return
        }

        setUrls(prev => prev.map(item => (item.id === id ? newValue : item)))
    }

    const removeUrl = (id) => {
        const removeArr = [...urls].filter(url => url.id !== id)
        setUrls(removeArr)
    }

    const completeUrl = (id) => {
        let updatedUrl = urls.map(url => {
            if(url.id === id) {
                url.isComplete = !url.isComplete
            }
            return url
        })
        setUrls(updatedUrl)
    }

  return (
    <div>
        <AddImages onSubmit={addUrl} />
        <ImagesMain urls={urls} completeUrl={completeUrl} removeUrl={removeUrl} updateUrl={updateUrl} />
    </div>
  )
}

export default ListImages