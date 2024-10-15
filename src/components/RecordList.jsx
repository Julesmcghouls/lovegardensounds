// src/components/RecordList.jsx
import { useEffect, useState } from 'react';

const RecordList = () => {
    const [records, setRecords] = useState([]);  // State to hold record data
    const [loading, setLoading] = useState(true); // State to manage loading status

    // Function to fetch records from the Discogs API
    const fetchRecords = async () => {
        try {
            const response = await fetch('https://api.discogs.com/database/search?q=vinyl&type=release&token=YOUR_ACCESS_TOKEN_HERE');
            const data = await response.json();
            setRecords(data.results);  // Set records state with fetched data
        } catch (error) {
            console.error("Error fetching records:", error);
        } finally {
            setLoading(false);  // Set loading to false once data is fetched
        }
    };

    useEffect(() => {
        fetchRecords();  // Fetch records on component mount
    }, []);

    return (
        <div>
            <h2>Featured Records</h2>
            {loading ? (
                <p>Loading records...</p>  // Display loading message while fetching data
            ) : (
                <div className="record-list">
                    {records.map(record => (
                        <div key={record.id} className="record-card">
                            <img src={record.cover_image} alt={record.title} />
                            <h5>{record.title}</h5>
                            <p>{record.artist}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RecordList;
