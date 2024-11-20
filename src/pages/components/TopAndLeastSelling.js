import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const TopAndLeastSelling = ({ products }) => {
    const [topSelling, setTopSelling] = useState(null);
    const [leastSelling, setLeastSelling] = useState(null);
    const [chartType, setChartType] = useState('Bar'); // New state for chart type

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
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(201, 203, 207, 0.6)',
                ],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const renderChart = () => {
        switch (chartType) {
            case 'Line':
                return <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />;
            case 'Pie':
                return <Pie data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />;
            case 'Doughnut':
                return <Doughnut data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />;
            default:
                return <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />;
        }
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

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <Button variant="primary" onClick={() => setChartType('Bar')} className="chart-button">Bar</Button>
                <Button variant="success" onClick={() => setChartType('Line')} className="chart-button">Line</Button>
                <Button variant="warning" onClick={() => setChartType('Pie')} className="chart-button">Pie</Button>
                <Button variant="info" onClick={() => setChartType('Doughnut')} className="chart-button">Doughnut</Button>
            </div>

            <div style={{ width: '600px', margin: 'auto', paddingTop: '20px' }}>
                {renderChart()}
            </div>
        </div>
    );
};

export default TopAndLeastSelling;
