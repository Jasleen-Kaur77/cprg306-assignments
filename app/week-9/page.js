"use client";

// Import the useUserAuth hook
import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
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
    <main>
      {user ? (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleLogout}>
            Log Out
          </button>
          <Link href="/week-9/shopping-list"> Go To Shopping List</Link>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </main>
  );

}
