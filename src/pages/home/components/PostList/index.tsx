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
                        id={post.number as number}
                        title={post.title}
                        body={post.body}
                        date={post.created_at}
                        comments={post.comments}
                        author={post.user.login}
                        html_url={post.html_url}
                    />
                ))
            )}
        </S.PostListContainer>
    )
}