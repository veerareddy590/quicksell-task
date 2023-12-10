import { useEffect, useState } from 'react'
import './App.css'
// import Navbar from './components/Navbar/Navbar'
import { RiEqualizerLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import './components/Navbar/Navbar.css'
import axios from 'axios'
import PrioirityBased from './components/PrioirityBased/PrioirityBased';
import Abcd from './components/Abcd';

function App() {
    // navbar start
    const [up, setUp] = useState(false);
    const [show, setShow] = useState(true);

    const handleClick = () => {
        setUp(!up); setShow(!show)
    }

    // navbar end

    const [grouping, setGrouping] = useState("Status");
    const [ordering, setOrdering] = useState("Priority");

    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);

    // const handleChange = (e) => {
    //     if (e.target.name === "Grouping") {
    //         setGrouping(e.target.value);
    //     } else {
    //         setOrdering(e.target.value)
    //     }
    //     console.log(grouping, ordering)
    // }

    useEffect(() => {
        axios.get('https://api.quicksell.co/v1/internal/frontend-assignment ')
            .then((res => {
                // console.log(res.data)
                setTickets(res.data['tickets'])
                setUsers(res.data['users']);
            }))
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <>
            {/* <Navbar get={getGroupAndStatus} /> <br /><br /><br /><br /> */}
            {/* Navbar start */}

            <nav className='nav' onClick={handleClick}>
                <div>
                    <RiEqualizerLine size={15} style={{ marginRight: "10px" }} />
                    <span style={{ marginRight: "10px" }}> Display</span>
                    {up ? <FaAngleUp size={15} /> : <FaAngleDown size={15} />}


                </div>

            </nav>

            {
                !show ? <div className='below'>

                    <div>
                        <div className='subsec'> <span className='t'>Grouping</span>
                            <select name="Grouping" style={{ borderRadius: "8px", padding: "3px" }}>
                                <option value="Status"> Status &nbsp;</option>
                            </select>

                        </div>
                    </div>

                    <div>
                        <div className='subsec'> <span className='t'>Ordering</span>
                            &nbsp;<select name="Ordering" style={{ borderRadius: "8px", padding: "3px" }}>
                                <option value="Priority">  Priority &nbsp; </option>
                            </select>
                        </div>
                    </div>

                </div>

                    : <></>
            }

            {/* Navbar end */}
            <div className='outer'>
                <div className='innerr'>
                    <div>
                        <Abcd priority={0} />
                        <PrioirityBased priorityValue={0} tick={tickets} /> <br />
                    </div>
                    <div><Abcd priority={1} />
                        <PrioirityBased priorityValue={1} tick={tickets} /><br /></div>
                    <div>
                        <Abcd priority={2} />
                        <PrioirityBased priorityValue={2} tick={tickets} /><br />
                    </div>
                    <div>
                        <Abcd priority={3} />
                        <PrioirityBased priorityValue={3} tick={tickets} /><br />
                    </div>
                    <div>
                        <Abcd priority={4} />
                        <PrioirityBased priorityValue={4} tick={tickets} /><br />
                    </div>



                </div>
            </div>
        </>
    )
}

export default App
