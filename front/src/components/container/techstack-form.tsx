import React from 'react';
import Mark from "../../icons/mark.svg";
import GithubMark from "../../icons/github-mark.svg";
import TistoryMark from "../../icons/tistory-mark.svg";

import * as S from '../../styles/profile-form/profile-form.style';
import { Scroll } from '@/styles/scroll.style';

export default function TechStackForm() {
  return (
    <>
        <S.Profile>
            <Mark />
            <h1 className="profile-name">Park Kyeongha</h1>
            <h2 className="profile-job" style={{fontWeight: 300}}>Web Developer</h2>
        </S.Profile>

        <S.Callout>
            <div className="korean-font">
                <p>· 웹 서비스의 <b>최적화</b>와 <b>편리함</b>을 개선하기 위한 방법에 대해 늘 고민하고 있습니다.</p>
                <p>· <b>구성원과의 커뮤니케이션</b>이 <b>팀/회사의 효율과 생산성</b>에 크게 영험을 미친다고 생각하고 있으며, 다양한 직무의 구성원들과 능동적으로 커뮤니케이션하는 것을 좋아합니다.</p>
                <p>· 미술과 관련된 <b>창작 활동</b>을 좋아하며, <b>새롭고 다양한 사고와 경험</b>을 즐깁니다.</p>
            </div>
        </S.Callout>

        <S.PlatformLink>
            <div className="platform" onClick={() => window.location.href="https://github.com/kyeong-ha"}>
                <GithubMark/> GitHub
            </div>

            <div className="platform" onClick={() => window.location.href="https://wor1dbest.tistory.com/"}>
                <TistoryMark/> Tistory
            </div>
        </S.PlatformLink>

        <Scroll>
            <span></span>
            <p>Scroll</p>
        </Scroll>
    </>
  );
}