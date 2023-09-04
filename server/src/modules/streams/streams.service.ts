import $api from "../../http";

class StreamsService {
    async getStreams(first: string) {

        try {
            const { data } = await $api.get('http://api.twitch.tv/helix/streams', {
                headers: {
                    'Client-ID': process.env.TWITCH_CLIENT_ID
                },
                params: {
                    first
                }
            })

        } catch (e: any) {
            // console.log(e);
        }
    }
}

export default new StreamsService();