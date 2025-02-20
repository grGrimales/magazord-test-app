"use client";

import { useGithubStore } from "@/store/github/githubStore";
import { Book, Star } from "lucide-react";



export default function Tabs() {


  const { activeTab, setActiveTab, reposCount, starredCount } = useGithubStore(); 

  return (
    <div className="w-full flex  sm:flex-row sm:items-center sm:justify-start gap-8">
      <button
        className={`flex items-center gap-2 relative py-3 text-lg font-normal fade-in
          ${activeTab === "repos" ? "text-textPrimary" : "text-textSecondary"}
        `}
        onClick={() => setActiveTab("repos")}
      >
        <Book
          size={24}
          className={activeTab === "repos" ? "text-textPrimary" : "text-textSecondary"}
        />
        Repositories

       
        <span
          className="ml-2  px-2 py-1 w-10 h-6 flex items-center justify-center shadow-sm text-sm bg-background rounded-full border border-border text-textSecondary"
        >
           {reposCount}
        </span>

        {activeTab === "repos" && (
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-tabActive fade-in"></span>
        )}
      </button>

      <button
        className={`flex items-center gap-2 relative py-3 text-lg font-normal transition-colors
          ${activeTab === "starred" ? "text-textPrimary" : "text-textSecondary"} fade-in
        `}
        onClick={() => setActiveTab("starred")}
      >
        <Star
          size={24}
          className={activeTab === "starred" ? "text-textPrimary" : "text-textSecondary"}
        />
        Starred

        <span
          className="ml-2  px-2 py-1 w-10 h-6 flex items-center justify-center shadow-sm text-sm bg-background rounded-full border border-border text-textSecondary"
        >
        {starredCount}
        </span>

        {activeTab === "starred" && (
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-tabActive fade-in"></span>
        )}
      </button>
    </div>
  );
}
