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
                    <div className='form-group'>
                        <label htmlFor="user_name">Email</label>
                        <input type="text" name="ser_name" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Mật khẩu</label>
                        <input type="password" name="ser_name" />
                    </div>
                </form>
            </div>
        </>
    )
}
