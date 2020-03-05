import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import onehundred from './img/money/Taiwan100.jpg'
import fivehundred from './img/money/Taiwan500.jpg'
import thousand from './img/money/Taiwan1000.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandRock } from '@fortawesome/free-solid-svg-icons'
import { faHandPeace } from '@fortawesome/free-solid-svg-icons'
import { faHandPaper } from '@fortawesome/free-solid-svg-icons'

import { Button } from 'react-bootstrap';



const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '10px 0',
        fontFamily: '微軟正黑體'
    },
    btn: {
        backgroundColor: 'red',
        color: '#fff',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        textAlign: 'center',
        fontSize: '20px',
        margin: '10px 30px',
        fontFamily: '微軟正黑體'

    },
    okBtn: {
        backgroundColor: '#bd081c',
        color: '#fff',
        width: '100%',
        textAlign: 'center',
        fontSize: '20px',
        margin: '10px 30px'
    },

    dollarBtn: {
        width: '20%',
        padding: '0',
    }

})

const FingerGame = () => {
    const classes = useStyles()

    const [total, setTotal] = useState(1000);
    const [sum, setSum] = useState(0)
    const [bet, setBet] = useState(0)
    const [number, setNumber] = useState()
    const [computerCH, setComputerCH] = useState("")
    const [result, setResult] = useState("")

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

    const shearsBTN = () => {
        setResult("shearsBTN")
        alert("Loading...")
        if (computerCH == "剪刀") {
            setResult("平手")
            setTotal(total + sum)
            setSum(0)
        }
        else if (computerCH == "布") {
            setResult(" 玩家..贏了")
            setTotal(total + (sum * 2))
            setSum(0)
        }
        else {
            setResult(" 玩家..輸了")
            setTotal(total)
            setSum(0)
        }
        setTimeout(() => {
            alert(`電腦 :* ${computerCH} * 請按<<重新開始>>`)
        }, 300)
        setComputerCH("")
    }
    const rockBTN = () => {
        setResult("rockBTN")
        alert("Loading...")
        if (computerCH == "石頭") {
            setResult("平手")
            setTotal(total + sum)
            setSum(0)
        }
        else if (computerCH == "剪刀") {
            setResult(" 玩家..贏了")
            setTotal(total + (sum * 2))
            setSum(0)
        }
        else {
            setResult(" 玩家..輸了")
            setTotal(total)
            setSum(0)
        }
        setTimeout(() => {
            alert(`電腦 :* ${computerCH} * 請按<<重新開始>>`)
        }, 500)
        setComputerCH("")
    }
    const clothBTN = () => {
        setResult("clothBTN")
        alert("Loading...")
        if (computerCH == "布") {
            setResult("平手")
            setTotal(total + sum)
            setSum(0)
        }
        else if (computerCH == "石頭") {
            setResult(" 玩家..贏了")
            setTotal(total + (sum * 2))
            setSum(0)
        }
        else {
            setResult(" 玩家..輸了")
            setTotal(total)
            setSum(0)
        }
        setTimeout(() => {
            alert(`電腦 :* ${computerCH} * 請按<<重新開始>>`)
        }, 500)
        setComputerCH("")
    }

    const clearBTN = () => {
        setBet(0)
    }

    const okBTN = () => {
        if (bet > total) {
            alert("金額有誤!!")
            setBet(0)
            console.log(bet)
        } else {
            setTotal(total - bet)
            setSum(bet)
            setBet(0)
            console.log("sum: ", sum)
        }
    }
    const resulthBTN = () => {
        total == 0 ? setTotal(1000) : "";
        setResult("")
    }

    const oneHundred = {
        width: '25%',
        height: '100%',
        backgroundImage: `url(${onehundred})`
    }
    const BTNtest = (e) => {
        let id = e.target.id
        switch (id) {
            case "b100":
                setResult("")
                setBet(bet + 100)
                break;
            case "b500":
                setResult("")
                setBet(bet + 500)
                break;
            case "b1000":
                setResult("")
                setBet(bet + 1000)
                break;
        }
    }

    return (
        <div style={{ fontFamily: '微軟正黑體', padding: '50px 0 ' }}>
            <div className={classes.root}>
                <Button variant="outline-dark" onClick={shearsBTN}>
                    <FontAwesomeIcon icon={faHandPeace} size="6x" />
                </Button>
                <Button variant="outline-dark" onClick={rockBTN}>
                    <FontAwesomeIcon icon={faHandRock} size="6x" />
                </Button>
                <Button variant="outline-dark" onClick={clothBTN}>
                    <FontAwesomeIcon icon={faHandPaper} size="6x" />
                </Button>
            </div>
            <div className={classes.root}>
                <h2 style={{ textAlign: 'center' }}>您下的金額$:{sum}</h2>
                <Button className={classes.btn} variant="contained" color="secondary" onClick={okBTN}>
                    確定
                </Button>
            </div>

            <h4 style={{ textAlign: 'center' }}>餘額:{total} 下注:{bet}</h4>
            <div className={classes.root}>
                <Button className={classes.dollarBtn} variant="outline-light">
                    <img id="b100" onClick={BTNtest} src={onehundred} style={{ width: '100%' }} />
                </Button>
                <Button className={classes.dollarBtn} variant="outline-light">
                    <img id="b500" onClick={BTNtest} src={fivehundred} style={{ width: '100%' }} />
                </Button>
                <Button className={classes.dollarBtn} variant="outline-light">
                    <img id="b1000" onClick={BTNtest} src={thousand} style={{ width: '100%' }} />
                </Button>
            </div>
            <div style={{ display: 'flex', justifyContent: "space-between " }}>
                <Button size="lg" variant="outline-success" onClick={clearBTN} style={{ display: 'block', margin: '0 auto' }}>
                    重新下注
                </Button>
                <h4 style={{ textAlign: 'end' }}>結果:{result}</h4>
                <Button size="lg" variant="outline-danger" onClick={resulthBTN} style={{ display: 'block', margin: '0 auto' }}>
                    重新開始
                </Button>
            </div>
        </div>
    )
}
export default FingerGame;