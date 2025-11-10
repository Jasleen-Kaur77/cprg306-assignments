"use client";

import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login error: ", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };

  return (
    <main className="flex items-center justify-center mt-24 mb-12">
      {user ? (
        <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
          <h1 className="text-xl font-semibold mb-2">Welcome! {user.displayName}</h1>
          <p className="text-gray-600 text-sm mb-4">{user.email}</p>
          <button onClick={handleLogout}
            className="bg-gray-200 px-4 py-2 my-4 rounded hover:bg-gray-300"
          >
            Log Out
          </button>
          <Link href="/week-9/shopping-list"
            className="block bg-blue-600 text-white px-4 py-2 rounded mb-3 hover:bg-blue-700"
          > Browse Shopping List</Link>
        </div>
      ) : (
        <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
          <h1 className="text-xl font-semibold mb-2">Login with Git!</h1>
          <button onClick={handleLogin}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
          >Login
          </button>
        </div>
      )}
    </main>
  );

}
