import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import withAdmin from '../../withAdmin';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { QuillModules, QuillFormats } from "../../../helpers/quill";
import { API } from '../../../config';
import { showSuccessMessage, showErrorMessage } from '../../../helpers/alerts';
import Layout from '../../../components/Layout';
import axios from 'axios';
import Resizer from 'react-image-file-resizer';
import { getCookie, isAuth,handleResponse } from '../../../helpers/auth';
import { set } from "js-cookie";
import Footer from '../../footer/footer';
import Search from "../../../components/search/Search";




const Create =({user,token})=>{
      
    const [state,setState]=useState({
        title:'',
        body:'',
        error:'',
        image:'',
        success:'',
        formData: process.browser && new FormData(),
        buttonText:'Create',
        imageUploadText:'Feature image',
        categories: [],
        loadedCategories: [],
        type:'',
        medium:'',
        formData: process.browser && new FormData(),

    });

    const [imageUploadButtonName, setImageUploadButtonName] = useState('Feature image');
    const [body, setBody]=useState('');
    const {
        title,
        error,
        success,
        formData,
        image,
        buttonText,
        imageUploadText,
        categories,
        loadedCategories,
        type,
        medium
      

    }=state;

    // load categories when component mounts using useEffect
    useEffect(() => {
        setState({...state, formData:new FormData()})
        loadCategories();

    }, [success]);

    const loadCategories = async () => {
        const response = await axios.get(`${API}/categories`);
        setState({ ...state, loadedCategories: response.data });
    };
    
    // show categories > checkbox
    const showCategories = () => {
        return (
            loadedCategories &&
            loadedCategories.map((c, i) => (
                <li className="list-unstyled" key={c._id}>
                    <input type="checkbox" onChange={handleToggle(c._id)} className="mr-2" />
                    <label className="form-check-label">{c.name}</label>
                </li>
            ))
        );
    };

    
    const handleToggle = c => () => {
        // return the first index or -1
        const clickedCategory = categories.indexOf(c);
        const all = [...categories];

        if (clickedCategory === -1) {
            all.push(c);
        } else {
            all.splice(clickedCategory, 1);
        }
        console.log('all >> categories', all);
        setState({ ...state, categories: all, success: '', error: '' });
        formData.append('categories',all);

    };

    // handleImput for medium
    const handleMediumClick = e => {
        setState({ ...state, medium: e.target.value, success: '', error: '' });
    };

    const showMedium = () => (
        <React.Fragment>
            <div className="form-check ml-3">
                <label className="form-check-label">
                    <input
                        type="radio"
                        onClick={handleMediumClick}
                        defaultChecked={medium === 'video'}
                        defaultValue="video"
                        className="from-check-input"
                        name="medium"
                    />{' '}
                    Video
                </label>
            </div>

            <div className="form-check ml-3">
                <label className="form-check-label">
                    <input
                        type="radio"
                        onClick={handleMediumClick}
                        defaultChecked={medium === 'book'}
                        defaultValue="book"
                        className="from-check-input"
                        name="medium"
                    />{' '}
                    Book
                </label>
            </div>
        </React.Fragment>
    );

    const showTypes = () => (
        <React.Fragment>
            <div className="form-check ml-3">
                <label className="form-check-label">
                    <input
                        type="radio"
                        onClick={handleTypeClick}
                        defaultChecked={type === 'free'}
                        defaultValue="free"
                        className="from-check-input"
                        name="type"
                    />{' '}
                    Free
                </label>
            </div>

            <div className="form-check ml-3">
                <label className="form-check-label">
                    <input
                        type="radio"
                        onClick={handleTypeClick}
                        defaultChecked={type === 'paid'}
                        defaultValue="paid"
                        className="from-check-input"
                        name="type"
                    />{' '}
                    Paid
                </label>
            </div>
        </React.Fragment>
    );

    // handleClick for toggle radio button
    const handleTypeClick = e => {
        setState({ ...state, type: e.target.value, success: '', error: '' });
    };

  
    // const handleTitleChange=(e)=>{
    //     console.log(e);
    //     setState({...state, [title]: e.target.value, error:'',success:''});
    //     formData.append('title',e);
    // };

    const handleBodyChange = e => {
        console.log(e);
        setBody(e);
        formData.set("body", e);
        setState({ ...state,  error: '', success: '' });

    };

  
    const handleChange = name => e => {
        const value = name === 'image' ? e.target.files[0] : e.target.value;
        const imageName = name === 'image' ? e.target.files[0].name : 'Upload image';
        formData.set(name, value);
        setState({ ...state, [name]: value, error: '', success: '', imageUploadText: imageName });
    };


    const handlePublish = async e =>{
        e.preventDefault();
        setState({...state, buttonText:'Creating'});
        console.table({title,body,image,categories,type,medium});

        try{
            const response = await axios.post(
                `${API}/blog`,
                formData,
                {title,body,image,categories,type,medium},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            handleResponse(response);
            setBody('');
            setState({
                ...state,
                title:'',
                image:'',
                success:`${title} is Created Successfully`,
                error:'',
                loadedCategories:[],
                categories:[],
                formData:'',
                buttonText:'Create'
            })
        }catch (error) {
            console.log("Blog submit Error", error);
            setState({...state, error: error.response.data.error});
        }
    };

    const createBlogForm = () => (
        <form onSubmit={handlePublish}>
            <div className="form-group">
                <label className="text-muted">Title</label>
                <input
                 onChange={handleChange('title')} 
                 value={title} type="text" 
                 className="form-control" 
                 required />
            </div>
            <div className="form-group">
                <label className="text-muted">Body</label>
             
                  <ReactQuill
                        modules={QuillModules}
                        formats={QuillFormats}
                        value={body}
                        placeholder="Write something amazing..."
                        onChange={handleBodyChange}
                    />
            </div>
            <div className="form-group">
                <label className="btn btn-outline-secondary">
                {imageUploadButtonName}
                    <input
                        onChange={handleChange('image')}
                        type="file"
                        accept="image/*"
                        className="form-control"
                        hidden
                    />
                </label>
            </div>
            <div>
                <button className="btn btn-outline-warning">{buttonText}</button>
            </div>
        </form>
    );

    return (
        <React.Fragment>
            <Layout>
           <Search/>
           <div className="row">
               <div className="col-md-12 offset-md-3">
                   <h1>Create Blog</h1>
                   <br />
               </div>
               <div className='row'>
                   <div className='col-md-4'>'
                       <div className="form-group">
                            <label className="text-muted ml-4">Category</label>
                            <ul style={{ maxHeight: '100px', overflowY: 'scroll' }}>{showCategories()}</ul>
                       </div>
                       <div className="form-group">
                          <label className="text-muted ml-4">Type</label>
                          {showTypes()}
                      </div>
                       <div className="form-group">
                         <label className="text-muted ml-4">Medium</label>
                            {showMedium()}
                        </div>
                   
                   </div>

                   <div className="col-md-8">
                       {success && showSuccessMessage(success)}
                       {error && showErrorMessage(error)}
                       {createBlogForm()}
                    </div>
               </div>
               
                   
           </div>
       </Layout>
       <Footer/>
        </React.Fragment>
    );
};



export default withAdmin(Create);