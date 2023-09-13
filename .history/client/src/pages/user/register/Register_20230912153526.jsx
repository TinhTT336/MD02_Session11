import React, { useState } from 'react'
import "./register.css";
export default function Register() {
    const [gender, setGender] = useState(0);

    // danh sach gender
    const listGender = [
        {
            id: 0,
            title: "Nam"
        },
        {
            id: 1,
            title: "Nữ"
        },
        {
            id: 2,
            title: "Khác"
        }
    ]

    const [user, setUser] = useState({
        user_name: '',
        gender: 0,
        dateOfBirth: "",
        email: '',
        address: "",
        password: '',
        role: 1,
    });
    return (
        <>
            <div className='container-login'>
                <form className='form-login'>
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <h3>Đăng ký</h3>
                        <div className='btn btn-close'></div>
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label' htmlFor="username">Tên đăng ký <span className="text-danger">*</span></label>
                        <input className='form-control' type="text" name="username" id="username" placeholder='Nhập email' />
                        <div className='text-err mt-1 border-err'>Tên đăng ký không được để trống</div>
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label' htmlFor="email">Email <span className="text-danger">*</span></label>
                        <input className='form-control' type="text" name="email" id="email" placeholder='Nhập email' />
                        <div className='text-err mt-1 border-err'>Email không được để trống</div>
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="gender" className="form-label me-4">
                            Giới tính <span className="text-danger">*</span>
                        </label>
                        <div className='d-flex'>
                            {listGender.map(g => (
                                <div className="form-check me-3" key={g.id}>
                                    <input
                                        className="form-check-input"
                                        type="radio" checked={g.id === gender}
                                        name="gender" onChange={() => setGender(g.id)}
                                    />
                                    <label className="form-check-label" htmlFor="gender">{g.title}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='form-group mb-2 mt-2'>
                        <label className='form-label' htmlFor="dateOfBirth">Ngày sinh</label>
                        <input className='form-control' type="text" name="dateOfBirth" id="dateOfBirth" placeholder='Nhập ngày sinh' />
                        <div className='text-err mt-1 border-err'>Ngày sinh không được để trống</div>
                    </div>
                    <div className='form-group mb-3'>
                        <label className='form-label' htmlFor="dateOfBirth">Địa chỉ</label>
                        <input className='form-control' type="text" name="dateOfBirth" id="dateOfBirth" placeholder='Nhập địa chỉ' />
                        {/* <div className='text-err mt-1 border-err'>Ngày sinh không được để trống</div> */}
                    </div>
                    <div className='form-group mb-3'>
                        <label className='form-label' htmlFor="password">Mật khẩu <span className="text-danger">*</span></label>
                        <input className='form-control' type="password" name="password" id="password" placeholder='Nhập mật khẩu' />
                        {/* <div className='text-err mt-1 border-err'>Mật khẩu không được để trống</div> */}
                    </div>
                    <div className='mb-2'>
                        <button className='btn btn-primary w-100'>Đăng ký</button>
                    </div>
                    <p className='p-2 text-center' >Bạn đã có tài khoản? <a href='#'>Đăng nhập</a> </p>

                </form>
            </div>
        </>
    )
}
