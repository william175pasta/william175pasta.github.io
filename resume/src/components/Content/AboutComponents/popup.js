const popupStyle = {
  modal: {
    width: "100%",

    fontSize: "12px"
  },
  header: {
    width: "100%",
    borderBottom: "1px solid gray",
    fontSize: "18px",
    textAlign: "center",
    padding: "5px"
  },
  content: {
    width: "100%",
    padding: "20px"
  },
  actions: {
    width: "100%",
    padding: "10px 5px",
    margin: " auto",
    textAlign: "center"
  },
  close: {
    cursor: "pointer",
    position: "absolute",
    display: "block",
    padding: "2px 5px",
    lineHeight: "20px",
    right: "-10px",
    top: "-10px",
    fontSize: "24px",
    background: "#ffffff",
    borderRadius: "18px",
    border: "1px solid #cfcece"
  },
  h5red: {
    color: "red"
  },
  h5green: {
    color: "green"
  },
  h5white: {
    color: "#3a8a9e"
  },
  todoTitle: {
    color: "red",
    fontWeight: "700"
  },
  btn: {
    backgroundColor: "#ededed",
    borderRadius: "4px",
    border: "1px solid #ffffff",
    display: "inline-block",
    cursor: "pointer",
    color: "#3a8a9e",
    fontFamily: "Arial",
    fontSize: "16px",
    padding: "6px 15px",
    textDecoration: "none",
    "&:hover": {
      color: "#003C9D",
      fontWeight: "700"
    }
  }
};
export default popupStyle;
