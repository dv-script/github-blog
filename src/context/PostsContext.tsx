import { createContext, ReactNode, useState } from 'react';
import { instance } from '../lib/axios';

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
    processing: boolean
    setProcessing: React.Dispatch<React.SetStateAction<boolean>>
    posts: Posts
    setPosts: React.Dispatch<React.SetStateAction<Posts>>
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
    getPosts: () => Promise<Posts>
}

interface PostsProviderProps {
    children: ReactNode
}

export const PostsContext = createContext<PostsContextType>({} as PostsContextType);

export function PostsProvider({ children }: PostsProviderProps) {

    const [processing, setProcessing] = useState(true);
    const [search, setSearch] = useState('');
    const [posts, setPosts] = useState<Posts>({} as Posts);

    async function getPosts() {
        const response = await instance.get(`/search/issues?q=${search}+repo:dv-script/github-blog`);
        const fetchedPosts = response.data;

        return fetchedPosts;
    }

    return (
        <PostsContext.Provider
            value={{ posts, setPosts, search, setSearch, getPosts, processing, setProcessing }}
        >
            {children}
        </PostsContext.Provider>
    );
}
