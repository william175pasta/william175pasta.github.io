import React from "react";
import Popup from "reactjs-popup";
import { makeStyles } from "@material-ui/core/styles";
import popupStyle from "./popup";

const useStyles = makeStyles(popupStyle);
// 作法原料DATA
const foodContent = {
  red: {
    raw:
      "沙拉油:50g,蒜碎:60g,洋蔥碎:100g, 西芹碎:150g , 濃縮番茄:9罐 , 水:1000cc , 玉米粉: 350g, 砂糖:300g , 雞粉:150g ,義大利香料:50g , 柴魚精:120g",
    way:
      " 取大鍋，將爆香料內食材炒至焦黃。 將塊狀食材加入大鍋中。 煮開後加入所有調味粉，充分攪拌。 小滾五分鐘後關火，加入勾芡水，再次開火煮滾即可。"
  },
  white: {
    raw:
      "無鹽奶油:500g , 中筋麵粉:900g 鮮奶油:4000.c.c , 鮮奶:5000cc ,起司絲:500g 白砂糖:450g , 雞粉:200g , 荳蔻粉:10g , 鹽:10g",
    way:
      "開小火，奶油放入鍋子中溶解。加入麵粉及調味料拌炒，直到出現餅乾的香味。緩緩倒入鮮奶，利用打蛋器攪拌比較不容易結塊。鮮奶油全部倒入，不停攪拌直快沸騰時加入起司絲。"
  },
  green: {
    raw:
      "  無鹽奶油:500g , 中筋麵粉:900g 鮮奶油:4000.c.c , 鮮奶:5000cc ,  起司絲:500g 白砂糖:450g , 雞粉:200g , 荳蔻粉:10g , 鹽:10g",
    way:
      "取大鍋將羅勒葉用滾水川燙後冰水冰鎮。將辛香料&堅果類加入油用調理機打碎打勻。擠乾步驟1羅勒葉的水份分批加入步驟2打勻。加入所有調味料，取打蛋器打均勻。"
  }
};

const ModalPopup = props => {
  const classes = useStyles();
  const { name } = props;
  if (name == "TomatoSauce") {
    return (
      <Popup
        style={{ width: "100%" }}
        trigger={<button className={classes.btn}> Open Mocdal </button>}
        modal
      >
        {close => (
          <div className={classes.modal}>
            <a className={classes.close} onClick={close}>
              &times;
            </a>
            <div className={classes.header}>
              <h4 className={classes.h5red}> 紅醬做法</h4>
            </div>
            <div className={classes.content}>
              <p>
                <span className={classes.todoTitle}>原料:</span>
                {foodContent.red.raw}
              </p>
              <p>
                <span className={classes.todoTitle}>作法:</span>
                {foodContent.red.way}
              </p>
            </div>
          </div>
        )}
      </Popup>
    );
  }
  if (name == "CreamSauce") {
    return (
      <Popup
        style={{ width: "100%" }}
        trigger={<button className={classes.btn}> Open Mocdal </button>}
        modal
      >
        {close => (
          <div className={classes.modal}>
            <a className={classes.close} onClick={close}>
              &times;
            </a>
            <div className={classes.header}>
              <h4 className={classes.h5white}> 白醬做法</h4>
            </div>
            <div className={classes.content}>
              <p>
                <span className={classes.todoTitle}>原料:</span>
                {foodContent.white.raw}
              </p>
              <p>
                <span className={classes.todoTitle}>作法:</span>
                {foodContent.white.way}
              </p>
            </div>
          </div>
        )}
      </Popup>
    );
  }
  if (name == "BasilSauce") {
    return (
      <Popup
        style={{ width: "100%" }}
        trigger={<button className={classes.btn}> Open Mocdal </button>}
        modal
      >
        {close => (
          <div className={classes.modal}>
            <a className={classes.close} onClick={close}>
              &times;
            </a>
            <div className={classes.header}>
              <h4 className={classes.h5green}> 青醬做法</h4>
            </div>
            <div className={classes.content}>
              <p>
                <span className={classes.todoTitle}>原料:</span>
                {foodContent.green.raw}
              </p>
              <p>
                <span className={classes.todoTitle}>作法:</span>
                {foodContent.green.way}
              </p>
            </div>
          </div>
        )}
      </Popup>
    );
  }
};

export default ModalPopup;
