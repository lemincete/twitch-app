import { FC } from 'react';

import styles from './streams-item.module.scss';
import { Link } from 'react-router-dom';

import { IStream } from '../../../../interfaces/stream.interface';


const StreamsItem: FC<IStream> = ({ title, thumbnail_url, game_name, user_id, viewer_count, tags, user_login, profile_image_url }) => {


    return (
        <article className={styles.root}>
            <div className={styles.root__body}>
                <div className={styles.root__body__image}>
                    <span className={styles.root__body__live}>LIVE</span>
                    <img src={thumbnail_url} alt={title} />
                    <span className={styles.root__body__viewers}>{viewer_count} viewers</span>
                </div>
            </div>
            <div className={styles.root__info}>
                <div className={styles.root__info__avatar}>
                    <img src={profile_image_url} alt={user_login} />
                </div>
                <div className={styles.root__info__stream}>
                    <Link className={styles.root__info__stream__title} to="/test">
                        <h3 >{title}</h3>
                    </Link>
                    <p className={styles.root__info__stream__nickname}>{user_login}</p>
                </div>
            </div>
        </article>
    );
}

export default StreamsItem;