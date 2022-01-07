import React, {useState} from 'react';

const Create = ({setArray, getArray}) => {
    const [getTitle, setTitle] = useState('')
    const [getImage, setImage] = useState('')
    const [getText, setText] = useState('')
    const [getObj, setObj] = useState({})

    function val () {
        console.log(getText, getImage, getTitle)
        setObj({
            title: getTitle,
            image: getImage,
            text: getText
        } )
        arr()
    }
    function arr () {
        setArray([...getArray, getObj])
        console.log(getArray)
    }
    return (
        <div className='homeContainer'>
            <h4>Title</h4>
            <textarea onChange={event => setTitle(event.target.value)} name="title"></textarea>
            <h4>Image</h4>
            <textarea onChange={event => setImage(event.target.value)} name="image"></textarea>
            <h4>Text</h4>
            <textarea onChange={event => setText(event.target.value)} placeholder='min length 20, max length 200' name="text"></textarea>
            <button onClick={val}>Send</button>
        </div>
    );
};

export default Create;
