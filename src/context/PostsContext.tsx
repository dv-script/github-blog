import { createContext, ReactNode, useState } from 'react';
import { instance } from '../lib/axios';
import { pathRegex } from '../utils/pathRegex';

interface Post {
    id: number
    title: string
    body: string
    created_at: string
    updated_at: string
}

interface Posts {
    total_count: number
    items: Post[]
}

interface PostsContextType {
    posts: Posts 
    search: string
    setSearch: (search: string) => void
    getPosts: () => Promise<void>
}

interface PostsProviderProps {
    children: ReactNode
}

export const PostsContext = createContext<PostsContextType>({} as PostsContextType);

export function PostsProvider({ children }: PostsProviderProps) {

    const [search, setSearch] = useState('');
    const [posts, setPosts] = useState<Posts>({} as Posts);

    async function getPosts() {
        const convertSearchToPath = pathRegex(search);
        const response = await instance.get(`/search/issues?q=${convertSearchToPath}+repo:dv-script/github-blog`);
        const fetchedPosts = response.data;       
        setPosts(fetchedPosts);
    }

    return (
        <PostsContext.Provider
            value={{ posts, search, setSearch, getPosts }}
        >
            {children}
        </PostsContext.Provider>
    );
}
