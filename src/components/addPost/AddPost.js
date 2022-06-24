import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPost } from '../postsList/postsListSlice';
import { showAddPost } from './addPostSlice';
import './addPost.style.css';

const AddPost = () => {

    const dispatch = useDispatch();
    const showModal = useSelector(state => state.addPost.modalActiveClass);

    const formik = useFormik({
        initialValues: {
            userId: 10,
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
            const form = { id: uuidv4(), ...values };
            dispatch(addNewPost(form));
            formik.resetForm();
        }
    });

    return (
        <div className={`addPost ${showModal}`}>
            <form className="addPost_content" onSubmit={formik.handleSubmit}>
                <h1 className="addPost_header">Add Post</h1>
                {/*  <div className="addPost_content_box">
                        <label htmlFor="userName" className="addPost_content_box-lable">UserName</label>
                        <input
                            required
                            type="text"
                            name="userName"
                            className="addPost_content_box_input"
                            id="userName"
                            placeholder="user name"
                        />
                    </div> */}

                <div className="addPost_content_box">
                    <label htmlFor="title" className="addPost_content_box-lable">Title</label>
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
                    {formik.errors.title && formik.touched.title ? <div>{formik.errors.title}</div> : null}
                </div>

                <div className="addPost_content_box ">
                    <label htmlFor="body" className="addPost_content_box-lable">Text</label>
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
                    {formik.errors.title && formik.touched.title ? <div>{formik.errors.body}</div> : null}
                </div>
                <button type="submit" onClick={() => dispatch(showAddPost(''))} className="addPost_content_btn">Add new posts</button>
            </form>
        </div>
    )
}

export default AddPost;