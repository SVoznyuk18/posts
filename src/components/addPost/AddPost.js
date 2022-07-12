import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import { addNewPost } from '../postsList/postsListSlice';
import { showAddPost } from './addPostSlice';
import { useHttp } from '../../hooks/https.hooks';
import './addPost.style.css';

const AddPost = () => {
    const { request } = useHttp();
    const dispatch = useDispatch();
    const { modalActiveClass } = useSelector(state => state.addPost);
    const { userId } = useSelector(state => state.singIn)

    const formik = useFormik({
        initialValues: {
            title: '',
            body: ''
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required('обязательное поле')
                .min(3, 'минимум 3 символа'),
            body: Yup.string()
                .required('обязательное поле')
                .min(3, 'минимум 3 символа')
        }),
        onSubmit: (values) => {
            const form = { id: uuidv4(), userId: userId, ...values };

            request('http://localhost:3001/posts', 'POST', JSON.stringify(form))
                .then(dispatch(addNewPost(form)))
                .then(err => console.log(err))
            formik.resetForm();
        }
    });

    return (
        <div className={`addPost ${modalActiveClass}`}>

            <div className='addPost_content'>
                <h1 className="addPost_header">Add Post</h1>
                <form className="addPost_form" onSubmit={formik.handleSubmit}>
                    <div className="addPost_content_box">
                        <div className='addPost_close' onClick={() => dispatch(showAddPost(''))}>&times;</div>
                        <input
                            required
                            type="text"
                            name="title"
                            className="addPost_content_box_input"
                            id="title"
                            placeholder="title"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.title}
                        />
                        {formik.errors.title && formik.touched.title ? <div className='addPost_content_box_error'>{formik.errors.title}</div> : null}
                    </div>

                    <div className="addPost_content_box ">
                        <textarea
                            required
                            rows="33" cols="50"
                            type="textarea"
                            name="body"
                            className="addPost_content_box_textarea"
                            id="body"
                            placeholder="Text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.body}
                        />
                        {formik.errors.title && formik.touched.title ? <div div className='addPost_content_box_error'>{formik.errors.body}</div> : null}
                    </div>
                    <button type="submit" onClick={() => dispatch(showAddPost(''))} className="addPost_content_btn">Add new posts</button>
                </form>
            </div>
        </div>
    )
}

export default AddPost;