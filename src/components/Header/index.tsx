import * as S from './styles';
import coverImg from '../../assets/cover.png'

export function Header() {
    return (
        <S.HeaderContainer>
            <S.CoverImage src={coverImg} />
        </S.HeaderContainer>
    )
}