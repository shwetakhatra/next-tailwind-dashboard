'use client';
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface ChartData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
    }[];
}

const BarChart = () => {
    const [chartData, setChartData] = useState<ChartData>({
        labels: [],
        datasets: [],
    });
    const [chartOptions, setchartOptions] = useState({});
    useEffect(() => {
        setChartData({
            labels:['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
            datasets:[
                {
                    label: 'Sales $',
                    data: [12546,45552,12547,63524,5210,3652,25874],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor: 'rgba(53,162,235,0.4)',
                },
            ]
        });
        setchartOptions({
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Daily Revenue',
                },
            },
        });
    }, []);

    return (
        <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white dark:bg-dark'>
            <Bar data={chartData} options={chartOptions}/>
        </div>
    );
};

export default BarChart;
