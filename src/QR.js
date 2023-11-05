import { Html5QrcodeScanner } from "html5-qrcode";
import { useState, useEffect } from "react";


function QR() {
    window.number = 123;
    const [scanResult, setScanResult] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [apiData, setApiData] = useState(null);

    let data;
    
    const handleSubmitForm = async (event) => {
        event.preventDefault();


        try {
            const formData = new FormData(event.target);
            const response = await fetch('https://unduly-innocent-titmouse.ngrok-free.app/register/', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'ngrok-skip-browser-warning': 'true',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ image: 1}),  //This will change based


            });


            if (response.ok) {
                 data = await response.json();
                console.log('Post successful:', data);
                setFormSubmitted(true); // Set formSubmitted to true after successful submission
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


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
            const response = await fetch('https://unduly-innocent-titmouse.ngrok-free.app/room-check-in/', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'ngrok-skip-browser-warning': 'true',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ room_id: scanResult, patient_id: data }), 
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log('Post successful:', data);
                setApiData(data); // Set the received data
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    return (
        <div className="QR">

            
            <div>
                <form onSubmit={handleSubmitForm}>
                    <label>
                        Upload PDF or Image:
                        <input type="file" name="file" accept=".pdf, .jpg, .jpeg, .png" />
                    </label>
                    <button onClick={handlePostRequest}>Submit Data</button>
                </form>
                <div id="reader"></div>

                <div>
                <p>Scan Result:</p>
                <pre>{scanResult}</pre>
                
                {apiData && <pre>Received Data: {JSON.stringify(apiData)}</pre>}
                
            </div>
                <button type="submit">Submit Form</button>

            </div>
</div>
    );
}


export default QR;





