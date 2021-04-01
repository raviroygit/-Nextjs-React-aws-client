
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';
import Footer from '../footer/footer';

const Contact =()=>{
    return (
       <React.Fragment>
          <div style={{backgroundColor:'black'}}>
          <Layout>
             <div className="row text-white pt-2">Email: info@codelength.net</div>
          <div className="row row-cols-auto bg-image" >
            <div style={{marginLeft:'300px',marginTop:'-25px'}} >
            <h1 style={{marginBottom:'50px',marginLeft:'200px',color:'white',paddingTop:'80px'}}>Contact Us</h1>
               <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfK8pnDaNY_YrGTNbrBGAhfEuJL1iJuehMeh-utqeom_bVCxg/viewform?embedded=true"
                width="640" height="820" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
           
       </div>
       </div>
          </Layout>
          </div>
          <Footer/>
       </React.Fragment>
    );
};

export default Contact;