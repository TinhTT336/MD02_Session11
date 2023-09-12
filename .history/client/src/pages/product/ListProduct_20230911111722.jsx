import React from 'react'

export default function ListProduct() {
    // goi API lay thong tin tat ca san pham
    const loadData = () => {
        fetch("http://localhost:8000/products")
            .then((response) => response.json())// ep kieu ve dang json
            .then((response) => console.log(response)) // noi co du lieu tra ve
            .catch((error) => console.log(error))// bat loi
    }

    loadData();
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
