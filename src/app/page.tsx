"use client";

import { useState } from 'react';
import Header from '../components/Header';
import UserProfile from '../components/UserProfile';
import Tabs from '../components/Tabs';
import SearchBar from '../components/SearchBar';
import RepoCard from '../components/RepoCard';

const mockRepos = [
  { name: "Next.js Test", description: "Un test de Next.js", stars: 1500, forks: 100, url: "#" },
  { name: "React Query", description: "Manejo avanzado de cache en React", stars: 726, forks: 91, url: "#" }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('repos');

  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      <Header />
      <div className="w-full max-w-5xl px-6 flex flex-col sm:flex-row sm:items-start">
        <div className="w-full max-w-5xl px-6">
          <div className="flex flex-col sm:flex-row sm:items-start ">
            <UserProfile />

            <div className="w-full max-w-5xl px-6 mt-7">
              <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
              <SearchBar />
              <div className="mt-4">
                {mockRepos.map((repo) => (
                  <RepoCard key={repo.name} {...repo} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
