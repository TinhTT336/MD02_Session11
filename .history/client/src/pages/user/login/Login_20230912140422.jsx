import React, { useState } from 'react';
import "./login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    // ham lay du lieu tu o Input
    const handleInputChange = (e) => {
        // lay name va value tu o input
        const { value, name } = e.target;
        // kiem tra name va gan gia tri
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        } else {
            return;
        }
    }

    // ham submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            email,
            password
        }
        console.log(newUser);
    }

    return (
        <>
            <div className='container-login'>
                <form className='form-login' onSubmit={handleSubmit}>
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <h3>Đăng nhập</h3>
                        <div className='btn btn-close'></div>
                    </div>
                    <div className='form-group mb-4'>
                        <label className='form-label' htmlFor="email">Email</label>
                        <input className={`form-control ${emailError && "border-err"}`}
                            type="text" name="email" id="email" placeholder='Nhập email'
                            value={email} onChange={handleInputChange} />
                        <div className='text-err mt-1 '>Email không được để trống</div>
                    </div>
                    <div className='form-group mb-4'>
                        <label className='form-label' htmlFor="password">Mật khẩu</label>
                        <input className={`form-control ${emailError && "border-err"}`}
                            type="password" name="password" id="password" placeholder='Nhập mật khẩu'
                            value={password} onChange={handleInputChange} />
                        <div className='text-err mt-1 '>Mật khẩu không được để trống</div>
                    </div>
                    <div className='mb-2'>
                        <button className='btn btn-primary w-100'>Đăng nhập</button>
                    </div>
                    <p className='p-2 text-center' >Bạn chưa có tài khoản? <a href='#'>Đăng ký</a> </p>
                </form>
            </div>
        </>
    )
}
