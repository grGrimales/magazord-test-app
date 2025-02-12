interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
    return (
      <div className="flex border-b">
        <button
          className={`p-3 ${activeTab === 'repos' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
          onClick={() => setActiveTab('repos')}
        >
          Repositories
        </button>
        <button
          className={`p-3 ${activeTab === 'starred' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
          onClick={() => setActiveTab('starred')}
        >
          Starred
        </button>
      </div>
    );
  }
  