
import axios from 'axios';
import {useState,useEffect} from 'react';
import Head from 'next/head';

import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import Layout from  '../../components/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Footer from '../footer/footer';
import {withRouter} from 'next/router';
import Search from '../../components/search/Search';
import moment from 'moment';
import renderHTML from 'react-render-html'
import DisqusThread from '../../components/disqus/disqusThread';

const SingleBlog= ({blog,query,router})=>{

    const head = () => (
        <Head>
            <title>
            {`${query.slug}`} | {APP_NAME}
            </title>
            <meta name="description" content={blog.mdesc} />
            <link rel="canonical" href={`${DOMAIN}/blogs/${query.slug}`} />
            <meta property="og:title" content={`${query.slug}| ${APP_NAME}`} />
            <meta property="og:description" content={blog.mdesc} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );


    // const [related , setRelated]= useState([]);

    // useEffect(() => {
    //    loadRelated();
    // }, []);

    //  const loadRelated = async()=>{
    //     const response = await axios.post(`${API}/blogs/related`);
    //     // console.log(response);
    //     setRelated(response.data);
    //  }

    const handleClick = async BlogId => {
        const response = await axios.put(`${API}/click-count`, { BlogId });
    };



    const blogs=()=>(
       blog.map((b,i)=>(
           <React.Fragment>
               <Container fluid key={i} className="container-fluid ">
             
             <Row className="show grid text-center"  style={{objectFit:'cover',marginTop:'-49px',display:'inline-block',position:'relative',width:'100%',borderBottom:'1px solid black'}}>
                     <Col  onClick={() => handleClick(b._id)} md='auto' className='img-fluid' >
                         <figure className="position-relative windows.innerwidth ">
                         <Image
                            className="img-fluid responsive"
                          src={b.image.url}
                          alt={b.title}
                          class='responsive'
                        
                          style={{objectFit:'cover',height:'400px',width:'100%',minWidth:'270px',marginLeft:'-50px',borderBottom:'1px solid black'}}
                      />
                     
                        <figcaption  onClick={() => handleClick(b._id)} style={{borderBottom:'1px solid black',position:'absolute',bottom:'2rem',margin:'0 2rem',color:'white'}} >
                           Title: &nbsp; {b.mtitle}
                           <br/>
                           <br/>
                           Published &nbsp; {moment(b.createdAt).fromNow()}
                           <br/>
                           <span className="badge text-secondary pull-right">{b.clicks} Views</span>
                           {/* Description: &nbsp; {b.mdesc} */}
                           
                        </figcaption>
                         </figure>
                        <Col >
                        <Search />
                        </Col>
                        
                         <Col  onClick={() => handleClick(b._id)} style={{marginTop:'50px'}}>
                           <h1>{b.title}</h1>
                         </Col>
                         <Col className="display-flex justify-content-center text-center" style={{marginTop:'50px'}}>
                             
                            {renderHTML(b.body)}
                         </Col>
                     </Col>
                  </Row>
          
         </Container>
           </React.Fragment>
       ))
    
    )
    
    const showComments = () => {
        return (
            <div>
                <DisqusThread id={blog._id} title={blog.title} path={`/blog/${blog.slug}`} />
            </div>
        );
    };


    return (
          <React.Fragment>
              {head()}
              <div  style={{backgroundColor:'#bcb7b7'}}>
              <Layout >
                 
                {/* {JSON.stringify(blog)} */}

                 <main style={{marginTop:'65px'}}>
                 
                 <Container fluid >
                      <Col className=''>
                      {blogs()}
                      </Col>
                      {/* {JSON.stringify(related)} */}
                      {showComments()}
                  </Container>
  
                 </main>
           </Layout>
           <Footer/>
           </div>
          </React.Fragment>
    );
};

// fetching blogs data from backend
SingleBlog.getInitialProps = async ({query, req}) =>{

    const response = await axios.get(`${API}/blog/${query.slug}`);

    return {
        query,
        blog:response.data,
        

    }
}
export default withRouter(SingleBlog);