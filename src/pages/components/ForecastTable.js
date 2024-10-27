import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import { Table, Spinner } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';

const ForecastTable = () => {
  const categories = [
    { label: 'Sales', data: [1000, 1200, 1300, 1500] },
    { label: 'Orders', data: [50, 55, 60, 70] },
    { label: 'Users', data: [200, 210, 220, 250] },
    { label: 'Refunds', data: [5, 6, 7, 8] },
    { label: 'Expenses', data: [300, 320, 350, 400] },
    { label: 'Deposits', data: [1500, 1600, 1700, 1800] },
    { label: 'Total', data: [2000, 2100, 2200, 2400] },
    { label: 'Invoices', data: [10, 12, 15, 18] },
  ];

  const [forecastData, setForecastData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function generateForecasts() {
      const forecasts = {};
      for (let category of categories) {
        if (category.data.length < 2) continue; // تأكد من أن البيانات كافية

        const xs = tf.tensor2d(category.data.slice(0, -1), [category.data.length - 1, 1]);
        const ys = tf.tensor2d(category.data.slice(1), [category.data.length - 1, 1]);

        const model = tf.sequential();
        model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
        model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });
        await model.fit(xs, ys, { epochs: 200 });

        const output = model.predict(tf.tensor2d([category.data[category.data.length - 1]], [1, 1]));
        const nextValue = await output.array();

        if (!isNaN(nextValue[0][0])) {
          forecasts[category.label] = {
            daily: nextValue[0][0],
            monthly: nextValue[0][0] * 30,
            yearly: nextValue[0][0] * 365,
          };
        } else {
          forecasts[category.label] = {
            daily: 0,
            monthly: 0,
            yearly: 0,
          };
        }
      }
      setForecastData(forecasts);
      setLoading(false);
    }
    generateForecasts();
  }, []);

  const getChartData = (label) => ({
    labels: ['Daily', 'Monthly', 'Yearly'],
    datasets: [
      {
        data: [
          forecastData[label]?.daily || 0,
          forecastData[label]?.monthly || 0,
          forecastData[label]?.yearly || 0,
        ],
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
      },
    ],
  });

  return (
    <div className="forecast-table">
      <h3>Forecasts</h3>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Category</th>
              <th>Daily Forecast</th>
              <th>Monthly Forecast</th>
              <th>Yearly Forecast</th>
              <th>Chart</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.label}>
                <td>{category.label}</td>
                <td>{forecastData[category.label]?.daily.toFixed(2)}</td>
                <td>{forecastData[category.label]?.monthly.toFixed(2)}</td>
                <td>{forecastData[category.label]?.yearly.toFixed(2)}</td>
                <td>
                  <Doughnut data={getChartData(category.label)} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ForecastTable;
