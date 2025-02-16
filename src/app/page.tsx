"use client";

import { useState } from "react";
import Header from "@/components/Header";
import UserProfile from "@/components/UserProfile";
import Tabs from "@/components/Tabs";
import Filters from "@/components/filters/Filters";
import Repositories from "@/components/repositories/Repositories";


export default function Home() {
  const [activeTab, setActiveTab] = useState("repos");

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
      <div className="md:w-full md:max-w-5xl flex flex-col sm:flex-row sm:items-start">
        <div className="w-full max-w-5xl">
          <div className="flex flex-col sm:flex-row sm:items-start">
            <UserProfile />

            <div className="w-full max-w-5xl px-6 mt-7">
              <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
              <Filters />

              <Repositories activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
