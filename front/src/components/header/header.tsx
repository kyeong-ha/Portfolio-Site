import React from 'react';
import Logo from "../../icons/logo.svg"
import * as S from '../../styles/header/header.style';

export default function Header() {
  return (
    <>
      <S.Header>
        <Logo onClick={() => window.location.href='/'}/>

        <S.Menu>
          <S.MenuItem>Projects</S.MenuItem>
          <S.MenuItem>Experiences</S.MenuItem>
          <S.MenuItem>Contact</S.MenuItem>
        </S.Menu>
      </S.Header>
      
    </>
  );
}