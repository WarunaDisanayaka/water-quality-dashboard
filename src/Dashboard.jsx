import React, { useState } from "react";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import GaugeChart from "react-gauge-chart";
import { CircularProgressbar } from 'react-circular-progressbar';
import LinearProgress from '@mui/material/LinearProgress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import 'react-circular-progressbar/dist/styles.css';
import "./Dashboard.css";

function Dashboard() {
  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  const changeStyle1 = () => {
    if (
      style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

  // Sample data for pH and Turbidity over time
  const data = [
    { time: '2024-10-01', pH: 7.2, turbidity: 10 },
    { time: '2024-10-02', pH: 7.5, turbidity: 20 },
    { time: '2024-10-03', pH: 7.1, turbidity: 15 },
    { time: '2024-10-04', pH: 6.9, turbidity: 30 },
    { time: '2024-10-05', pH: 7.4, turbidity: 25 },
    { time: '2024-10-06', pH: 7.0, turbidity: 5 },
  ];

  return (
    <div id="page-top">
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar />
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              </div>

              <div className="row">

                {/* Temperature Gauge - Circular Progress Bar */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col">
                          <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            TDS
                          </div>
                          <div style={{ width: "50%", height: "120px" }}>
                            <CircularProgressbar
                              value={40} // Change to your actual temperature value
                              text={`${40}`} // Show temperature in °C
                              styles={{
                                path: { stroke: `#FF0000` }, // Red color for path
                                text: { fill: '#000000', fontSize: '16px' }, // Black color for text
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* pH Level Gauge - Linear Progress */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col">
                          <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                            pH Level
                          </div>
                          <div style={{ width: "100%", height: "150px" }}>
                            <LinearProgress
                              variant="determinate"
                              value={75} // Change to your actual pH level value (0-100)
                              style={{ height: '30px', borderRadius: '5px' }}
                            />
                            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                              <span>{`pH ${7.5}`}</span> {/* Show pH value */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Line Chart for pH and Turbidity */}
              <div className="row mt-4">
                <div className="col-xl-12 mb-4">
                  <div className="card shadow h-100 py-2">
                    <div className="card-body">
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        pH and Turbidity Over Time
                      </div>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="time" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="pH" stroke="#82ca9d" />
                          <Line type="monotone" dataKey="turbidity" stroke="#ff7300" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto"></div>
            </div>
          </footer>
        </div>
      </div>

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      <div
        className="modal fade"
        id="logoutModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a className="btn btn-primary" href="/login">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
