import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import {  getDocs, query, where, collection } from "firebase/firestore";
import { fireDB } from "../../fireabase/FirebaseConfig";

function ProfilePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Retrieve email from localStorage
        const userEmail = user?.user?.email;
        if (!userEmail) {
          setError("Email not found in localStorage.");
          return;
        }

        // Query Firestore to find the user document with the matching email
        const q = query(collection(fireDB, "users"), where("email", "==", userEmail));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          setError("User not found with the provided email.");
          return;
        }

        // Retrieve the user's name from the first document in the query result
        querySnapshot.forEach((doc) => {
          setName(doc.data().name);
          setEmail(userEmail);
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Error fetching user data.");
      }
    };

    fetchUserData();
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

//   const handleUpdateProfile = async () => {
//     try {
//       await updateDoc(doc(fireDB, "users", userId), {
//         name,
//         email,
//       });
//       alert("Profile updated successfully");
//       setError("");
//     } catch (error) {
//       console.error("Error updating profile: ", error);
//       setError("An error occurred while updating profile.");
//     }
//   };

  return (
    <Layout>
      <div className="max-w-lg mx-auto mt-10 p-20 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Profile Page</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {/* <button
          onClick={handleUpdateProfile}
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
        >
          Update Profile
        </button> */}
      </div>
    </Layout>
  );
}

export default ProfilePage;
