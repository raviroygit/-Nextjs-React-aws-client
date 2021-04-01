
import Link from 'next/link';
import Card from 'react-bootstrap/Card';

const QuickLinks =()=>{
    return (
          <React.Fragment>
              <Card className="text-nowrap row row-cols-auto"
              style={{border:'1px solid green',backgroundColor:'#141313',height:'200px',width: '200px',marginLeft:'115px'}}
          > 
              <Card.Body className="col">
              <h5 style={{color:'white'}}>Quick Links</h5>
              
              <Card.Text style={{fontFamily:'italic',marginLeft:'20px',float:'center',color:'grey',fontSize:'15px'}}>
                    <Link 
                    href="#" passHref>Resouces Link
                    </Link>
                    <br/>
                    <Link 
                    href="http://raviroy.tech" passHref>
                        <a target="_blank">Programming</a>
                    </Link>
                    <br/>
                    <Link href="/blogs" passHref>
                     <a target="_blank">blogs</a>
                 </Link>
                  
                    </Card.Text>
              </Card.Body>
          </Card>
          
          </React.Fragment>
        
    );
};

export default QuickLinks;