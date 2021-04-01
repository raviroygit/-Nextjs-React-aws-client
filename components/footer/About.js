
import Link from 'next/link';
const About=()=>{
    return (
        <div style={{fontFamily:'italic',color: 'gray'}}>
            
                <Link href='/about'>
                   <a target="_blank">About Us</a>
                </Link>
        </div>
    );
};
export default About;