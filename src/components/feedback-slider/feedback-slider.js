import classnames from 'classnames'
import PropTypes from 'prop-types'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'

import SlideNextButton from '../slider-buttons/slide-next-button'
import SlidePrevButton from '../slider-buttons/slide-prev-button'
import FeedbackCard from '../feedback-card/feedback-card'
import { feedbacks } from '../../data/data'

import './feedback-slider.scss'

const FeedbackSlider = ({ className }) => {

    const settings = {
        dots: true,
        speed: 500,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SlideNextButton />,
        prevArrow: <SlidePrevButton />,
        responsive: [
            {
                breakpoint: 991.98,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 675,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
        ]
    }

    return (
        <Slider className={classnames('feedback-slider', className)} {...settings}>
            {feedbacks.map((feedback) => (
                <FeedbackCard key={feedback.id} {...feedback}/>
            ))}
        </Slider>
    )
}

FeedbackSlider.propTypes = {
    className: PropTypes.string,
}

FeedbackSlider.defaultProps = {
    className: ''
}

export default FeedbackSlider