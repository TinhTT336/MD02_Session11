import React from 'react';
import "./login.css";

export default function Login() {
    return (
        <>
            <div className='container-login'>
                <form className='form-login'>
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <h3>Đăng nhập</h3>
                        <div className='btn btn-close'></div>
                    </div>
                    <div className='form-group mb-4'>
                        <label className='form-label' htmlFor="email">Email</label>
                        <input className='form-control' type="text" name="email" id="email" />
                        <div className='text-err mt-1'>Email không được để trống</div>
                    </div>
                    <div className='form-group mb-4'>
                        <label className='form-label' htmlFor="password">Mật khẩu</label>
                        <input className='form-control' type="password" name="password" id="password" />
                        <div className='text-err mt-1'>Mật khẩu không được để trống</div>
                    </div>
                    <div className='mb-2'>
                        <button className='btn btn-primary'>Đăng nhập</button>
                    </div>
                    <p>Bạn đã có tài khoản? Đăng ký</p>
                </form>
            </div>
        </>
    )
}
