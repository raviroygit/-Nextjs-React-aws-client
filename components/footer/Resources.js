import Card from 'react-bootstrap/Card';
import Link from 'next/link';

const Resources=()=>{
    return (
        <React.Fragment>
            <Card className="text-nowrap row row-cols-auto"
            style={{display:'-webkit-inline-flex',backgroundColor:'#141313',width:'200px',height:'200px',marginLeft:'80px',border:'1px solid green'}}> 
                <Card.Body >
                    <Card.Title className="col" style={{color:'#fff'}}>
                        Resources
                    </Card.Title>
                    <Card.Text style={{fontFamily:'italic',marginLeft:'20px',float:'center',color:'grey',fontSize:'15px'}}>
                    <Link 
                    href="http://raviroy.tech" passHref>
                        <a target="_blank">Programming</a>
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
export default Resources;