import { useContext } from "react";
import { PostsContext } from "../../../../context/PostsContext";

import * as S from "./styles";

export function SearchPost() {

    const { search, setSearch, getPosts, posts } = useContext(PostsContext);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        getPosts();
    }

    return (
        <S.SearchPostContainer onSubmit={handleSubmit}>
            <S.SearchPostHeader>
                <S.SearchPostTitle>Procurar post</S.SearchPostTitle>
                <S.SearchPostResults>{
                    posts.total_count > 0
                    ? `${posts.total_count} publicações`
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
