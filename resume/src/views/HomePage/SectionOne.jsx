import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";

import styles from "./sectionStyle";
import image1 from "../../assets/img/home/01.jpg";
import image2 from "../../assets/img/home/02.jpg";
import image3 from "../../assets/img/home/03.jpg";

const useStyles = makeStyles(styles);

const SectionOne = () => {
	const classes = useStyles();
	return (
		<div className={classes.section}>
			<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={8}>
					<h2 className={classes.title}>Lapasta-Hotel</h2>
					<h5 className={classes.description}>
						<span>自2002年7月1日起</span>，飯店正式由寒舍餐旅管理顧問股份有限公司(www.mhcwafh-group.com)接掌營運，
						並更名為W’Illiams大飯店。為了能夠創造出煥然一新的精緻時尚風格，並保留古典中國優雅蘊歛的文化元素，
						館內處處可見精心擺置的古董藝術精品，及饒富趣味的古中國意象圖騰。台北喜來登共擁有688間全新設計裝潢的各式客房及套房
						，及多間中、西、日式美食餐廳，提供賓客最豐富精采的食宿享受。
						傳承三十餘年來一貫溫婉細膩的服務精神，W’Illiams大飯店誠摯邀請您一同驗證這場充滿感動與驚喜的時尚風華再現！
						W’Illiams大飯店自1981年3月24日起，以『來來香拉大飯店』之名正式開幕。
						同時並與國際喜達屋酒店管理顧問集團簽訂世界性連鎖業務技術合作契約至今，提供五星級的優質設施與服務。
					</h5>
				</GridItem>
			</GridContainer>
			<div>
				<GridContainer>
					<GridItem xs={12} sm={12} md={4}>
						<img className={classes.roundImg} src={image1} width="50%" />
						<h3 className={classes.title}>在地小農食材</h3>
						<p className={classes.description}>
							Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor
							velit,
							eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan
							turpis.
						</p>
					</GridItem>
					<GridItem xs={12} sm={12} md={4}>
						<img className={classes.roundImg} src={image2} width="50%" />
						<h3 className={classes.title}>米其林行政主廚</h3>
						<p className={classes.description}>
							Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor
							velit,
							eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan
							turpis.
						</p>
					</GridItem>
					<GridItem xs={12} sm={12} md={4}>
						<img className={classes.roundImg} src={image3} width="50%" />
						<h3 className={classes.title}>堅持專注品質</h3>
						<p className={classes.description}>
							Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor
							velit,
							eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan
							turpis.
						</p>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	);
};

export default SectionOne;
