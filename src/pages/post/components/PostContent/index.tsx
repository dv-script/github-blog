import { useContext } from 'react';
import { PostsContext } from '../../../../context/PostsContext';

import * as S from './styles';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function PostContent() {
    
    const { selectedPost } = useContext(PostsContext); 
    
    return (
        <S.PostContentContainer>
            <Markdown rehypePlugins={[remarkGfm]}>{selectedPost.body}</Markdown>
        </S.PostContentContainer>
    )
}