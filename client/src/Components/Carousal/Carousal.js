import { Fragment, useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux"
import "./index.css"
import Modal from "../Modal/Modal"
import store from "../../Redux/store"
import {fetchLaptops} from "../../Redux/laptopAction"


function Showcase() {
    const modalRef = useRef(null)
    // let [laptops, setLaptops] = useState([])
    let laptops = useSelector(state => state.laptopReducer.laptops)
    useEffect(async () => {
        store.dispatch(fetchLaptops)
    }, [])

    const openModal = () => {
        modalRef.current.style.display = "block";
    }
    return <Fragment>
        <div className="scrollmenu">
            {
                laptops.map((laptop) => {
                    return <span className="image-container">
                        <img src={laptop.img} alt="Italian Trulli" onClick={openModal} ></img>
                        <span class="centered">{laptop.name}</span>
                        <Modal ref={modalRef} txt={laptop.description}></Modal></span>
                })
            }
        </div>
    </Fragment>
}

export default Showcase