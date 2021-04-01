import Card from 'react-bootstrap/Card';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Link from 'next/link';

const Icon =()=>{
    return (
             <React.Fragment>
                 <Card className="row "
                 style={{border:'1px solid green',marginLeft:'0px',width:'50px',height:'200px',backgroundColor: '#141313'}}>
                     <Card.Body className="col " style={{float:'right'}}>
                     <div className='fa fa-facebook' style={{color:'#7f43e0',paddingBottom:'10px'}}>
                          
                          <Link  href="https://www.facebook.com/Codelength-110125167841552">
                                   <a target="_blank"><span><FacebookIcon/></span></a>
                                </Link>
                          </div>
                        <div style={{color:'#877f7f',paddingBottom:'10px'}}>
                           
                                <Link href="https://github.com/raviroygit">
                                   <a target="_blank"><GitHubIcon /></a>
                                </Link>
                            
                        </div>
                        <div style={{color:'#c96060',paddingBottom:'10px'}}>
                              <Link  href="https://www.instagram.com/codelength/">
                                   <a target="_blank"><InstagramIcon/></a>
                             </Link>
                         </div>
                        <div style={{color:'#2a1c77',paddingBottom:'10px'}}> 
                            <Link  href="http://raviroy.tech">
                                   <a target="_blank"><LinkedInIcon/></a>
                            </Link>
                        </div>
                        <div style={{color:'#e24141',paddingBottom:'10px'}}>
                            <Link href="http://raviroy.tech">
                                   <a target="_blank"><YouTubeIcon/></a>
                            </Link> 
                        </div>
                     </Card.Body>
                 </Card>
             </React.Fragment>
    );
};
export default Icon;