import { Fragment, useRef, useEffect, useState } from "react";
import "./index.css"
import Modal from "../Modal/Modal"
import axios from "axios"


function Showcase() {
    const modalRef = useRef(null)
    let [laptops, setLaptops] = useState([])
    useEffect(async () => {
        const getLaptops = async () => {
            const { data } = await axios.get("http://localhost:3001/laptop-management/laptops")
            setLaptops(data.result)
        }
        getLaptops()
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