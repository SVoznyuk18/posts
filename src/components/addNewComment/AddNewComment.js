import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import { useHttp } from '../../hooks/https.hooks';
import { addNewComments } from '../dropDownCommentsMenu/commetsSlice';
import sendMessagePNG from '../../assets/sendMessage.png';
import './addNewComment.style.css';


const AddNewComment = (props) => {

    const { postId, setShowAddComment } = props;
    const { userId } = useSelector(state => state.singIn);
    const { users } = useSelector(state => state.users);
    const dispatch = useDispatch();
    const { request } = useHttp();

    const getInfoUser = (arr, userId) => {
        const userInfo = arr.find(item => item.id === userId);
        return userInfo;
    }

    const formik = useFormik({
        initialValues: {
            postId: postId,
            userId: userId,
            id: null,
            email: getInfoUser(users, userId).email,
            body: ''
        },
        validationSchema: Yup.object({
            body: Yup.string()
                .required('обязательное поле')
                .min(3, 'минимум 3 символа')
        }),
        onSubmit: (values) => {
            const form = { ...values, id: uuidv4() };

            request('http://localhost:3001/comments', 'POST', JSON.stringify(form))
                .then(dispatch(addNewComments(form)))
                .then(err => console.log(err))
            formik.resetForm();
            setShowAddComment(false);
        }
    });

    return (
        <div className="addComment_content">

            <img className="addComment_img" src={getInfoUser(users, userId).img} alt={`img ${getInfoUser(users, userId).name}`} />

            <form className="addComment_form" onSubmit={formik.handleSubmit}>
                <div className="addComment_content_box ">
                    <textarea
                        required
                        rows="2" cols="60"
                        type="textarea"
                        name="body"
                        className="addComment_content_box_textarea"
                        id="body"
                        placeholder="Add comment"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.body}
                    />
                    {formik.errors.title && formik.touched.title ? <div div className='addComment_box_error'>{formik.errors.body}</div> : null}
                </div>
                <button type="submit" className="addComment_btn">
                    <img className='addComment_btn_img' src={sendMessagePNG} alt={'sendMessagePNG'} />
                </button>
            </form>
        </div>
    );
}

export default AddNewComment;