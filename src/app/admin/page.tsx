"use client";

import { signOut } from "next-auth/react";

export default function AdminPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>👋 Chào mừng admin!</h1>
      <button
        onClick={() => signOut()}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#ef4444",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Đăng xuất
      </button>
    </div>
  );
}
