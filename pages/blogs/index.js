import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useState } from 'react';
import { listBlogsWithCategoriesAndTags } from '../../actions/blog';
import Card from '../../components/blog/Card';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import CardStyle from "react-bootstrap/Card";
import Footer from "../footer/footer";
import InfiniteScroll from 'react-infinite-scroller';
import CatLayout from '../../components/CategoriesLayout';




const Blogs = ({ blogs, categories, tags, totalBlogs, blogsLimit, blogSkip, router }) => {
    const head = () => (
        <Head>
            <title>Programming blogs | {APP_NAME}</title>
            <meta
                name="description"
                content="Programming blogs and tutorials on react node next vue php laravel and web developoment"
            />
            <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
            <meta property="og:title" content={`Latest web developoment tutorials | ${APP_NAME}`} />
            <meta
                property="og:description"
                content="Programming blogs and tutorials on react node next vue php laravel and web developoment"
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

    const [limit, setLimit] = useState(blogsLimit);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(totalBlogs);
    const [loadedBlogs, setLoadedBlogs] = useState([]);

  

    const loadMore = () => {
        let toSkip = skip + limit;
        listBlogsWithCategoriesAndTags(toSkip, limit).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setLoadedBlogs([...loadedBlogs, ...data.blogs]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const loadMoreButton = () => {
        return (
            size > 0 &&
            size >= limit && (
                <button onClick={loadMore} className="btn btn-outline-primary btn-lg">
                    Load more
                </button>
            )
        );
    };

    const showAllBlogs = () => {
        return blogs.map((blog, i) => {
            // ()
            return (
                <article key={i}>
                    <Card blog={blog} />
                    <hr />
                </article>
            );
        });
    };

    const showAllCategories = () => {
        return categories.map((c, i) => (
            <Link href={`/categories-blogs/${c.slug}`} key={i}>
                <a className="btn btn-outline-primary mb-1 ml-3" style={{width:'150px'}} >{c.name}</a>
            </Link>
        ));
    };



    const showLoadedBlogs = () => {
        return loadedBlogs.map((blog, i) => (
            <article key={i}>
                <Card blog={blog} />
            </article>
        ));
    };

    return (
        <React.Fragment >
            {head()}
           <div style={{backgroundColor:'#bcb7b7'}}>
          
             <Layout >
                 {/* {JSON.stringify(blogs)} */}
                 <div className="MainDiv">

                    <div className="Second">
                    <header>
                                <div className=" col justify-content-center" style={{
                    // border:'1px solid greenborderBottom',
                    height:'auto',
                    width:'100%',
                    textAlign:'center',
                    justifyContent: 'center', 
                    margin:'40px'}}>
                                <h1 >
                                    Programming Blogs and Tutorials
                                </h1>
                                </div>
                               
                         </header>
                         <div className="col"style={{backgroundColor:'#bcb7b7'}} >{showAllBlogs()}</div>
                       <div className="col" style={{backgroundColor:'#bcb7b7'}}>{showLoadedBlogs()}</div>
                      <div className="text-center pt-5 pb-5" style={{backgroundColor:'#bcb7b7'}}>{loadMoreButton()}</div>

                    </div>

                 </div>
                 
            </Layout>
            <Footer/>
           </div>
        </React.Fragment>
    );
};

Blogs.getInitialProps = () => {
    let skip = 0;
    let limit = 10;
    return listBlogsWithCategoriesAndTags(skip, limit).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                blogs: data.blogs,
                categories: data.categories,
                tags: data.tags,
                totalBlogs: data.size,
                blogsLimit: limit,
                blogSkip: skip
            };
        }
    });
};

export default withRouter(Blogs);
