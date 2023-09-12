import React, { useEffect, useState } from 'react'

export default function FormEdit({ idEdit, handleCloseFormEdit, loadData }) {
    const handleChange = (e) => {
        const [product, setProduct] = useState({
            product_name: "",
            price: 0,
            from: "",
        })

        // ham lay gia tri tu cac o input
        const handleChange = (e) => {
            const { name, value } = e.target;
            setProduct({ ...product, [name]: value })
        }
    }

    // goi API lay thong tin 1 san pham theo id
    useEffect(() => {
        // call API
        fetch(`http://localhost:8000/products/${idEdit}`)
            .then((response) => response.json())//ep kieu ve dang json
            .then((response) => setProduct(response))//lay du lieu
            .catch((error) => console.log(error))//bat loi
    }, []);

    return (
        <>
            <div className='product-container'>
                <form className='form-container'>
                    <div className='mb-3'>
                        <h2> Cập nhật sản phẩm</h2>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="product_name" className="form-label">
                            Tên sản phẩm
                        </label>
                        <input type="text" className="form-control" name="product_name" id="product_name" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">
                            Giá
                        </label>
                        <input type="text" className="form-control" name='price' id='price' onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="form-label" htmlFor="from">
                            Xuất xứ
                        </label>
                        <input type="text" className="form-control" name='from' id='from' onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary me-2">
                        Thêm mới
                    </button>
                    <button onClick={handleCloseFormEdit} type="button" className="btn btn-danger">
                        Huỷ
                    </button>
                </form>

            </div>

        </>
    )
}
