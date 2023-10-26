import { createContext, ReactNode, useEffect, useState } from 'react';
import { instance } from '../lib/axios';

interface Post {
    url: any;
    comments: number
    user: {
        login: string
    }
    number: number | undefined
    id: number
    title: string
    body: string
    created_at: string
}

interface Posts {
    total_count: number
    items: Post[]
}

interface SelectedPost {
    title: string
    body: string
    date: string
    id: number
    comments: number
    author: string
    url: string
}

interface PostsContextType {
    processing: boolean
    setProcessing: React.Dispatch<React.SetStateAction<boolean>>
    posts: Posts
    setPosts: React.Dispatch<React.SetStateAction<Posts>>
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
    getPosts: () => Promise<Posts>
    selectedPost: SelectedPost
    setSelectedPost: React.Dispatch<React.SetStateAction<SelectedPost>>
}

interface PostsProviderProps {
    children: ReactNode
}

export const PostsContext = createContext<PostsContextType>({} as PostsContextType);

export function PostsProvider({ children }: PostsProviderProps) {

    const [processing, setProcessing] = useState(true);
    const [search, setSearch] = useState('');
    const [posts, setPosts] = useState<Posts>({} as Posts);
    const [selectedPost, setSelectedPost] = useState<SelectedPost>({} as SelectedPost);

    async function getPosts() {
        const response = await instance.get(`/search/issues?q=${search}+repo:dv-script/github-blog`);
        const fetchedPosts = response.data;

        return fetchedPosts;
    }

    useEffect(() => {
        getPosts()
            .then((fetchedPosts) => {
                setPosts(fetchedPosts);
                setProcessing(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    , [search]);

    return (
        <PostsContext.Provider
            value={{ posts, setPosts, search, setSearch, getPosts, processing, setProcessing, selectedPost, setSelectedPost }}
        >
            {children}
        </PostsContext.Provider>
    );
}
