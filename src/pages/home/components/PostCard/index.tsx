import { useContext } from 'react';
import { PostsContext } from '../../../../context/PostsContext';

import { formatDate } from '../../../../utils/formatDate';
import * as S from './styles';
import { PostCardProps } from './types';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function PostCard({ title, body, date, id, comments, author, html_url }: PostCardProps) {

    const { setSelectedPost } = useContext(PostsContext);

    function handleSelectedPost() {
        setSelectedPost({
            title,
            body,
            date,
            id,
            comments,
            author, 
            html_url
        }
        );
    }

    return (
        <S.PostCardContainer onClick={handleSelectedPost} to={`/post/${id}`}>

            <S.PostCardHeader>
                <S.PostCardTitle>{title}</S.PostCardTitle>
                <S.PostCardDate>{formatDate(date)}</S.PostCardDate>
            </S.PostCardHeader>

            <S.PostCardContent>
                <Markdown disallowedElements={["a"]} rehypePlugins={[remarkGfm]}>{body}</Markdown>
            </S.PostCardContent>

        </S.PostCardContainer>
    )
}