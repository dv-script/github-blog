import { formatDate } from '../../../../utils/formatDate';
import * as S from './styles';
import { PostCardProps } from './types';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function PostCard({ title, body, date }: PostCardProps) {
    return (
        <S.PostCardContainer>

            <S.PostCardHeader>
                <S.PostCardTitle>{title}</S.PostCardTitle>
                <S.PostCardDate>{formatDate(date)}</S.PostCardDate>
            </S.PostCardHeader>

            <S.PostCardContent>
                <Markdown rehypePlugins={[remarkGfm]}>{body}</Markdown>
            </S.PostCardContent>

        </S.PostCardContainer>
    )
}