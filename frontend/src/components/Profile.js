import React from 'react';

const Profile = ({ token }) => {

  return (
    <div>
      <h2>User Profile</h2>
      <p>Your profile information will be displayed here.</p>
      {token ? <p>You are logged in!</p> : <p>Please log in to see your profile.</p>}
      
    </div>
  );
};

export default Profile;
