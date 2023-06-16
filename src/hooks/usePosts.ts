import {useMemo} from 'react'
import IPost from "../models/IPost";

export const useSortedPosts = (posts: IPost[], sort: string) => {
    return useMemo(() => {
        switch(sort){
            case 'title':
                return [...posts].sort(({title: a}, {title: b}) => a.localeCompare(b));
            default:
                return posts;
        }
    }, [sort, posts]);
}

export const usePosts = (posts: IPost[], query: string, sort: string) => {
    const sortedPosts = useSortedPosts(posts, sort)

    return useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedPosts]);
}
