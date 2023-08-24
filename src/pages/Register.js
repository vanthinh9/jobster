import { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import { FormRow, Logo } from '../components';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const inittialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    // tongggle: true,
};
function Register() {
    const [values, setValues] = useState(inittialState);

    const { user, isLoading } = useSelector((store) => store.user);
    const distpatch = useDispatch();

    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({ ...values, [name]: value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, isMember } = values;
        if (!email || !password || (!isMember && !name)) {
            toast.error('Please fill out all fields');
            return;
        }
        if (isMember) {
            distpatch(
                loginUser({
                    email: email,
                    password: password,
                }),
            );
            return;
        }
        distpatch(
            registerUser({
                name,
                email,
                password,
            }),
        );
    };

    const tonggleMember = () => {
        setValues({ ...values, isMember: !values.isMember });
    };

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
    }, [user, navigate]);
    return (
        <Wrapper className="full-page">
            <form className="form" onSubmit={onSubmit}>
                <Logo />
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>
                {/* name field */}
                {!values.isMember && (
                    <FormRow type="text" name="name" value={values.name} handleChange={handleChange} />
                )}

                {/* email field */}
                <FormRow type="email" name="email" value={values.email} handleChange={handleChange} />

                {/* password field */}
                <FormRow type="password" name="password" value={values.password} handleChange={handleChange} />

                <button type="submit" className="btn btn-block" disabled={isLoading}>
                    {isLoading ? 'loading...' : 'submit'}
                </button>
                <button
                    type="button"
                    className="btn btn-block btn-hipster"
                    disabled={isLoading}
                    onClick={() => {
                        distpatch(loginUser({ email: 'testUser@test.com', password: 'secret' }));
                    }}
                >
                    {isLoading ? 'loading...' : 'demo app'}
                </button>
                <p>
                    {values.isMember ? 'Not a member yet?' : 'Already a member?'}
                    <button type="button" onClick={tonggleMember} className="member-btn">
                        {values.isMember ? 'Register' : 'Login'}
                    </button>
                </p>
            </form>
        </Wrapper>
    );
}

export default Register;
