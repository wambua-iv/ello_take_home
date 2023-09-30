import React from 'react'
import { useParams } from "react-router-dom";


const SingleWordView: React.FC = () => {
    const { word } = useParams();
    return(
        <>
        {word}
        </>
    )
}
export default SingleWordView;