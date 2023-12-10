import React, { useState } from 'react'
import './Navbar.css'
import { RiEqualizerLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const Navbar = ({ getGroupAndStatus }) => {
    const [up, setUp] = useState(false);
    const [show, setShow] = useState(true);

    const handleClick = () => {
        setUp(!up); setShow(!show)
    }
    return (

        <>
            <nav className='nav' onClick={handleClick}>
                <div style={{ border: "2px solid green;" }}>
                    <RiEqualizerLine size={15} style={{ marginRight: "10px" }} />
                    <span style={{ marginRight: "10px" }}> Display</span>
                    {up ? <FaAngleUp size={15} /> : <FaAngleDown size={15} />}


                </div>

            </nav>

            {
                !show ? <div className='below'>

                    <div>
                        <div className='subsec'> <span className='t'>Grouping</span>
                            <select name="" id="" onChange={handleChange}>
                                <option value="Status"> Status &nbsp;</option>
                                <option value="jj"> jj &nbsp;</option>
                            </select>

                        </div>
                    </div>

                    <div>
                        <div className='subsec'> <span className='t'>Ordering</span>
                            &nbsp;<select name="" id="">
                                <option value="Priority">  Priority &nbsp; </option>
                            </select>
                        </div>
                    </div>

                </div>



                    : <></>
            }

        </>
    )
}

export default Navbar
