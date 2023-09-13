import React from 'react';
import "./login.css";

export default function Login() {
    return (
        <>
            <div className='container-login'>
                <form className='form-login'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h3>Đăng nhập</h3>
                        <div className='btn btn-close'></div>
                    </div>
                    <div className='form-group mb-4'>
                        <label htmlFor="email">Email</label>
                        <input className='form-control' type="text" name="email" id="email" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Mật khẩu</label>
                        <input className='form-control' type="password" name="password" id="password" />
                    </div>
                </form>
            </div>
        </>
    )
}
