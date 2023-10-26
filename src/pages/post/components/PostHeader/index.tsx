import { useContext } from 'react';
import { PostsContext } from '../../../../context/PostsContext';

import { ArrowSquareOut, CalendarBlank, CaretLeft, ChatCircleDots, GithubLogo } from '@phosphor-icons/react';
import * as S from './styles';
import { formatDate } from './../../../../utils/formatDate';

export function PostHeader() {

    const { selectedPost } = useContext(PostsContext);

    return (
        <S.PostHeaderContainer>
            <S.PostHeaderButtonContainer>
                <S.PostHeaderBackButton to={"../"}>
                    <CaretLeft weight='bold' />
                    Voltar
                </S.PostHeaderBackButton>
                <S.PostHeaderGithubButton to={selectedPost.url}>
                    Ver no Github
                    <ArrowSquareOut weight='bold' />
                </S.PostHeaderGithubButton>
            </S.PostHeaderButtonContainer>

            <S.PostHeaderContent>
                <S.PostHeaderTitle>{selectedPost.title}</S.PostHeaderTitle>
                <S.PostHeaderInfoContainer>
                    <S.PostHeaderInfo>
                        <GithubLogo weight='fill'/>
                        <S.PostHeaderInfoText>{selectedPost.author}</S.PostHeaderInfoText>
                    </S.PostHeaderInfo>
                    <S.PostHeaderInfo>
                        <CalendarBlank weight='fill'/>
                        <S.PostHeaderInfoText>{formatDate(selectedPost.date)}</S.PostHeaderInfoText>
                    </S.PostHeaderInfo>
                    <S.PostHeaderInfo>
                        <ChatCircleDots weight='fill'/>
                        <S.PostHeaderInfoText>{selectedPost.comments > 1 ? `${selectedPost.comments} comentários` : `${selectedPost.comments} comentário`}</S.PostHeaderInfoText>
                    </S.PostHeaderInfo>
                </S.PostHeaderInfoContainer>
            </S.PostHeaderContent>
        </S.PostHeaderContainer>
    )
}