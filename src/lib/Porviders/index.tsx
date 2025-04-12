"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import UserProvider from "@/context/user.provider";
import "react-toastify/dist/ReactToastify.css";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { HeroUIProvider } from "@heroui/react";
import '@ant-design/v5-patch-for-react-19';

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <AntdRegistry>
      <HeroUIProvider>
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
      </HeroUIProvider>
    </AntdRegistry>
  );
}
