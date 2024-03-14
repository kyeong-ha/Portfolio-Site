import { Scroll } from '@/styles/scroll.style';
import React from 'react';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Next from "../../icons/next-arrow.svg";
import Prev from "../../icons/prev-arrow.svg";

import styled from "styled-components"
import * as S from '../../styles/container/tech-stack.style'
import { frontSkill, backSkill, toolSkill } from '@/data/tech-stack.data';


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
        z-index: 999;
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

export default function TechStackForm({ front, back, tool }: { front: Object[], back: Object[], tool: Object[], tool: Object[] }) {
  return (
    <S.Container>
        <S.FormName>
            <h2>TECH</h2><h2>STACK</h2>
        </S.FormName>

        <S.SkillList>
        <div>
            <S.SkillName>
                <h3>Front-end Skill</h3>
                <span className='line'></span>
            </S.SkillName>

            <StyledSlider {...settings}>
                {frontSkill.map(data => {
                    return <div key={data.key}>
                        {data.name}
                    </div>;
                })}
            </StyledSlider>
        </div>

        <div>
            <S.SkillName>
                <h3>Back-end Skill</h3>
                <span className='line'></span>
            </S.SkillName>

            <StyledSlider {...settings}>
                {backSkill.map(data => {
                    return <div key={data.key}>
                        {data.name}
                    </div>;
                })}
            </StyledSlider>
        </div>

        <div>
            <S.SkillName>
                <h3>Using Tools</h3>
                <span className='line'></span>
            </S.SkillName>

            <StyledSlider {...settings}>
                {toolSkill.map(data => {
                    return <div key={data.key}>
                        {data.name}
                    </div>;
                })}
            </StyledSlider>
        </div>
        </S.SkillList>
    </S.Container>
  );
}