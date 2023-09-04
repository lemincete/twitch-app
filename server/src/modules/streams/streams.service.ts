import $api from "../../http";

import { formattingStreams } from "./helpers/formattingStreams";

import { IStream, IUpdatedStream, IUser } from "./types";

class StreamsService {
    async getStreams(first: string): Promise<IUpdatedStream[] | null> {

        TODO: // add logging error

        try {
            const { data } = await $api.get<{ data: IStream[] }>(`http://api.twitch.tv/helix/streams`, {
                headers: {
                    'Client-ID': process.env.TWITCH_CLIENT_ID
                },
                params: {
                    first
                }
            })

            const users = await this.getUsers(data.data);

            if (!users) {
                return null
            }

            return formattingStreams(data.data, users);

        } catch (e: any) {
            return null
        }
    }

    async getUsers(streams: IStream[]): Promise<IUser[] | null> {
        let idUsers = '';

        streams.map(stream => {
            idUsers += `id=${stream.user_id}&`
        })

        try {

            const { data } = await $api.get<{ data: IUser[] }>(`https://api.twitch.tv/helix/users?${idUsers.slice(0, -1)}`, {
                headers: {
                    'Client-ID': process.env.TWITCH_CLIENT_ID
                },
            });

            return data.data

        } catch (e) {
            return null
        }
    }
}

export default new StreamsService();