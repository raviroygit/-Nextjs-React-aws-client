import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API,server } from '../../config';
import axios from 'axios';

import React from 'react';

const Card = ({ blog }) => {
    
    // const handleClick = async BlogId => {
    //     const response = await axios.put(`${API}/blog/click-count`, { BlogId });
    // };

    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (
            <Link  key={i} href={`/categories-blogs/${c.slug}`}>
                <a className="btn  mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
        ));

       

    return (
       <React.Fragment>
          
        <div  className="lead pb-4" style={{borderTop:'1px dotted black'}}>
           <div >
           <header >
                <Link  href={`/blogs/${blog.slug}`}>
                    <a>
                        <h2 className="pt-3 pb-3 font-weight-bold text-center" >{blog.title}</h2>
                    </a>
                </Link>
            </header>
           </div>

            <div className="row">
                <div className="col-md-4">
                    <section>
                        <img
                            className="img img-fluid"
                            style={{ maxHeight: '200px', width: '200px' }}
                            src={blog.image && blog.image.url}
                            alt={blog.title}
                        />
                    </section>
                </div>
                <div className="col-md-8 font-italic">
                     
                    <section >
                        <div className="pb-3">{renderHTML(blog.excerpt)}</div>
                        <Link href={`/blogs/${blog.slug}`}>
                            <a className="btn btn-primary pt-2">Read more</a>
                        </Link>
                    </section>
                    <section  style={{float:'left'}}>
                        {showBlogCategories(blog)}
                       <br />
                      <br />
                  </section>
                    <section>
                    {/* <span className="badge text-secondary pull-right">{blog.clicks} Views</span> */}
                <p className=" ml-1 pt-2 pb-2 " style={{fontSize:'16px',float:'right'}}> 
                <span className=" text-dark" style={{paddingRight:'50px'}}>
                               {blog.type} / {blog.medium}
                            </span>                   
                    | Published {moment(blog.updatedAt).fromNow()}
                </p>
            </section>
                </div>
            </div>
            
        </div>
       </React.Fragment>
    );
};

export default Card;
