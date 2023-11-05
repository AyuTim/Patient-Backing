import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

function QR() {
    window.number = 123;
    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
                mode: 'cors', 
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true'
                },
                body: JSON.stringify({ room_id: scanResult, patient_id: window.number }), // Adjust data as needed
        };

        fetch('https://771a-174-246-130-148.ngrok-free.app/room-check-in/', requestOptions)
            .then(response => response.json())
            .then(data => console.log('Post successful:', data))
            .catch(error => console.error('Error:', error));

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
            const response = await fetch('https://771a-174-246-130-148.ngrok-free.app/room-check-in/', {
                method: 'POST',
                mode: 'cors', 
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                },
                body: JSON.stringify({ room_id: scanResult, patient_id: window.number }), // Adjust data as needed
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

    return (
        <div className="QR">
            <center><h1>QR Code Scanning </h1></center>
            <button onClick={handlePostRequest}>Submit Data</button>
            {scanResult
                ? (
                    <div>
                        <p>Scan Result:</p>
                        <pre>{scanResult}</pre>
                        <button onClick={handlePostRequest}>Submit Data</button>
                    </div>
                )
                : <div id="reader"></div>
            }
        </div>
    );
}

export default QR;
