import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import withAdmin from '../../withAdmin';
import Resizer from 'react-image-file-resizer';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { QuillModules, QuillFormats } from "../../../helpers/quill";
import { API } from '../../../config';
import { showSuccessMessage, showErrorMessage } from '../../../helpers/alerts';
import Layout from '../../../components/Layout';
import axios from 'axios';
 import { getCookie } from '../../../helpers/auth';
 import Footer from '../../footer/footer';
import Search from "../../../components/search/Search";

 const CreateBlog = ({user,token }) => {
  

    const [state, setState] = useState({
        title:'',
        body:'',
        type:'',
        medium:'',
        error: '',
        imsage:'',
        categories: [],
        loadedCategories: [],
        success: '',
        // formData: '',
        buttonText:'Publish',
        hidePublishButton: false
    });
    const [body, setBody] = useState('');
    const [imageUploadButtonName, setImageUploadButtonName] = useState('Upload Feature image');

    const { title,buttonText,imageUploadText, image,categories, loadedCategories, success, error, type, medium,hidePublishButton } = state;

    useEffect(() => {
        // setValues({ ...values, formData: new FormData() });
        loadCategories();
    }, [success]);

    const loadCategories = async () => {
        const response = await axios.get(`${API}/categories`);
        setState({ ...state, loadedCategories: response.data });
    };

    const handleImage = event => {
        let fileInput = false;
        if (event.target.files[0]) {
            fileInput = true;
        }
        setImageUploadButtonName(event.target.files[0].name);
        if (fileInput) {
            Resizer.imageFileResizer(
                event.target.files[0],
                300,
                300,
                'JPEG',
                100,
                0,
                uri => {
                     console.log(uri);
                    setState({ ...state, image: uri, success: '', error: '' });
                },
                'base64'
            );
        }
    };

    const handleTitleChange =title=> e => {
        console.log(e);
        setState({ ...state, [title]: e.target.value, error: '', success: '' });
    };
    const handleBodyChange = e => {
        console.log(e);
        setBody(e);
        setState({ ...state,  error: '', success: '' });
    };

    const handleTypeClick = e => {
        setState({ ...state, type: e.target.value, success: '', error: '' });
    };

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
                        checked={medium === 'video'}
                        value="video"
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
                        checked={medium === 'book'}
                        value="book"
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
                        checked={type === 'free'}
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
                        checked={type === 'paid'}
                        value="paid"
                        className="from-check-input"
                        name="type"
                    />{' '}
                    Paid
                </label>
            </div>
        </React.Fragment>
    );

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
    };

 
     
    const publishBlog = async e =>{
          e.preventDefault();
          setState({ ...state, buttonText: 'Creating' });
          console.table({title,body,image,type,medium});

          try{
              const response = await axios.post (
                  `${API}/blog`,
                  {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                  }
              );
              console.log('CATEGORY CREATE RESPONSE', response);
              setImageUploadButtonName('Upload image');
              setState({
                  ...state,
                  title:'',
                  body:'',
                  success:'',
                  error:'',
                  loadedCategories:[],
                  categories:[],
                  type:'',
                  medium:'',
                  formData: '',
                  buttonText: 'Created',
                  imageUploadText: 'Upload image',
                  success: `${response.data.title} is created`

              });

          }
          catch(error){
              console.log('Create Blog Error',error);
              setState({...state,error: error.response.data.error});
          }
    }


    const createBlogForm = () => {
        return (
            <form onSubmit={publishBlog}>
                <div className="form-group">
                    <label className="text-muted">Title</label>
                    <input type="text" className="form-control" value={title} onChange={handleTitleChange('title')} />
                </div>

                <div className="form-group">
                    <ReactQuill
                        modules={CreateBlog.modules}
                        formats={CreateBlog.formats}
                        value={body}
                        placeholder="Write something amazing..."
                        onChange={handleBodyChange}
                    />
                </div>
                <div className="form-group">
                <label className="btn btn-outline-secondary">
                    {imageUploadButtonName}
                    <input onChange={handleImage} type="file" accept="image/*" className="form-control" hidden />
                </label>
            </div>
                <div>
                    <button type="submit" className="btn btn-primary">
                         {buttonText}
                    </button>
                </div>
            </form>
        );
    };

    return (
         <React.Fragment>
              <Layout>
          <Search/>
        <div className="row">
            <div className="col-md-12">
                <h1>Create Blog!</h1>
                <br />
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
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
       </Layout>
       <Footer/>
         </React.Fragment>
    );
};

export default CreateBlog;