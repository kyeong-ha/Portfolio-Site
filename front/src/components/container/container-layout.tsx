import { ReactNode } from 'react';
import * as S from '../../styles/container/container.style';


export default function Container({ children, textAlign } : { children: ReactNode[], textAlign: string }) {
    return (
        <>
        <S.Container textAlign={textAlign || null}>
            { children }
        </S.Container>
        </>
    )
}