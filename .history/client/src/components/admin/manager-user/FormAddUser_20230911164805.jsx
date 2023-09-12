import React, { useState } from 'react'

export default function FormAddUser() {
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

    }
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
                    <button type="button" className="btn btn-danger">
                        Huỷ
                    </button>
                </form>

            </div>

        </>
    )
}
