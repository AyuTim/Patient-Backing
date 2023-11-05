import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

function QR() {

    
    window.number = 123;
    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 250,
                height: 250,
            },
            fps: 5,
        });

        scanner.render(success, error);

        function success(result) {
            scanner.clear();
            setScanResult(result);
        }

        function error(err) {
            console.warn(err);
        }

        return () => {
            scanner.clear(); // Clear scanner on component unmount
        };
    }, []);

    const handlePostRequest = async () => {
        try {
            const response = await fetch('https://cc43-174-246-130-148.ngrok-free.app/', {
                method: 'POST',
                mode: 'cors', 
                headers: {
                    'ngrok-skip-browser-warning': 'true',
                },
                body: JSON.stringify({ room_id: 1, patient_id: window.number }), // Adjust data as needed
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Post successful:', data);
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handlePostRequest();
        }, 5000); // Send data every 5 seconds

        return () => clearInterval(interval);
    }, []); // Empty dependency array to only run on mount and unmount
    return (
        <div className="QR">
            <h1>QR Code Scanning in React</h1>
            <button onClick={handlePostRequest}>Submit Data</button>
            {scanResult
                ? (
                    <div>
                        <p>Scan Result:</p>
                        <pre>{scanResult}</pre>
                    </div>
                )
                : <div id="reader"></div>
            }
        </div>
    );
}

export default QR;
