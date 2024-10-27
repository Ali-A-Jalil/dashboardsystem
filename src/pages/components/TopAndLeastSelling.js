import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const TopAndLeastSelling = ({ products }) => {
    const [topSelling, setTopSelling] = useState(null);
    const [leastSelling, setLeastSelling] = useState(null);

    useEffect(() => {
        if (products && products.length > 0) {
        const topProduct = products.reduce((prev, current) => 
            prev.sales > current.sales ? prev : current
        );
        setTopSelling(topProduct);

        const leastProduct = products.reduce((prev, current) => 
            prev.sales < current.sales ? prev : current
        );
        setLeastSelling(leastProduct);
        }
    }, [products]);

    const chartData = {
        labels: products.map(product => product.name),
        datasets: [
        {
            label: 'Sales',
            data: products.map(product => product.sales),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
        ],
    };

    return (
        <div className="top-least-selling">
        <h3>Product Sales Overview</h3>

        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Product Name</th>
                <th>Sales</th>
            </tr>
            </thead>
            <tbody>
            {products.map(product => (
                <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.sales}</td>
                </tr>
            ))}
            </tbody>
        </Table>

        {topSelling && (
            <div>
            <h4>Top-Selling Product</h4>
            <p>Product Name: {topSelling.name}</p>
            <p>Sales: {topSelling.sales}</p>
            </div>
        )}

        {leastSelling && (
            <div>
            <h4>Least-Selling Product</h4>
            <p>Product Name: {leastSelling.name}</p>
            <p>Sales: {leastSelling.sales}</p>
            </div>
        )}

        <div style={{ width: '600px', margin: 'auto', paddingTop: '20px' }}>
            <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
        </div>
    );
};

export default TopAndLeastSelling;
