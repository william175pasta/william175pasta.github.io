import React, { useState, useContext } from "react";

import Button from '@material-ui/core/Button';

import { AppContext } from '../../../views/ActivePage/index'

const TestUseContext = () => {

    const { myName, myFriendName, titleName } = useContext(AppContext)

    const [useTest, setUseTest] = useState("換換換")
    const [open, setOpen] = useState(true)

    const ButtonOnClick = () => {

        if (open) {
            setUseTest("變變變")
            setOpen(false)
        } else {
            setUseTest("換換換")
            setOpen(true)
        }
    }
    return (
        <div>

            <Button type="button" variant="contained" color="primary" onClick={ButtonOnClick}>{useTest}</Button>
            <Button variant="outlined" color="primary">
                {myName} &{myFriendName}
            </Button>
            <h1>{titleName[1]}</h1>
        </div>
    )
}
export default TestUseContext