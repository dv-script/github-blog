import { useContext } from 'react';
import { PostsContext } from '../../context/PostsContext';

import * as S from './styles';
import { PostHeader } from './components/PostHeader';
import { PostContent } from './components/PostContent';
import { PostNotFound } from '../../components/PostNotFound';

export function Post() {

    const { selectedPost } = useContext(PostsContext);

    return (
        <S.PostContainer>
            { selectedPost.comments === undefined ? (
                <PostNotFound />
            ) : (
                <>
                    <PostHeader />
                    <PostContent />
                </>
            )}
        </S.PostContainer>
    );
}