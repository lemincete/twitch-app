import $api from "../../../../http";

import { IStream } from "../../../../interfaces/stream.interface";

export const fetchActiveStreams = async (first: string): Promise<IStream[] | null> => {
    try {
        const { data } = await $api.get<IStream[]>(`/streams`, {
            params: {
                first
            }
        })

        return data;

    } catch (e) {
        console.log(e);
        return null
    }
}