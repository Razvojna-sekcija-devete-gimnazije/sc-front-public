import './LoadingSpinner.css';

function LoadingSpinner() {
    return (
        <div className="spinner-wrapper">
            <div className="spinner"></div>
            <p className="spinner-text">Učitavanje...</p>
        </div>
    );
}

export default LoadingSpinner;