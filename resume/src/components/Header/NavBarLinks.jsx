import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import styles from "./navBarLinksStyle.js";

const useStyles = makeStyles(styles);

/**
 * 導覽列連結
 * @param {*} props 
 */
const NavBarLinks = (props) => {
	const classes = useStyles();
	return (
		<List className={classes.list}>
			<ListItem className={classes.listItem}>
				<Link to="/about" className={classes.dropdownLink}>
					關於我
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link to="/works" className={classes.dropdownLink}>
					工作經歷
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link to="/mainDish" className={classes.dropdownLink}>
					私房料理
				</Link>
			</ListItem>
		</List>
	);
};

export default NavBarLinks;