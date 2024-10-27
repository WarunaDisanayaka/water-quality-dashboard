import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';

const WaterQualityStatus = () => {
    const [phValue, setPhValue] = useState('');
    const [turbidity, setTurbidity] = useState('');
    const [prediction, setPrediction] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Function to handle form submission and make prediction
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!phValue || !turbidity) {
            setErrorMessage('Please enter both pH value and turbidity.');
            setPrediction('');
            return;
        }

        // Clear any previous error messages
        setErrorMessage('');

        // Custom prediction logic
        if (phValue >= 6.5 && phValue <= 8.5 && turbidity < 5) {
            setPrediction('Portable');
        } else {
            setPrediction('Not Portable');
        }
    };

    return (
        <div>
            <body id="page-top">
                {/*  <!-- Page Wrapper --> */}
                <div id="wrapper">
                    {/*  <!-- Sidebar --> */}
                    <SideBar />
                    {/*  <!-- End of Sidebar --> */}

                    {/*  <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column">
                        {/*  <!-- Main Content --> */}
                        <div id="content">
                            {/*  <!-- Topbar --> */}
                            <TopBar />
                            {/*  <!-- End of Topbar --> */}

                            {/* <!-- Begin Page Content --> */}
                            <div className="container-fluid">
                                {/*  <!-- Page Heading --> */}
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Water Quality Prediction</h1>
                                </div>

                                {/*  <!-- Content Row --> */}
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="card shadow mb-4">
                                            <div className="card-header py-3">
                                                <h6 className="m-0 font-weight-bold text-primary">Enter Water Quality Data</h6>
                                            </div>
                                            <div className="card-body">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="form-group">
                                                        <label htmlFor="phValue">pH Value</label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="phValue"
                                                            value={phValue}
                                                            onChange={(e) => setPhValue(e.target.value)}
                                                            placeholder="Enter pH value (6.5 - 8.5)"
                                                            step="0.1"
                                                            min="0"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="turbidity">Turbidity (NTU)</label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="turbidity"
                                                            value={turbidity}
                                                            onChange={(e) => setTurbidity(e.target.value)}
                                                            placeholder="Enter turbidity value (< 5 NTU)"
                                                            step="0.1"
                                                            min="0"
                                                        />
                                                    </div>

                                                    {/* Display error message if validation fails */}
                                                    {errorMessage && (
                                                        <div className="alert alert-danger">
                                                            {errorMessage}
                                                        </div>
                                                    )}

                                                    <button type="submit" className="btn btn-primary">
                                                        Predict
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*  <!-- Result Row --> */}
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="card shadow mb-4">
                                            <div className="card-header py-3">
                                                <h6 className="m-0 font-weight-bold text-primary">Prediction Result</h6>
                                            </div>
                                            <div className="card-body">
                                                {prediction ? (
                                                    <div className={`alert ${prediction === 'Portable' ? 'alert-success' : 'alert-danger'}`}>
                                                        <h5>The water is {prediction}</h5>
                                                    </div>
                                                ) : (
                                                    <div className="alert alert-info">
                                                        <h5>Enter data to predict water quality.</h5>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*   <!-- /.container-fluid --> */}
                        </div>
                        {/*   <!-- End of Main Content --> */}

                        {/* <!-- Footer --> */}
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto"></div>
                            </div>
                        </footer>
                        {/* <!-- End of Footer --> */}
                    </div>
                    {/*  <!-- End of Content Wrapper --> */}
                </div>
                {/*  <!-- End of Page Wrapper -->

                                <!-- Scroll to Top Button--> */}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>

                {/*  <!-- Logout Modal--> */}
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
                                <a className="btn btn-primary" href="login.html">
                                    Logout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    );
};

export default WaterQualityStatus;
