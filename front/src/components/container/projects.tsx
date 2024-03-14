import React from 'react';

import * as S from '../../styles/container/projects.style'
import { projects } from '@/data/projects.data';

export default function ProjectsForm() {
  return (
    <S.Container>
        <S.FormName>
            <h2>PROJECTS</h2>
        </S.FormName>

        <S.StyledSlider {...S.settings}>
            {projects.map(data => {
                return <div key={data.key}>
                    {data.name}
                </div>;
            })}
        </S.StyledSlider>
    </S.Container>
  );
}