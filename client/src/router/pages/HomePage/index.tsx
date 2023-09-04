import Layout from "../../../modules/layout";
import Navigation from "../../../modules/navigation";
import Streams from "../../../modules/streams";


const Home = () => {
    return (
        <Layout>
            <Navigation />
            <Streams isHomePage={true} />
        </Layout>
    );
}

export default Home;