export default function UserProfile() {
    return (
      <div className="p-6 flex flex-col items-center">
        <img
          src="https://via.placeholder.com/100"
          alt="User Avatar"
          className="rounded-full w-24 h-24"
        />
        <h2 className="mt-2 text-xl font-semibold">Gabriel Cordeiro</h2>
        <p className="text-gray-500 text-sm">Head Dev - Magazord</p>
        <div className="mt-4 text-blue-500 text-sm flex flex-col">
          <a href="#">Magazord - plataforma</a>
          <a href="#">Rio do Sul - SC</a>
          <a href="#">Cordas.hub.uok</a>
          <a href="#">Gabriel.s.cordeiro</a>
        </div>
      </div>
    );
  }