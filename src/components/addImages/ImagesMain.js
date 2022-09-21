import React, {useState} from 'react'
import AddImages from './AddImages'
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import styled from 'styled-components';

const DivContainerUrl = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    padding: 10px 0;
    margin: 10px 0;
    background-color: rgba(216, 216, 216, 1);
    /* border-radius: 5px; */

    .delete-icon {
        margin-right: 5px;
        font-size: 25px;
        cursor: pointer;
    }

    .edit-icon {
        font-size: 25px;
        cursor: pointer;
        margin-right: 5px;
    }
`

const DivText = styled.div`
    font-size: 15px;
    margin-left: 10px;
`

const ImagesMain = ({urls, completeUrl, removeUrl, updateUrl}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    })

    const submitUpdate = value => {
        updateUrl(edit.id, value)
        setEdit({
            id: null,
            value: ""
        })
    }

    if(edit.id) {
        return <AddImages edit={edit} onSubmit={submitUpdate} />
    }
    
  return urls.map((url, index) => (
    <DivContainerUrl className={url.isComplete ? "todo-row complete" : "todo-row"} key={index}>
        <DivText key={url.id} onClick={() => completeUrl(url.id)} >
            {url.url}
        </DivText>
        <div className='icons'>
            <RiCloseCircleLine onClick={() => removeUrl(url.id)} className="delete-icon" />
            <TiEdit onClick={() => setEdit({id: url.id, title: "Null", value: url.url})} className="edit-icon" />
        </div>
    </DivContainerUrl>
  ))
}

export default ImagesMain