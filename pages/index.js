import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import moment from 'moment';
import Link from 'next/link';
import { API , FB_APP_ID,DOMAIN,APP_NAME} from '../config';
import Footer from './footer/footer';
import Search from '../components/search/Search';
import DisqusThread from '../components/disqus/disqusThreadIndex';
import Tilt from 'react-tilt';
import Head from 'next/head';
import {withRouter,router} from 'next/router'


export const config = {
    unstable_runtimeJS: false
}


const Home = ({ categories,router }) => {

    const head = () => (
        <Head>
            <title>{APP_NAME}</title>
            {/* <Image src='/background6.jpeg' width={50} height={20}/> */}
            <meta
                name="description"
                content="Collection of programming blogs and tutorials on react node next vue php laravel and web developoment"
            />
            <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
            <meta property="og:title" content={`Latest web developoment tutorials | ${APP_NAME}`} />
            <meta
                property="og:description"
                content="Collection of programming blogs and tutorials on react node next vue php laravel and web developoment"
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );



    const [popular, setPopular] = useState([]);

    useEffect(() => {
        loadPopular();
    }, []);

    const loadPopular = async () => {
        const response = await axios.get(`${API}/link/popular`);
        // console.log(response);
        setPopular(response.data);
    };

    const handleClick = async linkId => {
        const response = await axios.put(`${API}/click-count`, { linkId });
        loadPopular();
    };

    const listOfLinks = () =>
        popular.map((l, i) => (
            <div key={i} className="row alert alert-secondary  ">
                <div className="col-md-4" onClick={() => handleClick(l._id)}>
                    <a href={l.url} target="_blank">
                        <h5 className="pt-2">{l.title}</h5>
                        <h6 className="pt-2 text-danger" style={{ fontSize: '12px' }}>
                            {l.url}
                        </h6>
                    </a>
                </div>

                <div className="col-md-4 pt-2">
                    <span className="pull-right">
                       Published {moment(l.createdAt).fromNow()}  
                        {/* by {l.postedBy.name}  */}
                    </span>
                </div>

                <div className="col-md-12">
                    <span className="badge text-dark">
                        {l.type} {l.medium}
                    </span>
                    {l.categories.map((c, i) => (
                        <span key={i} className="badge text-success">
                            {c.name}
                        </span>
                    ))}
                    <span className="badge text-secondary pull-right">{l.clicks} Views</span>
                </div>
            </div>
        ));

    const listCategories = () =>
        categories.map((c, i) => (
            <Link key={i} href={`/links/${c.slug}`}>
               
                <a style={{ border: '0.5px solid black' }} className="bg-light p-2 col-md-4">
                
                    <div>
                        <div className="row">
                            <div className="col-md-4">
                                <img
                                    src={c.image && c.image.url}
                                    alt={c.name}
                                    style={{ width: '70px', height: 'auto' }}
                                    className="pr-3"
                                />
                            </div>
                            <div className="col-md-4" style={{marginLeft:'10px'}}>
                                <h3>{c.name}</h3>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        ));

        
    const showComments = () => {
        return (
            <div>
                <DisqusThread id={popular._id} title={popular.name} path={`/`} />
            </div>
        );
    };


    return (
        <React.Fragment>
           {head()}
            <div style={{paddingTop:'80px',backgroundColor:'#bab8b8'}}>
            <Layout>
           <Search />

            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className="font-weight-bold">Browse Tutorials/Courses Links and blogs</h1>
                    <br />
                </div>
            </div>

            <div className="row " >{listCategories()}</div>

            <div className="row pt-1">
                <h2 className="font-weight-bold pb-3 pt-5 " style={{marginLeft:'50px'}}>Top {popular.length} Trending Links</h2>
                {<div className="col-md-10 pr-3 overflow-hidden">{listOfLinks()}</div>}
            </div>
           
           <div style={{marginTop:'100px'}}>
               {showComments()}
           </div>
        </Layout>
        <Footer/>
            </div>

        </React.Fragment>
    );
};

Home.getInitialProps = async () => {
    const response = await axios.get(`${API}/categories`);
    return {
        categories: response.data
    };
};

export default withRouter(Home);
