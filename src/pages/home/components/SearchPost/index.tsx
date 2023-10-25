import { useContext } from "react";
import { PostsContext } from "../../../../context/PostsContext";

import * as S from "./styles";

export function SearchPost() {

    const { search, setSearch, getPosts, posts, setProcessing, setPosts } = useContext(PostsContext);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const postsSearched = await getPosts();
        setProcessing(false);
        setPosts(postsSearched);
    }

    return (
        <S.SearchPostContainer onSubmit={handleSubmit}>
            <S.SearchPostHeader>
                <S.SearchPostTitle>Procurar post</S.SearchPostTitle>
                <S.SearchPostResults>{
                    posts.total_count > 0
                    ? `${posts.total_count} publicação${posts.total_count > 1 ? 'ões' : ''}`
                    : `Nenhuma publicação encontrada`
                }
                </S.SearchPostResults>
            </S.SearchPostHeader>
            <S.SearchPostInput
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Pesquisar conteúdo"
            />
        </S.SearchPostContainer>
    )
}
