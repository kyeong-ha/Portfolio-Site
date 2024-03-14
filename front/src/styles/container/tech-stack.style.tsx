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
    
    background-color: #333333;
    color: #F2F4F3;

    padding: 10% 8%;
    gap: 7%;
`;

export const FormName = styled.span`
    width: 100%;
    height: auto;

    display: flex;
    justify-content: center;
    gap: 0.3rem;
    margin-bottom: 4rem;

    & > h2:last-child {
      background-color: #F2F4F3;
      color: #333333;
      padding: 0 0.2%;
    }
`;

export const SkillName = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: "title line";
    
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 2%;

    & > .line {
        grid-area: line;

        display: flex;
        flex-basis: 1;
        align-items: center;
        color: #F2F4F3
        &:before{
            content: '';
            flex-grow: 1;
            background: #F2F4F3;
            height: 1px;
            font-size: 0px;
            line-height: 0px;
        }

        &:after{
            content: '';
            flex-grow: 1;
            background: #F2F4F3;
            height: 1px;
            font-size: 0px;
            line-height: 0px;
        }
    }
`;

export const SkillList = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
`;

export const settings = {
    variableWidth: true,
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    SlidesToScroll: 1,
    nextArrow: (
        <Next className="next"/>
    ),
    prevArrow: (
        <Prev className="prev"/>
    )
};

export const StyledSlider = styled(Slider)`
&::after{
    background: linear-gradient(to left, #333, #333 10%, transparent);
}
    .slick-list{
        .slick-slide{
            color: #333333;
            background-color: #F2F4F3;
            width: 5.5rem;
            height: 5.5rem;

            display: flex;
            justify-content: center;
            align-items: center;

            margin: 0 1.25rem;
        }
            
    }
    .slick-arrow{
        width: 5.5rem;
        height: 5.5rem;
        z-index: 9;
        & > path {
            stroke: #F2F4F3;
        }
    }
    .slick-next{
        right: 0;
        background-image: linear-gradient(to right, transparent, #333333);
    }
    .slick-prev{
        left: 0;
        background-image: linear-gradient(to left, transparent, #333333);
    }

`;