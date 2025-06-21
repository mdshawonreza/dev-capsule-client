'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const mainColor = '#7412FF';

const AdminAppointmentPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [statusIndex, setStatusIndex] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);

  // Fetch appointments on mount
  useEffect(() => {
    fetch('https://dev-capsule-server.vercel.app/appointments')
      .then(res => res.json())
      .then(data => {
        const withStatus = data.map(item => ({
          ...item,
          status: item.status || 'pending',
        }));
        setAppointments(withStatus);
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  // Confirm delete and call backend
  const confirmDelete = async () => {
    const itemToDelete = appointments[deleteIndex];
    if (!itemToDelete) return;

    try {
      const res = await fetch(`https://dev-capsule-server.vercel.app/appointments/${itemToDelete._id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setAppointments(prev => {
          const newArr = [...prev];
          newArr.splice(deleteIndex, 1);
          return newArr;
        });
      } else {
        console.error('Failed to delete appointment');
      }
    } catch (err) {
      console.error('Error deleting:', err);
    }

    setShowDeleteModal(false);
    setDeleteIndex(null);
  };

  // Confirm status change and call backend
  const confirmStatusChange = async () => {
    const itemToUpdate = appointments[statusIndex];
    if (!itemToUpdate) return;

    const newStatus = itemToUpdate.status === 'done' ? 'pending' : 'done';

    try {
      const res = await fetch(`https://dev-capsule-server.vercel.app/appointments/${itemToUpdate._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        setAppointments(prev => {
          const newArr = [...prev];
          newArr[statusIndex].status = newStatus;
          return newArr;
        });
      } else {
        console.error('Failed to update status');
      }
    } catch (err) {
      console.error('Error updating status:', err);
    }

    setShowStatusModal(false);
    setStatusIndex(null);
  };

  return (
    <div
      className="min-h-screen py-12 px-4"
      style={{ background: `linear-gradient(135deg, #f5f3ff, #e0d9ff)` }}
    >
      <h1 className="text-4xl font-bold text-center mb-12" style={{ color: mainColor }}>
        Admin - Appointments
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {appointments.length > 0 ? (
          appointments.map((item, index) => (
            <motion.div
              key={item._id || index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-5 rounded-2xl shadow-xl transition-all duration-300 border"
              style={{
                borderColor: mainColor,
                boxShadow: `0 4px 15px rgba(116,18,255,0.3)`,
              }}
              whileHover={{ scale: 1.05, boxShadow: `0 8px 25px rgba(116,18,255,0.5)` }}
            >
              <h2 className="text-xl font-semibold mb-2" style={{ color: mainColor }}>
                {item.name}
              </h2>
              <p className="text-gray-700 text-sm mb-1"><span className="font-medium">Email:</span> {item.email}</p>
              <p className="text-gray-700 text-sm mb-1"><span className="font-medium">Details:</span> {item.details}</p>
              <p className="text-gray-700 text-sm mb-1"><span className="font-medium">Area:</span> {item.area}</p>
              <p className="text-gray-700 text-sm mb-1"><span className="font-medium">Time Zone:</span> {item.timeZone}</p>
              <p className="text-gray-700 text-sm mb-3"><span className="font-medium">Preferred Time:</span> {item.preferredTime}</p>
              <p className="text-gray-700 text-sm mb-4"><span className="font-medium">Date:</span> {item.date}</p>

              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                  item.status === 'done'
                    ? 'bg-green-200 text-green-800'
                    : 'bg-purple-200 text-purple-800'
                }`}
              >
                {item.status === 'done' ? 'Done' : 'Pending'}
              </span>

              <button
                onClick={() => {
                  setStatusIndex(index);
                  setShowStatusModal(true);
                }}
                className="w-full px-4 py-2 mb-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Toggle Status
              </button>

              <button
                onClick={() => {
                  setDeleteIndex(index);
                  setShowDeleteModal(true);
                }}
                className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                Delete Appointment
              </button>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500">No appointments found.</p>
        )}
      </div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Are you sure?</h2>
            <p className="text-sm text-gray-600 mb-6">Do you really want to delete this appointment?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 text-sm bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Status Change Modal */}
      {showStatusModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Change Status?</h2>
            <p className="text-sm text-gray-600 mb-6">Are you sure you want to change the status of this appointment?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowStatusModal(false)}
                className="px-4 py-2 text-sm bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmStatusChange}
                className="px-4 py-2 text-sm bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Yes, Change
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAppointmentPage;
