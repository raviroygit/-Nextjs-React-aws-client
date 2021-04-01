import React from 'react';
import Card from 'react-bootstrap/Card'
import Tilt from "react-tilt";
import Layout from '../../components/Layout';
import Footer from '../footer/footer';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import Head from 'next/head';
import { withRouter } from 'next/router';
import Link from 'next/link';



const About =({router})=>{

    const head = () => (
        <Head>
            <title> About Us | {APP_NAME}</title>
            <meta
                name="description"
                content="About Us About Me Our Story Our Mission Empowering Teachers"
            />
            <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
            <meta property="og:title" content={`About Us About Me Our Story Our Mission Empowering Teachers | ${APP_NAME}`} />
            <meta
                property="og:description"
                content="About Us About Me Our Story Our Mission Empowering Teachers"
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/me.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );


    return (

       <React.Fragment>
                       {head()}
           <div style={{backgroundColor:'black'}}>
        <Layout>

        <div className="row row-cols-auto display-flex" >

              <Tilt options={{transition: true, max: 15}}>
                   <Card className='col pull-left display-flex' style={{height:'auto',width:'700px',color:'white',backgroundColor:'transparent'}}>
                       <Card.Header>
                       <h1>About Codelength</h1>
                       </Card.Header>
                   <Card.Body style={{color:'green'}}>
                   Our goal is to give anyone in the world the right to post their Links,Courses, tutorials,resources.
                 that help students to gain high-level skills .
                   We want to set out to new interactive way of learning — making it engaging, flexible, and accessible for as many people as possible. 
                    So people unlock modern technical skills and reach their full potential through code.
                   </Card.Body>
                  </Card>
            </Tilt>
        </div>
        <div className="row display-flex">
         <div className='col'>
         <Tilt options={{transition: true, max: 15}}>
           <Card className='col pull-right ml-auto' style={{height:'auto',width:'700px',color:'white',backgroundColor:'transparent'}}>
               <Card.Header style={{color:'white'}}>
                   <h1>Our Story</h1>
               </Card.Header>
             <Card.Body style={{color:'green'}}>
                We Provide an opportunity to teachers to Share their Courses, tutorials and resourses Links. 
                Anyone can learn anything free here and as well as subscriptions mode.
                    Education is a human right.
                        We are a nonprofit because we believe in a free education for anyone, anywhere. 
                Instead of ads or subscriptions, we are supported by individual and subscriptions contributions from people like you. 
             </Card.Body>
          </Card>
      </Tilt>

         </div>
     </div>

     <div className="row display-flex">
         <Tilt options={{transition: true, max: 15}}>
           <Card className='col pull-left display-flex ml-auto' style={{height:'auto',width:'700px',color:'white',backgroundColor:'transparent'}}>
               <Card.Header style={{color:'white'}}>
                   <h1>Empowering Teachers</h1>
               </Card.Header>
             <Card.Body style={{color:'green'}}>
               
             
            Students stand to gain the most from technology, and every student deserves the Resources to succeed. The best way to set students up for success is to help empower teachers.

            We provide teachers to post resources links,blogs to teach programming,technology thorugh providing the resources at subscriptions and no cost — so every student has access high-quality skills that will shape the future.


           Our Vision: To be the most daring engineering community on the planet.

         Our Mission: 
             </Card.Body>
          </Card>
      </Tilt>

     </div>
     <br/>
     <br/>
     <div className="row display-flex pull-right">
     <div className='col'>
         <Tilt options={{transition: true, max: 15}}>
           <Card className='col pull-right ml-auto'
            style={{height:'auto',width:'700px',color:'white',backgroundColor:'transparent',float:'right'}}>
               <Card.Header style={{color:'white'}}>
                   <h1>Our Mission</h1>
               </Card.Header>
             <Card.Body style={{color:'green'}}>
               
             We want to create a world where anyone can build something meaningful with technology,
           and everyone has the learning tools, resources, and opportunities to do so.
           We aim to inspire and educate problem-solvers and independent thinkers to pursue technical career paths and fulfill their potential.
           <br/>
           We are engineers Indian by our unwavering dedication to solving the world’s greatest challenges and building a better future for society.
             </Card.Body>
          </Card>
      </Tilt>
     </div>
     </div>

     <div className="row display-flex pull-right pt-5">
     <div className='col'>
         <Tilt options={{transition: true, max: 15}}>
         <Card style={{width:'300px',float:'right',backgroundColor:'transparent'}}>
              <Card.Body>
              <div className='col pull-right'>
                   <img
                            src="static/images/me.jpg"
                            alt="About m"
                            style={{ width: '100%', maxHeight: '300px' ,float:'right',borderRadius:'10px'}}
                        />
                 
             </div>
              </Card.Body>
          </Card>
           <Card className='col pull-center ml-auto'
            style={{height:'auto',width:'700px',color:'white',backgroundColor:'transparent',float:'right'}}>
               <Card.Header style={{color:'white'}}>
                   <h1 className="text-center">About Me</h1>
               </Card.Header>
             <Card.Body style={{color:'green'}}>
               
             My Name is Ravi Roy the founder of Codelength.
             <br/>
           I am Conputer Science Engineer by profession but Blogger by passion.
           <br/>
           I am passionate about sharing my all learnings and experiences through blogging,
           <br/>
          Programming language,MEARN,FullStack SEO ,Google ranking and ect...
          <br/>
          my goal is always driven towards providing amazing experience with the best level of quality and service to them.
          want to Know more about me. click me <Link href="https://raviroy.tech"><a target="_blank">Ravi Roy</a></Link>
         
            
             </Card.Body>
            
          </Card>
          
      </Tilt>
     </div>
     
    
     </div>


        </Layout>
        </div>
        <Footer/>
       </React.Fragment>
    );
};


export default withRouter(About);