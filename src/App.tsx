import "./styles/main.css";
import { useState, useEffect } from "react";
import logo from "./assets/logo.svg";
import { GameCard } from "./components/GameCard";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { CreateAdDialog } from "./components/CreateAdDialog";
import * as Dialog from "@radix-ui/react-dialog";
interface Game {
  id: number;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="logo" className="object-contain h-2/5 w-2/5" />
      <h1 className="text-6xl text-slate-100 font-black mt-10">
        Seu{" "}
        <span className="text-transparent bg-gradient bg-clip-text animate-pulse">
          {" "}
          DUO{" "}
        </span>
        está aqui!
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <GameCard
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdDialog />
      </Dialog.Root>
    </div>
  );
}

export default App;
