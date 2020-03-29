const dishStyle = {
  root: {
    fontFamily: " Microsoft JhengHei",
    marginBottom: "25px"
  },
  activeArea: {
    textAlign: "center",
    padding: "10px 15px",
    margin: "5px auto"
  },
  activeBtn: {
    fontSize: "18px",
    padding: "3px 6px",
    color: "	#CC0000",
    "&:hover": {
      color: "#EEE",
      background: "	#CC0000",
      borderRadius: "5px"
    }
  },
  percent: {
    padding: "3px 0",
    fontSize: "14px"
  },
  progressbarBack: {
    marginTop: "5px",

    width: "100px",
    height: "5px",
    backgroundColor: "#ccc"
  },
  progressbarFront: {
    height: "5px",
    backgroundColor: "red"
  }
};
export default dishStyle;
