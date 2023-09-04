import TwitchEmbedVideo from 'react-twitch-embed-video';

import { useParams } from 'react-router-dom';

const UserPage = () => {

    const { channel } = useParams() as { channel: string };

    return (
        <TwitchEmbedVideo channel={channel} width="80%" height="400" parent={['localhost']} chat="default" />
    );
}

export default UserPage;