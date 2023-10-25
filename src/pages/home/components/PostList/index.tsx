import { useContext } from 'react'
import { PostCard } from '../PostCard'
import * as S from './styles'
import { PostsContext } from '../../../../context/PostsContext'

export function PostList() {

    const { posts, processing } = useContext(PostsContext)

    return (
        <S.PostListContainer>
            {processing ? (
                null
            ) : (
                posts.items.map(post => (
                    <PostCard
                        key={post.id}
                        title={post.title}
                        body={post.body}
                        date={post.created_at}
                    />
                ))
            )}
        </S.PostListContainer>
    )
}