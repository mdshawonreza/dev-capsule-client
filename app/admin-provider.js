"use client"

import { AuthProvider } from '@/lib/auth';

export default function AdminProvider({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}