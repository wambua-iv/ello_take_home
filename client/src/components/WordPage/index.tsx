import React from 'react'
import { useParams } from "react-router-dom";


const SingleWordView: React.FC = () => {
    const { word } = useParams();
    console.log(word);
    
    return(
        <div className='single_word'>
        {word}
        </div>
    )
}
export default SingleWordView;