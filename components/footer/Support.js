import Card from 'react-bootstrap/Card';
import About from './About';
import Contact from './Contact';

const Support =()=>{
    return (

        <React.Fragment>
            <Card className="text-nowrap row row-cols-auto"
           style={{backgroundColor:'#141313',height:'200px',width: '200px',marginLeft:'115px',border:'1px solid green'}}
            >
                <Card.Body className="col">
                    <Card.Text style={{color:'#fff'}}>
                        S U P P O R T
                    </Card.Text>
                     <Contact/>
                     <About/>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default Support;