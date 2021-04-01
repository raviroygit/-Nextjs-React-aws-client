import Card from 'react-bootstrap/Card';
import Link from 'next/link';

const Community=()=>{
    return (
        <React.Fragment>
         <Card className='text-nowrap row row-cols-auto'
         style={{width: '200px',backgroundColor:'#141313',height:'200px',border:'1px solid green',marginLeft:'115px'}}>
             <Card.Body className="col">
                 <Card.Title style={{color:'#fff'}}>Community</Card.Title>
                 <Card.Text style={{fontFamily:'italic',marginLeft:'20px',float:'center',color:'grey',fontSize:'15px'}}>
                    <Link 
                    href="http://raviroy.tech" passHref>
                        <a target="_blank">Lerner</a>
                    </Link>
                    <br/>
                    <Link href="/blogs" passHref>
                     <a target="_blank">blogs</a>
                 </Link>
                  <br/>

                 <Link href="/blogs" passHref>
                     <a target="_blank">techblog</a>
                 </Link>
                 <br/>

                   <Link href="https://github.com/raviroygit">
                       <a target="_blank">Github</a>
                   </Link>
                    </Card.Text>
             </Card.Body>
        </Card>              
        </React.Fragment>
    );
};
export default Community;