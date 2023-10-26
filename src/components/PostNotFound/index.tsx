import * as S from './styles';

export function PostNotFound() {
    return (
        <S.PostNotFoundContainer>
            <S.PostNotFoundTitle>Post não encontrado</S.PostNotFoundTitle>
            <S.PostNotFoundText>Infelizmente não encontramos o post que você está procurando. Tente novamente mais tarde.</S.PostNotFoundText>
        </S.PostNotFoundContainer>
    )
}