import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import styled from 'styled-components'

const useStyles = makeStyles(them => ({
    btn: {
        backgroundColor: '#3b5999',
        color: '#fff',
        width: '80px',
        height: '80px',
        borderRadius: '15px',
        textAlign: 'center',
        fontSize: '20px',
        margin: '10px 30px'
    },
    resltBTN: {
        backgroundColor: '#410093',
        color: '#fff',
        width: '100px',
        height: '40px',
        borderRadius: '15px',
        display: 'block',
        margin: '20px auto',
        fontSize: '20px'

    },
    btnContent: {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',

    }

}))

const GameTest = (props) => {
    const classes = useStyles();
    const [userCH, setUserCH] = useState("")
    const [number, setNumber] = useState()
    const [computerCH, setComputerCH] = useState("")
    const [result, setResult] = useState()

    useEffect(() => {
        setNumber(Math.random())
        if (number < 0.34) {
            setComputerCH("石頭")
        }
        else if (number <= 0.67) {
            setComputerCH("剪刀")
        } else {
            setComputerCH("布")
        }
    }, [result])
    //玩家選擇剪刀按鈕
    const shearsBTN = () => {
        alert("Loading...")
        if (computerCH == "剪刀") {
            setResult("平手")
        }
        else if (computerCH == "布") {
            setResult("玩家..贏了")
        }
        else {
            setResult("玩家..輸了")
        }
        console.log(`電腦 :  ${computerCH}`)
        setTimeout(() => {
            alert(`電腦 :* ${computerCH} * 請按<<重新開始>>`)
        }, 300)
        setComputerCH("")
    }
    //玩家選擇石頭按鈕
    const rockBTN = () => {
        alert("Loading...")
        if (computerCH == "石頭") {
            setResult("平手")
        }
        else if (computerCH == "剪刀") {
            setResult("玩家..贏了")
        }
        else {
            setResult("玩家..輸了")
        }
        console.log(`電腦 :  ${computerCH}`)
        setTimeout(() => {
            alert(`電腦 :* ${computerCH} * 請按<<重新開始>>`)
        }, 500)
        setComputerCH("")
    }
    //玩家選擇布按鈕
    const clothBTN = () => {
        alert("Loading...")
        if (computerCH == "布") {
            setResult("平手")
        }
        else if (computerCH == "石頭") {
            setResult("玩家..贏了")
        }
        else {
            setResult("玩家..輸了")
        }
        console.log(`電腦 :  ${computerCH}`)
        setTimeout(() => {
            alert(`電腦 :* ${computerCH} * 請按<<重新開始>>`)
        }, 500)
        setComputerCH("")
    }
    const resulthBTN = () => {
        setResult("")
    }
    const startBTN = {
        color: '#fff',
        fontSize: '20px',
        width: '200px',
        backgroundColor: '#000',
    }
    const divBackground = {
        display: 'block',
        backgroundColor: '#8cf',
        margin: '0px auto'
    }
    const [chColor, setChcolor] = useState(true)
    const [chBackColor, setChBackcolor] = useState(true)
    const changeColor = () => {
        if (chColor) {
            setChcolor(false)
        } else {
            setChcolor(true)
        }
    }
    const changeBackColor = () => {
        if (chBackColor) {
            setChBackcolor(false)
        } else {
            setChBackcolor(true)
        }
    }


    return (
        <div>
            <h3>**猜拳遊戲</h3>
            <div className={classes.btnContent}>
                <button className={classes.btn} type="button" onClick={shearsBTN}>剪刀</button>
                <button className={classes.btn} type="button" onClick={rockBTN}>石頭</button>
                <button className={classes.btn} type="button" onClick={clothBTN}>布</button>
            </div>
            <button className={classes.resltBTN} type="button" onClick={resulthBTN}>重新開始</button>

            <StyledComponents p={chColor} back={chBackColor} result={result} />
            <button type="button" style={divBackground} onClick={changeColor}> 換背上景色 </button>
            <button type="button" style={divBackground} onClick={changeBackColor}> 換背下景色 </button>
        </div>
    )
}
const Element = ({ red, className, result }) => {
    return (
        <div className={className}>
            <div className="element__description" >
                <h3 > 結果 :{result} {}</h3>

            </div>
        </div>
    )
}

export const StyledComponents = styled(Element)`
        height: 200px;
        background-color: ${props => (props.back ? '#fff' : '#f00')};
    .element__description {
        padding: 20px;
        font-size: 30px;
        background-color: ${props => (props.p ? '#e4405f' : '#00c300')};
    }
}
`
export default GameTest