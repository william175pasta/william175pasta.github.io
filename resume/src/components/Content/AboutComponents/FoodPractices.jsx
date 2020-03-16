import React from "react";
import Popup from "reactjs-popup";
import { makeStyles } from '@material-ui/core/styles';

const sauceModal = {
    red: [{
        title: "紅醬做法",
        list1: "取大鍋，將爆香料內食材炒至焦黃。",
        list2: "將塊狀食材加入大鍋中。",
        list3: "煮開後加入所有調味粉，充分攪拌。",
        list4: "小滾五分鐘後關火，加入勾芡水，再次開火煮滾即可。",
        redmaterial1: "沙拉油:50g , 蒜碎:60g , 洋蔥碎:100g ",
        redmaterial2: "西芹碎:150g , 濃縮番茄:9罐 , 水:1000cc , 玉米粉: 350g",
        redmaterial3: "砂糖:300g , 雞粉:150g , 義大利香料:50g , 柴魚精:120g",
    }],
    green: [{
        title: "青醬做法",
        list1: "取大鍋將羅勒葉用滾水川燙後冰水冰鎮。",
        list2: "將辛香料&堅果類加入油用調理機打碎打勻。",
        list3: "擠乾步驟1羅勒葉的水份分批加入步驟2打勻。",
        list4: "加入所有調味料，取打蛋器打均勻。",
        redmaterial1: "去梗羅勒葉:800g , 橄欖油:300g",
        redmaterial2: "蒜頭:150g , 堤魚:85g , 烘烤松子:300g",
        redmaterial3: "帕瑪森起司粉:120g , 雞粉:20g , 鹽:20g , 黑胡椒:50g",
    }],
    white: [{
        title: "奶油白醬做法",
        list1: "開小火，奶油放入鍋子中溶解。",
        list2: "加入麵粉及調味料拌炒，直到出現餅乾的香味。",
        list3: "緩緩倒入鮮奶，利用打蛋器攪拌比較不容易結塊。",
        list4: "鮮奶油全部倒入，不停攪拌直快沸騰時加入起司絲。",
        redmaterial1: "無鹽奶油:500g , 中筋麵粉:900g",
        redmaterial2: "鮮奶油:4000.c.c , 鮮奶:5000cc , 起司絲:500g",
        redmaterial3: "白砂糖:450g , 雞粉:200g , 荳蔻粉:10g , 鹽:10g",
    }]
}

const useStyles = makeStyles(them => ({
    h5red: {
        color: 'red'
    },
    h5green: {
        color: 'green'
    },
    h5white: {
        color: '#3a8a9e'
    },

    btn: {
        backgroundColor: '#ededed',
        borderRadius: '4px',
        border: '1px solid #ffffff',
        display: 'inline-block',
        cursor: 'pointer',
        color: '#3a8a9e',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '6px 15px',
        textDecoration: 'none',
    }

}));

const FoodPractices = (props) => {

    const classes = useStyles()
    const { name } = props;
    if (name == "TomatoSauce") {
        return sauceModal.red.map((item, index) => {
            const { title, list1, list2, list3, list4, redmaterial1, redmaterial2, redmaterial3 } = item;
            return (
                <Popup key={index}
                    trigger={<button className={classes.btn} > Open Modal </button>}
                    modal
                    closeOnDocumentClick
                >
                    <div className={classes.root} style={{ fontSize: '16px' }}>
                        <ol >
                            <h4 className={classes.h5red}> {title}</h4>
                            <li> {redmaterial1} </li>
                            <li> {redmaterial2} </li>
                            <li> {redmaterial3} </li>
                        </ol>
                        <hr />
                        <ul >
                            <li> {list1} </li>
                            <li> {list2} </li>
                            <li> {list3} </li>
                            <li> {list4} </li>
                        </ul>
                    </div>
                </Popup>
            )
        })
    } if (name == "BasilSauce") {
        return sauceModal.green.map((item, index) => {
            const { title, list1, list2, list3, list4, redmaterial1, redmaterial2, redmaterial3 } = item;
            return (
                <Popup key={index}
                    trigger={<button className={classes.btn} > Open Modal </button>}
                    modal
                    closeOnDocumentClick
                >
                    <div style={{ fontSize: '16px' }}>
                        <ol >
                            <h4 className={classes.h5green}> {title}</h4>
                            <li> {redmaterial1} </li>
                            <li> {redmaterial2} </li>
                            <li> {redmaterial3} </li>
                        </ol>
                        <hr />
                        <ul >
                            <li> {list1} </li>
                            <li> {list2} </li>
                            <li> {list3} </li>
                            <li> {list4} </li>
                        </ul>
                    </div>
                </Popup>
            )
        })
    } if (name == "CreamSauce") {
        return sauceModal.white.map((item, index) => {
            const { title, list1, list2, list3, list4, redmaterial1, redmaterial2, redmaterial3 } = item;
            return (

                <Popup key={index}
                    trigger={<button className={classes.btn} > Open Modal </button>}
                    modal
                    closeOnDocumentClick
                >
                    <div style={{ fontSize: '16px' }}>
                        <ol >
                            <h4 className={classes.h5white}> {title}</h4>
                            <li> {redmaterial1} </li>
                            <li> {redmaterial2} </li>
                            <li> {redmaterial3} </li>
                        </ol>
                        <hr />
                        <ul >
                            <li> {list1} </li>
                            <li> {list2} </li>
                            <li> {list3} </li>
                            <li> {list4} </li>
                        </ul>
                    </div>
                </Popup>
            )
        })
    }
}
export default FoodPractices
