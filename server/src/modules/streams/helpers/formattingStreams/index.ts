import { IStream, IUser } from "../../types";

import { IUpdatedStream } from "../../types";

const formattingTitle = (title: string): string => `${title.substring(0, 26)}...`;
const formattingImagePath = (path: string): string => path.replace('{width}', '300').replace('{height}', '200');

const formattingViewers = (viewers: number) => {
    if (viewers > 999) {
        return String(viewers).charAt(0) + 'K'
    }

    if (viewers > 999_999) {
        return String(viewers).charAt(0) + 'M'
    }

    return `${viewers}`
}

export const formattingStreams = (streams: IStream[], users: IUser[]): IUpdatedStream[] => {

    const formattedStreams = streams.map((stream, index) => {

        const { title, thumbnail_url, viewer_count } = stream

        const { profile_image_url } = users[index];

        return {
            ...stream,
            title: formattingTitle(title),
            thumbnail_url: formattingImagePath(thumbnail_url),
            viewer_count: formattingViewers(viewer_count),
            profile_image_url
        }

    })

    return formattedStreams
}