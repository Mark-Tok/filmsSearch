import React, {useEffect} from "react";
import {deleteTag} from './../store/tags/actions'
import {useDispatch, useSelector} from 'react-redux';

function Tags(props) {
    const dispatch = useDispatch();
    const tags = useSelector(state => state.tags);

    useEffect(() => {
        if(tags.length !== 0) {
            props.back(true)
        }
    })

    return (
        <div className='tags-block'>
            {
               tags.length != 0 ?
               tags.map((item, index, array) => {
               return <span key={index}>#{item}
               <a onClick={()=>{dispatch(deleteTag(index,array))}}><i class="fa fa-times" aria-hidden="true"></i></a>
               </span>
               }) : null
            }
        </div>
    )
}

export default Tags;