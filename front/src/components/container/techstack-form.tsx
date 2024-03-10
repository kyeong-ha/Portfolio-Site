import { Scroll } from '@/styles/scroll.style';
import React from 'react';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styled, { ThemeContext } from "styled-components"

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
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    SlidesToScroll: 1
};

const StyledSlider = styled(Slider)`
    width: 100%;
    height: auto;
`;

export default function TechStackForm({ front, back, tool }: { front: Object[], back: Object[], tool: Object[], tool: Object[] }) {
  return (
    <>
       <div>TECH STACK</div>

            <div>
                <div>Front-end Skill</div>
                <StyledSlider {...settings}>
                    {frontend.map(frontend => {
                        return <div key={frontend.key}>
                            {frontend.name}
                        </div>;
                    })}
                </StyledSlider>
            </div>

            <div>
                <div>Back-end Skill</div>
                <skillList>
                    {frontend.map((frontend) => {
                        return <li>{frontend.name}</li>;
                    })}
                </skillList>
            </div>

            <div>
                <div>Using Tools</div>
                <skillList>
                    {frontend.map((frontend) => {
                        return <li>{frontend.name}</li>;
                    })}
                </skillList>
            </div>

        <Scroll>
            <span></span>
            <p>Scroll</p>
        </Scroll>
    </>
  );
}