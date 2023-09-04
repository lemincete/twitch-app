import axios from 'axios';

import { IGetTwitchAccessResponse } from './index.interface';

export const getAccessTokenTwitch = async () => {

    TODO: // add logging error

    try {
        const { data } = await axios.post<IGetTwitchAccessResponse>('https://id.twitch.tv/oauth2/token', {
            client_id: process.env.TWITCH_CLIENT_ID,
            client_secret: process.env.TWITCH_CLIENT_SECRET,
            grant_type: 'client_credentials'
        })

        return data;
    } catch (e: any) {
        return null
    }
}
