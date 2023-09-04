import { FC } from 'react';

import Loader from '../../ui/loader';
import StreamsItem from './components/streams-item';

import styles from './index.module.scss';

import { useFetchActiveStreams } from "./queries";

interface StreamsProps {
    isHomePage: boolean
}

const Streams: FC<StreamsProps> = ({ isHomePage }) => {

    const { data, isLoading, isError } = useFetchActiveStreams(isHomePage ? '12' : '0');


    if (isLoading) {
        return <Loader />
    }

    if (!data) {
        return <h3>Data not found</h3>
    }


    return (
        <section className={styles.root}>
            {data.map(item => <StreamsItem {...item} key={item.id} />)}
        </section>
    );
}

export default Streams;