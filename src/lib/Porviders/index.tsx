"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import UserProvider from "@/context/user.provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
   
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <ToastContainer
            pauseOnFocusLoss={false}
            pauseOnHover={false}
            autoClose={2000}
          />
          {children}
        </QueryClientProvider>
      </UserProvider>
  );
}