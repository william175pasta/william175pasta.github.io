import React, { useState, useContext } from "react";

import Button from '@material-ui/core/Button';
import { AppContext } from '../../../views/ActivePage/index'
import { Link } from "react-router-dom";


const TestUseState = () => {
    const { myName, myFriendName, titleName } = useContext(AppContext)  //外部傳進來的

    const [useTest, setUseTest] = useState("姓名開關");
    const [open, setOpen] = useState(true);

    const ButtonOnClick = () => {

        if (open) {
            setUseTest(myName)
            setOpen(false)
        } else {
            setUseTest(myFriendName)
            setOpen(true)
        }
    }
    return (
        <div>
            <Button type="button" variant="contained" color="secondary" onClick={ButtonOnClick}>{useTest}</Button>
            <Link to="/About">
                <Button type="button" variant="contained" color="secondary"> Go_About </Button>
            </Link>
            <h1>{titleName[0]}</h1>
        </div>
    )
}
export default TestUseState