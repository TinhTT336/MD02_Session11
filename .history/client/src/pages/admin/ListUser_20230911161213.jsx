import React from 'react'

export default function ListUser() {
    return (
        <>
            <div className='w-75 d-flex align-items-center justify-content-center flex-column m-3' style={{ margin: "0 auto" }}>
                <div >
                    <button className='btn btn-primary mb-2 btn-add'>+ Them moi</button>
                </div>
                <table className='table table-striped table-hover table-bordered'>
                    <thead>
                        <tr>
                            <th scope='col'>STT</th>
                            <th scope='col'>Tên</th>
                            <th scope='col'>Giới tính</th>
                            <th scope='col'>Địa chỉ</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Mật khẩu</th>
                            <th scope='col' colSpan={2}>Chuc nang</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>David</td>
                            <td>Nam</td>
                            <td>Mỹ</td>
                            <td>david@gmail.com</td>
                            <td>123456</td>
                            <td ><i className="fa-solid fa-pen-to-square "></i></td>
                            <td ><i className="fa-solid fa-trash "></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
