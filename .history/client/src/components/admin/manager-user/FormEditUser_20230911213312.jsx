import { notification } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function FormEditUser({ idEdit, handleCloseEdit, loadData }) {
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

    // goi API lay thong tin 1 san pham theo id
    useEffect(() => {
        axios.get(`http://localhost:8000/users/${idEdit}`)
            .then(response => setUser(response.data))
            .catch(error => console.log(error))
    }, [])

    // ham submit du lieu
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/users/${idEdit}`, { ...user })
            .then(response => {
                if (response.status === 200) {
                    notification.success({
                        message: "Thành công",
                        description: "Cập nhật thông tin người dùng thành công"
                    });
                    handleCloseEdit();
                    loadData();
                }
            })
            .catch(error => console.log(error))
    }


    return (
        <>
            <div className='product-container'>
                <form onSubmit={handleSubmit} className='form-container'>
                    <div className='mb-3'>
                        <h2>Cập nhật thông tin người dùng </h2>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="user_name" className="form-label">
                            Tên
                        </label>
                        <input type="text" className="form-control" value={user.user_name} name="user_name" id="user_name" onChange={handleChange} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="gender" className="form-label me-4">
                            Giới tính
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
                            Ngày sinh
                        </label>
                        <input type="text" className="form-control" value={user.dateOfBirth} name="dateOfBirth" id="dateOfBirth" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                            Địa chỉ
                        </label>
                        <input type="text" className="form-control" value={user.address} name='address' id='address' onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <input type="email" className="form-control" value={user.email} name='email' id='email' onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="form-label" htmlFor="password">
                            Mật khẩu
                        </label>
                        <input type="password" className="form-control" value={user.password} name='password' id='password' onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary me-2">
                        Cập nhật
                    </button>
                    <button onClick={handleCloseEdit} type="button" className="btn btn-danger">
                        Huỷ
                    </button>
                </form>

            </div>

        </>
    )
}
