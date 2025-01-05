import React from 'react';
import { FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const userData = {
  name: 'Snehal Patil',
  email: 'snehalpatil@example.com',
  phone: '+91 9876543210',
  location: 'Mumbai, India',
  preferences: ['Pottery', 'Textiles', 'Woodworking'],
  recentActivity: [
    {
      activity: 'Registered for the Pottery Workshop',
      date: 'March 15, 2024',
    },
    {
      activity: 'Purchased a Handcrafted Vase',
      date: 'March 10, 2024',
    },
    {
      activity: 'Attended the Handicrafts Exhibition',
      date: 'February 25, 2024',
    },
  ],
};

const ProfilePage = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-primaryText mb-4">
            My Profile
          </h2>
          <p className="text-lg text-secondaryText">
            Manage your personal information, preferences, and activity history.
          </p>
        </div>

        {/* Profile Details */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-6">
            <FaUserCircle size={80} className="text-teal-500 mr-4" />
            <div>
              <h3 className="text-2xl font-semibold text-primaryText">
                {userData.name}
              </h3>
              <p className="text-md text-secondaryText">{userData.location}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-teal-500" />
              <span className="text-secondaryText">{userData.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-teal-500" />
              <span className="text-secondaryText">{userData.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-teal-500" />
              <span className="text-secondaryText">{userData.location}</span>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold text-primaryText mb-4">
            Preferences
          </h3>
          <ul className="list-disc list-inside text-secondaryText">
            {userData.preferences.map((preference, index) => (
              <li key={index}>{preference}</li>
            ))}
          </ul>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-primaryText mb-4">
            Recent Activity
          </h3>
          <ul>
            {userData.recentActivity.map((activity, index) => (
              <li
                key={index}
                className="flex justify-between text-secondaryText mb-3"
              >
                <span>{activity.activity}</span>
                <span className="text-sm text-gray-500">{activity.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
