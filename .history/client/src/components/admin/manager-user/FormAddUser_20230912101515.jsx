import { notification } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
import { ValidateEmail } from '../../../utils/formatData';

export default function FormAddUser({ handleClose, loadData }) {
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
        password: ''
    });

    // ham lay du lieu tu o input
    const handleChange = (e) => {
        const { value, name } = e.target;
        setUser({ ...user, [name]: value })
    }

    // ham submit du lieu
    const handleSubmit = (e) => {
        e.preventDefault();
        //cach 1:
        if (user_name !== "" && dateOfBirth !== "" && email !== "" && address !== "" && password !== "") { }
        // cach 2:
        if (!user.user_name) {
            notification.error({
                message: "Cảnh báo",
                description: "Tên đăng nhập không được để trống"
            })
            return;
        } else if (!user.dateOfBirth) {
            notification.error({
                message: "Cảnh báo",
                description: "Ngày sinh không được để trống"
            })
            return;
        } else if (!user.email) {
            notification.error({
                message: "Cảnh báo",
                description: "Email không được để trống"
            })
            return;
        } else if (!user.address) {
            notification.error({
                message: "Cảnh báo",
                description: "Địa chỉ không được để trống"
            })
            return;
        }
        else if (!user.password) {
            notification.error({
                message: "Cảnh báo",
                description: "Mât khẩu không được để trống"
            })
            return;
        } else if (!ValidateEmail(user.email)) {
            notification.error({
                message: "Cảnh báo",
                description: "Email không đúng định dạng"
            })
            return;
        } else {
            // goi API thêm
            axios.post("http://localhost:8000/users", { ...user, gender: gender })
                .then(response => {
                    if (response.status === 201) {
                        // hien thi thong bao
                        notification.success({
                            message: "Thành công",
                            description: "Thêm mới người dùng thành công"
                        });
                        handleClose();
                        loadData();
                    }
                })
                .catch(error => {
                    if (error.response.data === "Email already exists") {
                        notification.error({
                            message: "Cảnh báo",
                            description: "Email đã tồn tại trong hệ thống"
                        })
                    } else {
                        notification.error({
                            message: "Cảnh báo",
                            description: "Lỗi hệ thống"
                        })
                    }
                })
        }

    }

    return (
        <>
            <div className='product-container'>
                <form onSubmit={handleSubmit} className='form-container'>
                    <div className='mb-3'>
                        <h2>Thêm mới người dùng </h2>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="user_name" className="form-label">
                            Tên <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" name="user_name" id="user_name" onChange={handleChange} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="gender" className="form-label me-4">
                            Giới tính<span className="text-danger">*</span>
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

                    <div className="mb-3 mt-3">
                        <label htmlFor="dateOfBirth" className="form-label">
                            Ngày sinh<span className="text-danger">*</span>
                        </label>
                        <input type="date" className="form-control" name="dateOfBirth" id="dateOfBirth" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                            Địa chỉ<span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" name='address' id='address' onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                            Email<span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" name='email' id='email' onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="form-label" htmlFor="password">
                            Mật khẩu<span className="text-danger">*</span>
                        </label>
                        <input type="password" className="form-control" name='password' id='password' onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary me-2">
                        Thêm mới
                    </button>
                    <button onClick={handleClose} type="button" className="btn btn-danger">
                        Huỷ
                    </button>
                </form>

            </div>

        </>
    )
}
