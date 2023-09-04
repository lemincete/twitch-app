export interface IStream {
    id: string,
    user_id: string,
    user_login: string,
    game_name: string,
    title: string,
    viewer_count: number,
    started_at: string,
    language: string,
    thumbnail_url: string,
    tags: string[]
}


export type IUpdatedStream = Omit<IStream, 'viewer_count'> & {
    viewer_count: string,
    profile_image_url: string
}

export interface IUser {
    id: string,
    profile_image_url: string,
}