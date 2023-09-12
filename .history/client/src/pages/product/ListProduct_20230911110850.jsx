import React from 'react'

export default function ListProduct() {
    return (
        <>
            <table style={{ border: "1px solid black" }}>
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
