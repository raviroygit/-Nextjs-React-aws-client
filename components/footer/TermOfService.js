import Link from 'next/link'

const TermOfService =()=>{
    return (
        <div className="row row-cols-auto">
            <div className="col pull-right" style={{width:'200px',marginLeft:'20px'}}>
            <Link href="/terms-conditions">
            <a target="_blank"style={{marginLeft:'20px',marginTop:'100px',color:'green'}}> Term and Conditions</a>
        </Link>
            </div>
        </div>
    );
};

export default TermOfService;