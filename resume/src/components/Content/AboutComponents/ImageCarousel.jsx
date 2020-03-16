import React, { Fragment } from 'react';
import Slider from 'react-slick';

import Basil1 from '../../../images/product/Basil01.jpg';
import Basil2 from '../../../images/product/Basil02.jpg';
import Cream1 from '../../../images/product/Cream01.jpg';
import Cream2 from '../../../images/product/Cream02.jpg';
import Cream3 from '../../../images/product/Cream03.jpg';
import Olive1 from '../../../images/product/Olive01.jpg';
import Olive2 from '../../../images/product/Olive02.jpg';
import Tomato1 from '../../../images/product/Tomato01.jpg';
import Tomato2 from '../../../images/product/Tomato02.jpg';
import Tomato3 from '../../../images/product/Tomato03.jpg';
import Grid from '@material-ui/core/Grid';

const imgesAll = {
    array: [Tomato1, Tomato2, Tomato3, Cream1, Cream2, Cream3, Basil1, Basil2, Olive1, Olive2],
};

const SampleNextArrow = props => {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            style={{ display: 'block', background: '#bbb', borderRadius: '100%' }}
            onClick={onClick}
        />
    );
};
const SamplePrevArrow = props => {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            style={{ display: 'block', background: '#bbb', borderRadius: '100%' }}
            onClick={onClick}
        />
    );
};
const settings = {
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
};

class ImageCarousel extends React.Component {
    render() {
        return (
            <Fragment>
                <Grid item xs={12}>
                    <div style={{ padding: '5px 20px', background: '#ddd' }}>
                        <Slider
                            autoplay={true} //自動播放
                            autoplaySpeed={2000} //播放速度
                            slidesToShow={3} //一次show幾張圖
                            {...settings}
                        >
                            {imgesAll.array.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <img
                                            src={item}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                            }}
                                        />
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                </Grid>
            </Fragment>
        );
    }
}

export default ImageCarousel;
