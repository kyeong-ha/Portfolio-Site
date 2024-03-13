import { Scroll } from '@/styles/scroll.style';
import React from 'react';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Next from "../../icons/next-arrow.svg";
import Prev from "../../icons/prev-arrow.svg";

import styled, { ThemeContext } from "styled-components"
import Container from './container-layout';

export const FormName = styled.h2`
    width: fit-content;
    height: auto;

    color: ${(props) => props.reverse ? props.theme.bodyFontColor : props.theme.bodyBackgroundColor};
    background-color:${(props) => props.reverse ? props.theme.bodyBackgroundColor : props.theme.bodyFontColor};

    padding: 0 0.5%;
    display: inline-block;
`;

export const SkillName = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: "title line";
    
    align-items: center;
    column-gap: 1rem;

    & > .line {
        grid-area: line;

        display: flex;
        flex-basis: 1;
        align-items: center;
        color: ${(props) => props.theme.bodyFontColor};
        &:before{
            content: '';
            flex-grow: 1;
            background: ${(props) => props.theme.bodyFontColor};
            height: 1px;
            font-size: 0px;
            line-height: 0px;
        }

        &:after{
            content: '';
            flex-grow: 1;
            background: ${(props) => props.theme.bodyFontColor};
            height: 1px;
            font-size: 0px;
            line-height: 0px;
        }
    }
`;

export const SkillList = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.1rem;
`;

const frontend = [
    {
        id: 1,
        name: 'HTML5',
        url: '',
        description: 'test'
    },
    {
        id: 2,
        name: 'CSS3',
        url: '',
        description: 'test'
    },
    {
        id: 3,
        name: 'Sass',
        url: '',
        description: 'test'
    }
]


const settings = {
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

const StyledSlider = styled(Slider)`
&::after{
    background: linear-gradient(to left, #333, #333 10%, transparent);
}
    .slick-list{
        .slick-slide{
            color: ${(props) => props.theme.bodyBackgroundColor};
            background-color:${(props) => props.theme.bodyFontColor};
            width: 6rem;
            height: 6rem;

            display: flex;
            justify-content: center;
            align-items: center;

            margin: 0 1.25rem;
        }
            
    }
    .slick-arrow{
        width: 6rem;
        height: 6rem;
        z-index: 999;
        & > path {
            stroke: ${(props) => props.theme.bodyFontColor};
        }
    }
    .slick-next{
        right: 0;
        background-image: linear-gradient(to right, transparent, ${(props) => props.theme.bodyBackgroundColor});
    }
    .slick-prev{
        left: 0;
        background-image: linear-gradient(to left, transparent, ${(props) => props.theme.bodyBackgroundColor});
    }

`;

export default function TechStackForm({ front, back, tool }: { front: Object[], back: Object[], tool: Object[], tool: Object[] }) {
  return (
    <Container>
        <div>
            <FormName reverse="true">TECH</FormName>
            <FormName>STACK</FormName>
        </div>
       

            <SkillList>
                <SkillName>
                    <h3>Front-end Skill</h3>
                    <span className='line'></span>
                </SkillName>

                <StyledSlider {...settings}>
                    {frontend.map(frontend => {
                        return <div key={frontend.key}>
                            {frontend.name}
                        </div>;
                    })}
                </StyledSlider>
            </SkillList>

            <SkillList>
                <SkillName>
                    <h3>Back-end Skill</h3>
                    <span className='line'></span>
                </SkillName>

                <StyledSlider {...settings}>
                    {frontend.map(frontend => {
                        return <div key={frontend.key}>
                            {frontend.name}
                        </div>;
                    })}
                </StyledSlider>
            </SkillList>

            <SkillList>
                <SkillName>
                    <h3>Using Tools</h3>
                    <span className='line'></span>
                </SkillName>

                <StyledSlider {...settings}>
                    {frontend.map(frontend => {
                        return <div key={frontend.key}>
                            {frontend.name}
                        </div>;
                    })}
                </StyledSlider>
            </SkillList>
    </Container>
  );
}