import { useEffect, useState } from 'react';
import axios from 'axios';

const Ticker = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchPendingRequests();
  }, []);

  const fetchPendingRequests = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/donation-requests/pending`);
      setRequests(response.data.slice(0, 5)); // Get only 5 recent
    } catch (error) {
      console.error('Error fetching requests:', error);
    }
  };

  if (requests.length === 0) return null;

  return (
    <div className="bg-error text-white py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {requests.map((request, index) => (
          <span key={request._id} className="mx-8 flex items-center gap-2">
            <span className="font-semibold">🩸 Urgent:</span>
            <span>{request.bloodGroup} needed in {request.recipientDistrict}</span>
            {index !== requests.length - 1 && <span className="mx-4">•</span>}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {requests.map((request, index) => (
          <span key={`${request._id}-duplicate`} className="mx-8 flex items-center gap-2">
            <span className="font-semibold">🩸 Urgent:</span>
            <span>{request.bloodGroup} needed in {request.recipientDistrict}</span>
            {index !== requests.length - 1 && <span className="mx-4">•</span>}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;