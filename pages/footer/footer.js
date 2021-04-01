
import PrivaccyPolicy from '../../components/footer/PrivaccyPolicy';
import TermOfService from '../../components/footer/TermOfService';
import CopyrightIcon from '@material-ui/icons/Copyright';
import Contact from '../../components/footer/Contact';
import About from '../../components/footer/About';
import Resources from '../../components/footer/Resources';
import Community from '../../components/footer/Community';
import QuickLinks from '../../components/footer/QuickLinks';
import Card from 'react-bootstrap/Card';
import Icon from '../../components/footer/Icon';
import Support from '../../components/footer/Support';


const Footer=()=>{
  
   
    return(
      <React.Fragment>
         <div  className="row row-cols-auto font-italic"
         style={{overflow:'hidden',alignItems:'center',display:'flex',paddingTop:'50px', backgroundColor: 'black',maxWidth: '1364px',height:'auto',boaderRadius:'20px'}}>
         
              <Icon className="col" /> 
              <Resources className="col"/>
              <Community className="col"/>
              <QuickLinks className="col"/>
              <Support className="col" style={{merginLeft:'100px'}}/>
              <br/>


              {/* <div className="row " >
                 <PrivaccyPolicy className="col ml-auto pull-right" />
                  <br/>
                  <TermOfService className="col ml-auto pull-right" />
              </div> */}
              <br/>

           <div className="row font-italic pt-5"
            style={{width: '100%',marginLeft: '100px',color: 'green'}}>
             &nbsp; <CopyrightIcon/> &nbsp; {new Date().getFullYear()}  All right reserved!
             <a  href="http://raviroy.tech" target="_blank"
             style={{marginLeft: '15px'}}
             >
              Develop By Ravi Roy
             </a>
             <div className="row " >
                 
                  <TermOfService className="col ml-auto pull-right" />
              </div>
              <div className="row " >
              <PrivaccyPolicy className="col ml-auto pull-right" />
                  <br/>
             </div>
             
           </div>
           <div className='row display-flex justify-content-center text-center' style={{color:'green',paddingTop:'30px',marginLeft:'50px'}}> 
              Disclosure: This page may contain affliate links, may be redirect you another website.
              </div>
         </div>

        
      </React.Fragment>
    )
    }
export default Footer;