import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { FaDownload, FaFileExcel, FaExpand, FaTimes } from "react-icons/fa";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

const PieCharts = () => {
    const chartRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const chartInstances = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const [enlargedChart, setEnlargedChart] = useState(null);

    const chartData = [
        {
            title: "Estimated Reserves of Crude Oil in India (2024)",
            reserves: "Total Estimated reserves = 671.40 Million Tonnes",
            labels: ["Andhra Pradesh(1%)", "Assam(22%)", "Gujarat(18%)", "Rajasthan(19%)", "Tamil Nadu(1%)", "Eastern Offshore(6%)", "Western Offshore(32%)", "Others(1%)"],
            data: [1, 22, 18, 19, 1, 6, 32, 1],
            colors: ["#8B0000", "#FF4500", "#DAA520", "#D2691E", "#4682B4", "#2E8B57", "#556B2F", "#A9A9A9"]
        },
        {
            title: "Estimated Reserves of Natural Gas in India (2024)",
            reserves: "Total Estimated reserves = 1094.19 BCM",
            labels: ["Andhra Pradesh(6%)", "Assam(15%)", "Gujarat(5%)", "Rajasthan(6%)", "Tamil Nadu(3%)", "Tripura(3%)", "West Bengal (CBM)(4%)", "Madhya Pradesh (CBM)(2%)", "Eastern Offshore(24%)", "Western Offshore(31%)", "Others(1%)"],
            data: [6, 15, 5, 6, 3, 3, 4, 2, 24, 31, 1],
            colors: ["#8B0000", "#FF4500", "#DAA520", "#D2691E", "#4682B4", "#32CD32", "#8A2BE2", "#FF69B4", "#2E8B57", "#556B2F", "#A9A9A9"]
        },
        {
            title: "Estimated Reserves of Coal in India (2024)",
            reserves: "Total Estimated reserves = 389.42 Billion Tonnes",
            labels: ["Proved (55%)", "Indicated (38%)", "Inferred (7%)"],
            data: [55, 38, 7],
            colors: ["#2E5A87", "#7CDDDD", "#4A9DCB"]
        },
        {
            title: "Estimated Reserves of Lignite in India (2024)",
            reserves: "Total Estimated reserves = 47.30 Billion Tonnes",
            labels: ["Proved (17%)", "Indicated (53%)", "Inferred (30%)"],
            data: [17, 53, 30],
            colors: ['#22D3EE', '#B2F3FE', '#0E768F']
        }
    ];

    useEffect(() => {
        chartData.forEach((chart, index) => {
            if (chartRefs[index].current) {
                if (chartInstances[index].current) chartInstances[index].current.destroy();
                
                const ctx = chartRefs[index].current.getContext("2d");
                chartInstances[index].current = new Chart(ctx, {
                    type: "pie",
                    data: {
                        labels: chart.labels,
                        datasets: [{ data: chart.data, backgroundColor: chart.colors }]
                    },
                    options: { 
                        responsive: true, 
                        maintainAspectRatio: false, 
                        plugins: { legend: { position: "top" } } 
                    }
                });
            }
        });
    }, []);

    const downloadExcel = (index) => {
        const data = chartData[index].labels.map((label, i) => ({ Type: label, Value: chartData[index].data[i] }));
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, `Chart_${index + 1}_Data`);
        XLSX.writeFile(workbook, `chart_${index + 1}_data.xlsx`);
    };

    const downloadPNG = (index) => {
        if (chartRefs[index].current) {
            const canvas = chartRefs[index].current;
            canvas.toBlob((blob) => {
                saveAs(blob, `${chartData[index].title}.png`);
            });
        }
    };

    return (
        <div className="container mt-4">
            <h3 className="text-center mb-4">Energy Statistics India 2025</h3>
            <div className="row d-flex justify-content-center">
                {chartData.map((chart, index) => (
                    <div key={index} className="col-md-5 m-3 p-4 shadow-lg rounded bg-light text-center position-relative">
                        <h5 className="mb-3">{chart.title}</h5>
                        <p className="text-muted">{chart.reserves}</p>
                        <div className="position-absolute" style={{ top: 10, right: 10, display: "flex", gap: "10px" }}>
                            <FaDownload 
                                className="text-primary" 
                                size={20} 
                                style={{ cursor: "pointer" }} 
                                onClick={() => downloadPNG(index)} 
                            />
                            <FaFileExcel 
                                className="text-success" 
                                size={20} 
                                style={{ cursor: "pointer" }} 
                                onClick={() => downloadExcel(index)} 
                            />
                        </div>
                        <div 
                            style={{ 
                                width: enlargedChart === index ? "100vw" : "400px", 
                                height: enlargedChart === index ? "100vh" : "400px", 
                                transition: "0.3s", 
                                position: enlargedChart === index ? "fixed" : "relative",
                                top: enlargedChart === index ? "0" : "auto",
                                left: enlargedChart === index ? "0" : "auto",
                                background: enlargedChart === index ? "white" : "none",
                                zIndex: enlargedChart === index ? "1000" : "1",
                                display: "flex", 
                                alignItems: "center", 
                                justifyContent: "center"
                            }}
                        >
                            <canvas ref={chartRefs[index]}></canvas>
                            {enlargedChart === index && (
                                <FaTimes 
                                    className="text-danger position-absolute" 
                                    size={24} 
                                    style={{ cursor: "pointer", top: 10, right: 10 }} 
                                    onClick={() => setEnlargedChart(null)}
                                />
                            )}
                            <FaExpand 
                                className="text-dark position-absolute" 
                                size={20} 
                                style={{ cursor: "pointer", bottom: 10, left: 10 }} 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setEnlargedChart(enlargedChart === index ? null : index);
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PieCharts;
