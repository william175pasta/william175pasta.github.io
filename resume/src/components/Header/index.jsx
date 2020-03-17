import React, { useEffect } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import NavBarLinks from "./NavBarLinks";

import styles from "./headerStyle";

const useStyles = makeStyles(styles);

/**
 * 頁面標頭元件
 * @param {*} props 
 */
const Header = (props) => {
	const classes = useStyles();
	useEffect(() => {
		if (props.changeColorOnScroll) {
			window.addEventListener("scroll", headerColorChange);
		}
		return function cleanup() {
			if (props.changeColorOnScroll) {
				window.removeEventListener("scroll", headerColorChange);
			}
		};
	});
	const headerColorChange = () => {
		const { color, changeColorOnScroll } = props;
		const windowsScrollTop = window.pageYOffset;
		if (windowsScrollTop > changeColorOnScroll.height) {
			document.body
				.getElementsByTagName("header")[0]
				.classList.remove(classes[color]);
			document.body
				.getElementsByTagName("header")[0]
				.classList.add(classes[changeColorOnScroll.color]);
		} else {
			document.body
				.getElementsByTagName("header")[0]
				.classList.add(classes[color]);
			document.body
				.getElementsByTagName("header")[0]
				.classList.remove(classes[changeColorOnScroll.color]);
		}
	};
	const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
	const appBarClasses = classNames({
		[classes.appBar]: true,
		[classes[color]]: color,
		[classes.absolute]: absolute,
		[classes.fixed]: fixed
	});

	return (
		<AppBar className={appBarClasses}>
			<Toolbar className={classes.container}>
				<a className={classes.title} href="/">william</a>
				<Hidden smDown implementation="css">
					<NavBarLinks />
				</Hidden>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
