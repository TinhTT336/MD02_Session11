import React from 'react'

export default function ListProduct() {
    // goi API lay thong tin tat ca san pham
    const loadData = () => {
        fetch("http://localhost:8000/products")
            .then((response) => { console.log(response); })
    }
    return (
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Ten san pham</th>
                        <th>Gia</th>
                        <th>Xuat xu</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Cam</td>
                        <td>15000</td>
                        <td>Mien Tay</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
