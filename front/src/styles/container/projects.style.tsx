import styled from "styled-components"

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Next from "../../icons/next-arrow.svg";
import Prev from "../../icons/prev-arrow.svg";

export const Container = styled.div`
    width: 100%;
    height: auto;

    text-align: center;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    background-color: #F2F4F3;
    color: #333333;
    padding: 10% 8vw;
    gap: 7%;
`;

export const FormName = styled.span`
    width: 100%;
    height: auto;

    display: flex;
    justify-content: center;
    gap: 0.3rem;
    margin-bottom: 4rem;

    & > h2 {
        background-color: #333333;
        color: #F2F4F3;
        padding: 0 0.2%;
    }
`;


export const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    nextArrow: (
        <Next className="next"/>
    ),
    prevArrow: (
        <Prev className="prev"/>
    )
};

export const StyledSlider = styled(Slider)`
    width: 100%;

    .slick-list{
        .slick-slide{
            width: 84vw;
            height: auto;

            display: flex;
            justify-content: center;
            align-items: center;
        }
            
    }
    .slick-arrow{
        width: 5.5rem;
        height: 5.5rem;
        & > path {
            stroke: #8D8D8D;
        }
    }
    .slick-next{
        right: 0;
    }
    .slick-prev{
        left: 0;
    }

`;