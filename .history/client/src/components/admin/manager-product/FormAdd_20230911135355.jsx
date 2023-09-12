import React from 'react'

export default function FormAdd() {
    return (
        <>
            <div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="productName" className="form-label">
                            Tên sản phẩm
                        </label>
                        <input type="text" className="form-control" />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">
                            Giá
                        </label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="text" className="form-check-input" />
                        <label className="form-check-label" htmlFor="from">
                            Xuất xứ
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
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
