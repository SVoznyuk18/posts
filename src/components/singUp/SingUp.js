import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { useHttp } from '../../hooks/https.hooks';
import { fetchUsers } from "../usersList/usersListSlice";
import { addNewUser } from '../usersList/usersListSlice';
import './singUp.style.css';

const SingUp = () => {

    const dispatch = useDispatch();
    const { users } = useSelector(state => state.users);
    const { request } = useHttp();

    useEffect(() => {
        dispatch(fetchUsers());
        // eslint-disable-next-line
    }, [])

    const formik = useFormik({
        initialValues: {
            name: '',
            username: '',
            img: 'http://dummyimage.com/120',
            role: 'user',
            email: '',
            address: {
                street: '',
                suite: '',
                city: '',
            },
            phone: '',
            website: '',
            company: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('обязательное поле'),
            username: Yup.string()
                .required('обязательное поле'),
            email: Yup.string()
                .required('обязательное поле')
                .email(),
            phone: Yup.number()
                .positive()
                .integer()
                .required('обязательное поле'),
            website: Yup.string(),
            company: Yup.string()
        }),
        onSubmit: (values) => {
            const username = users.find(item => item.username.toLowerCase() === values.username.toLowerCase());
            const email = users.find(item => item.email.toLowerCase() === values.email.toLowerCase());

            if (username === undefined && email === undefined) {
                const form = { id: uuidv4(), ...values }
                request('http://localhost:3001/users', 'POST', JSON.stringify(form))
                    .then(dispatch(addNewUser(form)))
                    .then(err => console.log(err))

            } else {
                prompt('Пользователь с таким именем или емайлом существует');
            }
            formik.resetForm();
        }
    })

    return (
        <div className="singUp">
            <form className="singUp_content" onSubmit={formik.handleSubmit}>
                <h1 className="singUp_header">singUp</h1>
                <div className='singUp_input_box'>
                    <input
                        required
                        type="text"
                        name="name"
                        className="singUp_content_input"
                        id="name"
                        placeholder="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.errors.name && formik.touched.name ? <div className='singUp_error'>{formik.errors.name}</div> : null}
                </div>

                <div className='singUp_input_box'>
                    <input
                        required
                        type="text"
                        name="username"
                        className="singUp_content_input"
                        id="username"
                        placeholder="username"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                    />
                    {formik.errors.username && formik.touched.username ? <div className='singUp_error'>{formik.errors.username}</div> : null}
                </div>

                <div className='singUp_input_box'>
                    <input
                        required
                        type="text"
                        name="email"
                        className="singUp_content_input"
                        id="email"
                        placeholder="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.errors.email && formik.touched.email ? <div className='singUp_error'>{formik.errors.email}</div> : null}
                </div>

                <div className='singUp_input_box'>
                    <input
                        required
                        type="number"
                        name="phone"
                        className="singUp_content_input"
                        id="phone"
                        placeholder="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                    />
                    {formik.errors.phone && formik.touched.phone ? <div className='singUp_error'>{formik.errors.phone}</div> : null}
                </div>

                <div className='singUp_input_box'>
                    <input
                        required
                        type="text"
                        name="website"
                        className="singUp_content_input"
                        id="website"
                        placeholder="website"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.website}
                    />
                    {formik.errors.website && formik.touched.website ? <div className='singUp_error'>{formik.errors.website}</div> : null}
                </div>

                <div className='singUp_input_box'>
                    <input
                        required
                        type="text"
                        name="company"
                        className="singUp_content_input"
                        id="company"
                        placeholder="company"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.company}
                    />
                    {formik.errors.company && formik.touched.company ? <div className='singUp_error'>{formik.errors.company}</div> : null}
                </div>

                <button type="submit" className="singUp_btn">singUp</button>
            </form>
        </div>
    )
}

export default SingUp;