import api from '@/axios/api';
import { useState, useEffect } from 'react';

export interface IUseLoadMore<T> {
  posts?: T[];
  next_page?: number | null;
  post_number?: number | null;
}

export function useLoadMorePosts<T>({
  posts,
  post_number,
  next_page,
  apiUrl,
}: IUseLoadMore<T> & {
  apiUrl: string;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [postList, setPostList] = useState<T[]>([]);
  const [nextPage, setNextPage] = useState<number | null>(next_page || null);

  useEffect(() => {
    if (posts) {
      setPostList(posts);
    }
  }, [posts]);

  async function onLoadMore() {
    try {
      setLoading(true);
      const response = await api.get(apiUrl, {
        params: {
          size: post_number,
          page: nextPage,
        },
      });

      setPostList([...postList, ...response.data.posts]);
      setNextPage(response.data.next_page);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    nextPage,
    postList,
    onLoadMore,
  };
}
