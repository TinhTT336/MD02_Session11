import React from 'react';
import "./login.css";

export default function Login() {
    return (
        <>
            <div className='container-login'>
                <form className='form-login'>
                    <h3>Đăng nhập</h3>
                    <div>
                        <label htmlFor="user_name">Email</label>
                        <input type="text" name="ser_name" />
                    </div>
                    <div>
                        <label htmlFor="">Mật khẩu</label>
                        <input type="password" name="ser_name" />
                    </div>
                </form>
            </div>
        </>
    )
}
