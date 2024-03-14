import React from 'react';

import * as S from '../../styles/container/tech-stack.style'
import { frontSkill, backSkill, toolSkill } from '@/data/tech-stack.data';

export default function TechStackForm() {
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

            <S.StyledSlider {...S.settings}>
                {frontSkill.map(data => {
                    return <div key={data.key}>
                        {data.name}
                    </div>;
                })}
            </S.StyledSlider>
        </div>

        <div>
            <S.SkillName>
                <h3>Back-end Skill</h3>
                <span className='line'></span>
            </S.SkillName>

            <S.StyledSlider {...S.settings}>
                {backSkill.map(data => {
                    return <div key={data.key}>
                        {data.name}
                    </div>;
                })}
            </S.StyledSlider>
        </div>

        <div>
            <S.SkillName>
                <h3>Using Tools</h3>
                <span className='line'></span>
            </S.SkillName>

            <S.StyledSlider {...S.settings}>
                {toolSkill.map(data => {
                    return <div key={data.key}>
                        {data.name}
                    </div>;
                })}
            </S.StyledSlider>
        </div>
        </S.SkillList>
    </S.Container>
  );
}