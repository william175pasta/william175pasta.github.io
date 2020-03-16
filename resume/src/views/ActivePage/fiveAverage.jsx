import React, { useState, useContext } from "react";

let totalList = [];
let num = 0;
let result = 0

const FiveAverage = () => {
    const [currentValue, setCurrentValueHanle] = useState('');
    const [total, setSumHandle] = useState(0);
    const [oneday, setoneday] = useState(0);
    const [twoday, settwoday] = useState(0)
    const [threeday, setthreeday] = useState(0)
    const [fourday, setfourday] = useState(0)
    const [fiveday, setfiveday] = useState(0)
    const [values, setvalues] = useState([])
    const [avg, setavg] = useState(0)


    const numberChangehandler1 = (e) => {
        switch (e.target.id) {
            case "1":
                setoneday(e.target.value);
                break;
            case "2":
                settwoday(e.target.value);
                break;
            case "3":
                setthreeday(e.target.value);
                break;
            case "4":
                setfourday(e.target.value);
                break;
            case "5":
                setfiveday(e.target.value);
                break;
        }
        console.log("oneday: " + e.target.id)
    }

    // 輸入當前值
    const onChnageHandle = (e) => {
        setCurrentValueHanle(e.target.value);
    };

    // 點擊按鈕開始計算累加處裡
    const onClickHandle = () => {
        let value = parseFloat(currentValue);
        console.log(currentValue)
        console.log(typeof (value))

        if (value) {
            totalList.push(value);
            if (totalList.length >= 0 && totalList.length < 6) {
                num += totalList[totalList.length - 1];
                result = (num / totalList.length).toFixed(2)
                setSumHandle(result);
            }
            setCurrentValueHanle('');
        } else {
            alert('已輸入五筆了');
        }
    };


    const AverageBTN = () => {

        if (
            oneday === 0 || isNaN(oneday) ||
            twoday === 0 || isNaN(oneday) ||
            threeday === 0 || isNaN(oneday) ||
            fourday === 0 || isNaN(oneday) ||
            fiveday === 0 || isNaN(oneday)
        ) {
            alert("請確實輸入...")
        }
        else {
            values.push(oneday, twoday, threeday, fourday, fiveday)
            let sum = 0
            for (let i = 0; i < values.length; i++) {
                let n = parseFloat(values[i])
                console.log("n:" + n)
                sum = sum + n
            }
            let avgnumber = (sum / values.length).toFixed(2)
            console.log("sum:" + sum)
            console.log("avgnumber:" + avgnumber)
            console.log(values)
            setavg(avgnumber)
        }
    }

    const AverageClearBTN = () => {
        setoneday(0)
        settwoday(0)
        setthreeday(0)
        setfourday(0)
        setfiveday(0)
        setavg(0)
    }
    return (
        <div>
            <h3>**5日平均線計算</h3>

            <span>5MA顯示: {total} </span>
            <input type="text" placeholder="請輸入數字sun" value={currentValue} onChange={onChnageHandle} />
            <button onClick={onClickHandle}>計算</button>
            <br />
            <hr />
            <input type="text" placeholder="請輸入第1筆數" id="1" onChange={numberChangehandler1} />
            <input type="text" placeholder="請輸入第2筆數" id="2" onChange={numberChangehandler1} />
            <input type="text" placeholder="請輸入第3筆數" id="3" onChange={numberChangehandler1} />
            <input type="text" placeholder="請輸入第4筆數" id="4" onChange={numberChangehandler1} />
            <input type="text" placeholder="請輸入第5筆數" id="5" onChange={numberChangehandler1} />

            <button onClick={AverageBTN}> 計算5MA</button>
            <button onClick={AverageClearBTN}> Clear</button>

            <h2>{`5MA : ${avg}`}</h2>
        </div>
    )



}
export default FiveAverage