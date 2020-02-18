import React, { useState } from "react";
import InputSearch from './Inputsearch';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Tags from './Tags';
import Tabs from './Tabs';
import data from './../assets/films';
import {deleteAllTags} from './../store/tags/actions'
import {backToStart} from './../store/films/actions'
import {useDispatch} from 'react-redux'


function MainComponent() {
    const [loader, setLoader] = useState(false);
     const dispatch = useDispatch();
    const handlerLoader = () => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 2000)
    }
    const [backState, handlerBackState] = useState(false)

    const back = () => {
        dispatch(deleteAllTags())
        dispatch(backToStart(data))
        handlerBackState(false)
    }
    return (
        <React.Fragment>
            <InputSearch value={backState} back={handlerBackState} loader={handlerLoader} />
            {backState && <button className="back-button" onClick={() => {back()}}>
                <i className="fa fa-arrow-left" aria-hidden="true"></i> НАЗАД
                </button>}
            <Tags back={handlerBackState}/>
            <div className="films-list">
                {loader && <Loader
                    type="Triangle"
                    color="#494949"
                    className="loader"
                    height={500}
                    width={500}
                    timeout={2000}
                />}
                <Tabs back={handlerBackState}/>
            </div>
        </React.Fragment>
    )
}
export default MainComponent;