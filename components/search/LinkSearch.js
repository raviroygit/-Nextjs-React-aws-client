import Link from 'next/link';
import renderHTML from 'react-render-html';
import { useState, useEffect } from 'react';
import { listSearchLink } from '../../actions/linkSearch';
import Router, { withRouter } from 'next/router';
import styled from 'styled-components';


const StyledSection = styled.section`
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
`;

const Search = ({ router }) => {
    const [values, setValues] = useState({
        search: undefined,
        results: [],
        searched: false,
        message: ''
    });

    const { search, results, searched, message } = values;

    const searchSubmit = e => {
        e.preventDefault();
        listSearchLink({ search }).then(data => {
            setValues({ ...values, results: data, searched: true, message: `${data.length} Links found` });
        });
        // show search result on different page
        // https://www.udemy.com/instructor/communication/qa/8593208/detail/

        // Router.push({
        //     pathname: '/search',
        //     query: { searchQuery: search }
        // });
    };

    const handleChange = e => {
        // console.log(e.target.value);
        setValues({ ...values, search: e.target.value, searched: false, results: [] });
    };

    const searchedBlogs = (results = []) => {
        return (
            <div className="jumbotron bg-white " >
                {message && <p className="pt-4 text-muted font-italic">{message}</p>}

                {results.map((link, i) => {
                    return (
                        <div key={i}>
                            <Link href={`${link.slug}`}>
                                <a target="_blank" className="text-primary">{link.title}</a>
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    };

    const searchForm = () => (
        <form onSubmit={searchSubmit}>
            <div className="row">
                <div className="col-md-8">
                    <input type="search" className="form-control font-italic" placeholder="Search Link here... Programming Laguage,React,Angular,Android, database, backend, frontend, etc..." onChange={handleChange} />
                </div>

                <div className="col-md-4">
                    <button className="btn btn-block btn-outline-primary" type="submit">
                        Search
                    </button>
                </div>
            </div>
        </form>
    );

    return (
        
         <div className="container-fluid color-black">
            <div className="pt-3 pb-5">{searchForm()}</div>
            {searched && <div style={{ marginTop: '-120px', marginBottom: '-80px' }}>{searchedBlogs(results)}</div>}
        </div>
        
    );
};

export default withRouter(Search);
