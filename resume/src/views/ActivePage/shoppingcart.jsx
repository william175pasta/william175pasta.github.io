import * as React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Button from '@material-ui/core/Button';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(them => ({
    root: {
        padding: '20px',
    },
    btnP: {
        fontSize: '18px',
    },
    a: {
        cursor: 'pointer',
        width: '50px',
        height: '30px',
        textAlign: 'center',
        backgroundColor: 'black',
        fontSize: '18px',
        color: '#fff',
        margin: '1px',
    },
    size: {
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: '18px',
        color: '#ccc',
    },
    formControl: {
        minWidth: 200,
    },
}));

const Cart = {
    size: ['XS', 'S', 'M', 'L', 'XL'],
    number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    colors: [
        { color: 'floralwhite', chinese: '米白', id: 'pic01' },
        { color: 'darkgrey', chinese: '麻灰', id: 'pic02' },
        { color: 'darkred', chinese: '暗紅', id: 'pic03' },
        { color: 'darkolivegreen', chinese: '深綠', id: 'pic04' },
        { color: 'steelblue', chinese: '藏青', id: 'pic05' },
    ],
};
const ProductContemt = {
    price: [199, 300], //初始價錢
    discountnumber: [1, 3, 5], //件數
    discount: [89, 79], //總價折扣數
    commodity: ['無側縫圓領背心-男', '城市印花T恤-男', '無側縫V領T恤-男', '牛仔長袖襯衫-男'],
};

const imageUrl = './img/picColor/pic01.jpg';

