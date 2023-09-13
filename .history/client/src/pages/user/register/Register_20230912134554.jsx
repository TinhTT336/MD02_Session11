import React from 'react'
import "./register.css";
export default function Register() {
    return (
        <>
            <div className='container-login'>
                <form className='form-login'>
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <h3>Đăng nhập</h3>
                        <div className='btn btn-close'></div>
                    </div>
                    <div className='form-group mb-4'>
                        <label className='form-label' htmlFor="username">Tên đăng nhập</label>
                        <input className='form-control' type="text" name="username" id="username" placeholder='Nhập email' />
                        <div className='text-err mt-1 border-err'>Tên đăng nhập không được để trống</div>
                    </div>
                    <div className='form-group mb-4'>
                        <label className='form-label' htmlFor="email">Email</label>
                        <input className='form-control' type="text" name="email" id="email" placeholder='Nhập email' />
                        <div className='text-err mt-1 border-err'>Email không được để trống</div>
                    </div>
                    <div className='form-group mb-4'>
                        <label className='form-label' htmlFor="password">Mật khẩu</label>
                        <input className='form-control' type="password" name="password" id="password" placeholder='Nhập mật khẩu' />
                        <div className='text-err mt-1 border-err'>Mật khẩu không được để trống</div>
                    </div>
                    <div className='mb-2'>
                        <button className='btn btn-primary w-100'>Đăng ký</button>
                    </div>
                    <div className='p-2 text-center'>
                        <a href="#">Bạn quên mật khẩu?</a>
                        <a href='#'>Đăng nhập</a> </div>
                </form>
            </div>
        </>
    )
}
