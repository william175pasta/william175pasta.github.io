import React, { Fragment, useState } from "react";
import Grid from '@material-ui/core/Grid';
import Slider from "react-slick";

const imagesArray = [
    { imageUrl: "./img/product/Tomato01.jpg", desc: "茄汁牛肉丸義大利麵" },
    { imageUrl: "./img/product/Tomato02.jpg", desc: "茄汁海鮮義大利麵" },
    { imageUrl: "./img/product/Tomato03.jpg", desc: "波隆那肉醬義大利麵" },
    { imageUrl: "./img/product/Cream01.jpg", desc: "奶油培根斜管麵" },
    { imageUrl: "./img/product/Cream02.jpg", desc: "奶油南瓜貝殼麵" },
    { imageUrl: "./img/product/Cream03.jpg", desc: "奶油鮭魚義大利麵" },
    { imageUrl: "./img/product/Basil01.jpg", desc: "青醬雞肉斜管麵" },
    { imageUrl: "./img/product/Basil02.jpg", desc: "青醬蛤蜊義大利麵" },
    { imageUrl: "./img/product/Olive01.jpg", desc: "蒜香白酒蛤蜊義大利麵" },
    { imageUrl: "./img/product/Olive02.jpg", desc: "起士雞肉義大利麵" },
];

const ImageCarouselTwo = () => {

    return (
        <Fragment>
            <Grid item xs={12} >
                <div style={{ padding: '10px', background: '#ccc', }}>
                    <Slider autoplay={true}  //自動播放
                        autoplaySpeed={2000} //播放速度
                        slidesToShow={2} //一次show幾張圖




                    >
                        {
                            imagesArray.map((item, index) => {
                                const { imageUrl, desc } = item
                                return (
                                    <div key={index}>
                                        <img src={imageUrl} style={{
                                            width: '100%',
                                            height: '100%',
                                        }} />
                                        <p style={{
                                            textAlign: 'center', fontSize: '11px', color: '#fff',
                                            background: '#34465d', fontStyle: 'italic'
                                        }}>
                                            {desc}
                                        </p>
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>
            </Grid>
        </Fragment >
    )
}
export default ImageCarouselTwo