const ShoppingCart = () => {
    // 一件 199元 , 3件89折 , 5件79折
    const classes = useStyles();
    const [selectSize, setselectSize] = useState('');
    const [selectNumber, setselectNumber] = useState(Cart.number[0]);
    const [selectColor, setselectColor] = useState('');
    const [total, settotal] = useState(0);
    const [carContent, setcarContent] = useState('');
    const [allnumber, setallnumber] = useState([]);

    const handlerChangeNumber = event => {
        let value = event.target.value;
        console.log('value(數量):' + value);
        const pice = 199;
        setselectNumber(value);
        settotal(pice * value);
    };
    const sizeOnClick = e => {
        let selectSize = event.target.name;
        setselectSize(selectSize);
        console.log('size : ' + selectSize);
    };
    const colorOnClick = e => {
        let color = e.target.name;

        setselectColor(color);
        console.log('color : ' + color);

        let pic = document.querySelector('#picChangeBlock');
        let n = e.target.id;
        pic.src = './img/picColor/' + n + '.jpg';
        console.log(n);
    };

    //購物車按鈕
    const shoppingcartOnClick = () => {
        if (selectNumber == undefined || selectNumber == 0) {
            alert('請確認輸入的 數量!');
        } else if (selectSize == undefined || selectSize == '') {
            alert('請確認輸入的 size!');
        } else if (selectColor == undefined || selectColor == '') {
            alert('請確認輸入的 Color!');
        } else {
            const shoppingcart = ` ( 尺寸:${selectSize} ,數量:${selectNumber}件 顏色:${selectColor})`;
            console.log(shoppingcart);
            setcarContent(shoppingcart.concat(carContent));
            let number = parseFloat(selectNumber); //把 selectNumber 轉成 數字型別
            let newarry = allnumber.push(number); //把輸入的 件數 加入allnumber陣列裡
            console.log(allnumber);
            setselectSize();
            setselectNumber(Cart.number[0]);
            setselectColor();
            settotal();
        }
    };
    //清除購物車按鈕
    const shoppingcartClearOnClick = () => {
        setcarContent('');
        setallnumber([]);
        console.log('carContent:' + carContent);
        console.log(allnumber);
    };

    //結帳按鈕
    const CheckoutBTN = () => {
        if (selectColor == '' || selectSize == '' || carContent == '') {
            alert('請重新輸入 尺寸 數量 顏色 謝謝 !!!');
            return;
        }
        let price = 199,
            sum = 0;
        for (let i = 0; i < allnumber.length; i++) {
            sum = sum + allnumber[i];
            console.log('sum:  ' + sum);
        }
        if (sum > 2 && sum < 5) {
            settotal(Math.round(price * sum * 0.89));
        } else if (sum > 5) {
            settotal(Math.round(price * sum * 0.79));
        } else {
            settotal(Math.round(price * sum));
        }
        setselectSize('');
        setselectNumber(0);
        setselectColor('');
        setcarContent('');
        setallnumber([]);
        alert('你的總金額計算中....');
        setTimeout(() => {
            alert('你的總金額在下方');
        }, 1000);
        return;
    };

    return (
        <div style={{ padding: '30px 0' }}>
            <CssBaseline />
            <Container maxWidth="sm" style={{ backgroundColor: '#fff' }}>
                <div className={classes.root}>
                    <h3>**購物車測試</h3>
                    <Grid item xs={12} sm={12}>
                        <Grid item xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <h4>{ProductContemt.commodity[3]} </h4>
                                </div>
                                <div>
                                    <s style={{ fontSize: '14px' }}>$ {ProductContemt.price[1]}</s>
                                    <h4 style={{ color: 'red' }}>
                                        NT$:
                                        {ProductContemt.price[0]}
                                    </h4>
                                </div>
                            </div>
                            <hr />
                            <h5>
                                {ProductContemt.discountnumber[1]} 件{ProductContemt.discount[0]} 折
                                {ProductContemt.discountnumber[2]} 件{ProductContemt.discount[1]} 折
                            </h5>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <h5>Size: </h5>
                            <div className={classes.size}>
                                {Cart.size.map((item, index) => {
                                    return (
                                        <a
                                            className={classes.a}
                                            onClick={sizeOnClick}
                                            name={item}
                                            key={index}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            {item}
                                        </a>
                                    );
                                })}
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <h5>QTY : </h5>
                            <div className={classes.size}>
                                <select
                                    value={selectNumber}
                                    onChange={handlerChangeNumber}
                                    style={{ width: '80%', height: '30px' }}
                                >
                                    {Cart.number.map((item, index) => {
                                        return (
                                            <option value={item} key={index}>
                                                {item}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <h5>Color : </h5>
                            <div className={classes.size}>
                                {Cart.colors.map((item, index) => {
                                    const { color, chinese, id } = item;
                                    return (
                                        <a
                                            className={classes.a}
                                            id={id}
                                            onClick={colorOnClick}
                                            style={{ backgroundColor: `${color}`, textDecoration: 'none' }}
                                            name={chinese}
                                            key={index}
                                        ></a>
                                    );
                                })}
                            </div>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            style={{ display: 'flex', justifyContent: 'space-around', margin: '30px 0' }}
                        >
                            <h5>Size : {selectSize}</h5>
                            <h5>QTY : {selectNumber}</h5>
                            <h5>Color : {selectColor}</h5>
                        </Grid>

                        <Grid item xs={12} style={{ display: 'inline-block', textAlign: 'center' }}>
                            <img
                                src={imageUrl}
                                style={{ width: '100%', padding: '10px', marginBottom: '10px', paddingBottom: '16px' }}
                                id="picChangeBlock"
                            ></img>
                        </Grid>

                        <div style={{ display: 'flex', justifyContent: 'space-between ' }}>
                            <div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={shoppingcartOnClick}
                                    style={{ display: 'block' }}
                                >
                                    <span className={classes.btnP}>加入購物車 </span>
                                </Button>
                            </div>
                            <div style={{ display: 'flex', justifyContent: ' flex-end' }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={shoppingcartClearOnClick}
                                    style={{ display: 'block' }}
                                >
                                    <span className={classes.btnP}>清除購物車 </span>
                                    {/* <LocalGroceryStoreOutlinedIcon /> */}
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={CheckoutBTN}
                                    style={{ display: 'block' }}
                                >
                                    <span className={classes.btnP}>結帳 </span>
                                    <MonetizationOnIcon />
                                </Button>
                            </div>
                        </div>
                        <hr />
                        <Grid item xs={12}>
                            <p>購物車內容:{carContent} </p>
                        </Grid>
                        <Grid item xs={12}>
                            <h2> 金額$: {total} 元</h2>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};
export default ShoppingCart;
