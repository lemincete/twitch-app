import { useQuery } from '@tanstack/react-query';

import { fetchActiveStreams } from './api/fetchStreams';

export const useFetchActiveStreams = (first: string) => useQuery(['active-streams'], () => fetchActiveStreams(first), {
    refetchOnWindowFocus: false,
    keepPreviousData: true
})