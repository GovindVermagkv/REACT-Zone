import React from "react";
import '../App.css';

const { useState } = React;

function Addemail() {
    const [theArray, setTheArray] = useState([]);
    const addEntryClick = () => {
        setTheArray([...theArray, ` ${emaildata.inputvalue}`]);
    };



    const [emaildata, setCommentdata] = useState({
        'inputvalue': "",
        'email':"sonygovind.gkv740@gmail.com",
    })


    const addEntryClick2 = (e) => {
        e.preventDefault();
        console.log(emaildata);
        const { name, value } = e.target;

        setCommentdata({ ...emaildata, [name]: value })
    }



    return [
        <>
            <div id="inputarea">
                <input type={"email"} onChange={addEntryClick2} name='inputvalue' value={emaildata.inputvalue} placeholder='add email or people' />
                <button onClick={addEntryClick} >Invite</button>
                <div>{theArray.map(entry =>
                    <div >{entry}
                    <select id="valuearea">
                        <option>can edit</option>
                        <option>can view</option>
                        <option>can comment</option>
                        <option>full access</option>
                    </select>
                    </div>
                    
                )}
                </div>
            </div>
        </>
    ];
}

export default Addemail;   