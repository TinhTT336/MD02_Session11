import React from 'react'

export default function ListUser() {
    return (
        <>
            <div className='w-75 d-flex align-items-center justify-content-center flex-column m-3'>
                <div >
                    <button className='btn btn-primary mb-2 btn-add'>+ Them moi</button>
                </div>
                <table className='table table-striped table-hover table-bordered'>
                    <thead>
                        <tr>
                            <th scope='col'>STT</th>
                            <th scope='col'>Ten san pham</th>
                            <th scope='col'>Gia</th>
                            <th scope='col'>Xuat xu</th>
                            <th scope='col' colSpan={2}>Chuc nang</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td ><i className="fa-solid fa-pen-to-square "></i></td>
                            <td ><i className="fa-solid fa-trash "></i></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}
