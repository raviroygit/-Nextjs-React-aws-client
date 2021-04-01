import axios from 'axios';
import Head from 'next/head';
import Layout from  '../../components/Layout';
import Search from '../../components/search/Search';
import Footer from '../footer/footer';
import moment from 'moment';
import renderHTML from 'react-render-html'
import Link from 'next/link'
import {useState,useEffect} from 'react';
import { API, APP_NAME , DOMAIN,FB_APP_ID} from '../../config';


const BlogCategory = ({ category, blogs, query,totalCat,catLimit,catSkip }) => {




    const head = () => (
        <Head>
            <title>
                {category.name} | {APP_NAME}
            </title>
            <meta name="description" content={`Best programming tutorials on ${category.name}`} />
            <link rel="canonical" href={`${DOMAIN}/categories-blogs/${query.slug}`} />
            <meta property="og:title" content={`${category.name}| ${APP_NAME}`} />
            <meta property="og:description" content={`Best programming tutorials on ${category.name}`} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}/categories/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );
    const [allBlogs,setAllBlogs]= useState(blogs)
    const [limit, setLimit] = useState(catLimit);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(totalCat);
    const [loadedCat, setLoadedCat] = useState([]);


 
    

      const blog =()=>{
         return blogs.map((b,i)=>(
             
            <div key={i} className="lead pb-4" style={{borderTop:'1px dotted black'}}>
            <header  >
              <Link  href={`/blogs/${b.slug}`}>
                        <a style={{fontSize:'20px'}} >
                        <h2 className="pt-3 pb-3 font-weight-bold " >
                              {b.title}
                              </h2>
                          </a>
                    </Link>
            </header>
           
             <div className="row ">
               <div className="col-md-4">
                   <section>
                   <Link href={`${b.image.url}`}>
                   <a target='_blank'>
                   <img
                            className="img img-fluid"
                            style={{ maxHeight: '200px', width: '200px' }}
                            src={b.image &&  b.image.url}
                            placeholder='codeblog'
                            alt={b.title}
                        />
                        </a>
                         </Link>
                        </section>
                    </div>
                    <div className="col-md-8 font-italic">

                    <section>
                        <div className="pb-3">{renderHTML(b.excerpt)}</div>
                        <Link href={`/blogs/${b.slug}`}>
                            <a className="btn btn-primary pt-2">Read more</a>
                        </Link>
                    </section>
                    <section>
                            <p className=" ml-1 pt-2 pb-2 " style={{fontSize:'16px',float:'right'}}>
                            <span className=" text-dark" style={{paddingRight:'50px'}}>
                               {b.type} / {b.medium}
                            </span>                    
                               Published {moment(b.updatedAt).fromNow()}
                            </p>
                       </section>
                    </div>
             </div>
          </div>

          ));
      };


      const loadMore = async () => {
        let toSkip = skip + limit;

           const response = await axios.post(`${API}/categories-blogs/${query.slug}`,{skip:toSkip,limit});
    
                setAllBlogs([...allBlogs, ...response.data.blogs]);
                console.log('alllBogs', allBlogs);
                console.log('response.data.blogs.length', response.data.blogs.length);
                setSize(response.data.size);
                setSkip(toSkip);
            
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




    return (
        <React.Fragment>
            {head()}
           
            <main style={{ backgroundColor:'#bcb7b7'}}>

            <Layout>
                <Search/>
                {/* {JSON.stringify(size)} */}
             
                    <div className="container-fluid text-center" style={{marginTop:'0px'}} >
                    {/* <InfiniteScroll
                    pageStart={0}
                    loadMore={loadMore}
                    hasMore={size > 0 && size >= limit}
                    loader={<img key={0} src="/static/images/loading.gif" alt="loading" />}
                >
                   
                </InfiniteScroll>
                  */}
                       <header>
                            <div className="col-md-12 pt-3" >
                                <h1 className="display-4 font-weight-bold">{category.name}</h1>
                                {blog()}
                            </div>
                            <div className="text-center pt-5 pb-5" style={{backgroundColor:'#bcb7b7'}}>{loadMoreButton()}</div>

                        </header>
                    </div>
            </Layout>
            </main>

            <Footer/>
        </React.Fragment>
    );
};

BlogCategory.getInitialProps = async ({ query,req }) => {
    let skip=0;
    let limit=2;

    const response = await axios.post(`${API}/categories-blogs/${query.slug}`,{skip,limit});
   
     return { 
            category: response.data.category,
             blogs: response.data.blogs,
             totalCat:response.data.size,
             catLimit:limit,
             catSkip:skip,
              query 
            };
      
   
};

export default BlogCategory;
