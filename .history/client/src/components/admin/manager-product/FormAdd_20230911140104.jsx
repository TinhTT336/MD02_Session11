import React from 'react'
import "./product.css";

export default function FormAdd() {
    return (
        <>
            <div className='product=container'>
                <form className='form=container'>
                    <div className="mb-3">
                        <label htmlFor="productName" className="form-label">
                            Tên sản phẩm
                        </label>
                        <input type="text" className="form-control" name="productName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">
                            Giá
                        </label>
                        <input type="text" className="form-control" name='price' />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-check-input" name='from' />
                        <label className="form-check-label" htmlFor="from">
                            Xuất xứ
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary me-2">
                        Thêm mới
                    </button>
                    <button type="submit" className="btn btn-danger">
                        Huỷ
                    </button>
                </form>

            </div>

        </>
    )
}
