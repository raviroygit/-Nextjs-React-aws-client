
import Link from 'next/link';

const Contact =()=>{
    return (
       <div className="row row-cols-auto">
            <div className="col" style={{fontFamily:'italic',color: 'gray',cursor: 'pointer'}}>
           <Link href="/contact-us">
           <a  target="_blank"
            style={{marginLeft: '20px'}}
            >
               <h6>Contact Us</h6>
               
            </a>
               
           </Link>
            
           
       </div>
       </div>
    );
};

export default Contact;