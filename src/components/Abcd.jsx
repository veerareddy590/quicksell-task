import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
const Abcd = ({ priority }) => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <div className="iconn">
                        {/* {icon} */}
                    </div>
                    <div>
                        <div className="priorityNo" style={{ marginBottom: "10px" }}>
                            {
                                priority == 0 ? "No Priority" : priority == 1 ? "Low" : priority == 2 ? "Medium" : priority == 3 ? "High" : "Urgent"
                            }
                        </div>
                        <span>
                            {/* 2 */}
                        </span>
                    </div>
                </div>
                <div className="plusIcon" style={{ marginLeft: "20px" }}>
                    <FaPlus />
                </div>
                <div className="3dots" style={{ marginRight: "10px" }}>
                    <HiOutlineDotsHorizontal />
                </div>
            </div>
        </>
    )
}

export default Abcd
