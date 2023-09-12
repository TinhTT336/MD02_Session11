import { notification } from 'antd';
import React, { useState } from 'react'

export default function FormAddUser({ handleClose }) {
    const [user, setUser] = useState({
        user_name: '',
        gender: 0,
        dateOdBirth: "",
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
        axios.post("http://localhost:8000/users")
            .then(response => {
                if (response.status === 200) {
                    notification.success({
                        message: "Thành công",
                        description: "Thêm mới người dùng thành công"
                    });
                }
            })

        return (
            <>
                <div className='product-container'>
                    <form className='form-container'>
                        <div className='mb-3'>
                            <h2>Thêm mới người dùng </h2>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="product_name" className="form-label">
                                Tên
                            </label>
                            <input type="text" className="form-control" name="product_name" id="product_name" onChange={handleChange} />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="product_name" className="form-label">
                                Giới tính
                            </label>
                            <input type="text" className="form-control" name="product_name" id="product_name" onChange={handleChange} />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="product_name" className="form-label">
                                Ngày sinh
                            </label>
                            <input type="text" className="form-control" name="product_name" id="product_name" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">
                                Địa chỉ
                            </label>
                            <input type="text" className="form-control" name='price' id='price' onChange={handleChange} />
                        </div>
                        <div className="mb-4">
                            <label className="form-label" htmlFor="from">
                                Email
                            </label>
                            <input type="text" className="form-control" name='from' id='from' onChange={handleChange} />
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
