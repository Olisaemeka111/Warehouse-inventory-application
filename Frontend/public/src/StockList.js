import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StockList = () => {
    const [stockItems, setStockItems] = useState([]);

    useEffect(() => {
        axios.get('/api/stock-items')
            .then(response => {
                setStockItems(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Stock Items List</h1>
            <table>
                <thead>
                <tr>
                    <th>Batch Code</th>
                    <th>Stock Code</th>
                    <th>Part No</th>
                    <th>Supplier</th>
                    <th>PO Number</th>
                    <th>Manufacturer</th>
                    <th>Model Name</th>
                    <th>Cost Price</th>
                    <th>Sales Price</th>
                    <th>Qty Available</th>
                    <th>Allocated</th>
                    <th>Faulty</th>
                    <th>Reorder Level</th>
                    <th>Barcode</th>
                    <th>Serial No</th>
                    <th>Location</th>
                    <th>Grade</th>
                    <th>Condition</th>
                    <th>Cosmetic Damage</th>
                    <th>Allocated Status</th>
                    <th>Unit Price</th>
                    <th>Sales Price</th>
                </tr>
                </thead>
                <tbody>
                {stockItems.map(item => (
                    <tr key={item.id}>
                        <td>{item.batch_code}</td>
                        <td>{item.stock_code}</td>
                        <td>{item.part_no}</td>
                        <td>{item.supplier}</td>
                        <td>{item.po_number}</td>
                        <td>{item.manufacturer}</td>
                        <td>{item.model_name}</td>
                        <td>{item.cost_price}</td>
                        <td>{item.sales_price}</td>
                        <td>{item.qty_available}</td>
                        <td>{item.allocated}</td>
                        <td>{item.faulty}</td>
                        <td>{item.reorder_level}</td>
                        <td>{item.barcode}</td>
                        <td>{item.serial_no}</td>
                        <td>{item.location}</td>
                        <td>{item.grade}</td>
                        <td>{item.condition}</td>
                        <td>{item.cosmetic_damage ? 'Yes' : 'No'}</td>
                        <td>{item.allocated_status ? 'Yes' : 'No'}</td>
                        <td>{item.unit_price}</td>
                        <td>{item.sales_price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default StockList;
