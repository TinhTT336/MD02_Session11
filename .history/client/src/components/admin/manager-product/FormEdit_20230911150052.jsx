import React from 'react'

export default function FormEdit({ idEdit, handleCloseFormEdit, loadData }) {
    console.log(idEdit);
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
