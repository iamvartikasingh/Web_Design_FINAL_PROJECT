import React, { useState } from "react";

const MyProfile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, City, State",
  });
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setEditMode(false);
    alert("Profile updated!");
  };

  return (
    <div className="container py-4">
      <h2>My Profile</h2>
      <div className="card">
        <div className="card-body">
          {editMode ? (
            <>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  name="address"
                  value={profile.address}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
            </>
          ) : (
            <>
              <p><strong>Name:</strong> {profile.name}</p>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Phone:</strong> {profile.phone}</p>
              <p><strong>Address:</strong> {profile.address}</p>
              <button className="btn btn-secondary" onClick={() => setEditMode(true)}>
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
