import Link from 'next/link'

const PrivaccyPolicy =()=>{
    return (
        <div className="row row-cols-auto">
            <div className="col ml-auto" style={{width:'200px'}}>
               <Link href="/privacy-policies">
                  <a target="_blank" style={{marginLeft:'100px',color:'green'}}> PrivaccyPolicy</a>
               </Link>
            </div>

        </div>
    );
};

export default PrivaccyPolicy;