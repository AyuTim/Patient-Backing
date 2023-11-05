import { html5QRcodeScanner } from "html5-qrcode";
import{ useEffect, useState } from "react";
function QR() {

    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {
        const scanner = new html5QRcodeScanner('reader', {
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
    
        function error (err) {
            console.warn(err);
        }
    }, []);
    

    return (
        <div className="QR">
            <h1>QR Code Scanning in React </h1>
            { scanResult
            ? <div>Success: <a href={scanResult}>{scanResult}</a></div>
            : <div id = "reader"></div>
            }
            <div id = "reader"></div>
      
        </div>
  );
}


export default QR;
