import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "../usersList/usersListSlice";
import { logIn } from './singInSlice';
import { useEffect } from 'react';
import './singIn.style.css'

const SingIn = () => {

    const dispatch = useDispatch();
    const { users } = useSelector(state => state.users)

    useEffect(() => {
        dispatch(fetchUsers());
        // eslint-disable-next-line
    }, [])

    const formik = useFormik({
        initialValues: {
            userName: ''
        },
        validationSchema: Yup.object({
            userName: Yup.string()
                .required('обязательное поле')
        }),
        onSubmit: (values) => {
            const user = users.find(item => item.username.toLowerCase() === values.userName.toLowerCase());
            if (user !== undefined) {
                const userId = users.find(item => item.username.toLowerCase() === values.userName.toLowerCase())
                dispatch(logIn(userId.id));
            }
            formik.resetForm();
        }
    })
    return (
        <div className="singIn">
            <form className="singIn_content" onSubmit={formik.handleSubmit}>
                <h1 className="singIn_header">singIn</h1>
                <div className='singIn_input_box'>
                    <input
                        required
                        type="text"
                        name="userName"
                        className="singIn_content_input"
                        id="userName"
                        placeholder="userName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.userName}
                    />
                    {formik.errors.userName && formik.touched.userName ? <div className='singIn_error'>{formik.errors.userName}</div> : null}
                </div>
                <button type='submit' className="singIn_btn">SingIn</button>
            </form>
        </div>
    )
}

export default SingIn;