import "./styles/main.css";
import { useState, useEffect } from "react";
import logo from "./assets/logo.svg";
import { GameCard } from "./components/GameCard";
import { CreateAdBanner } from "./components/CreateAdBanner";
import image1 from "./assets/image 1.png";
import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";
import { Input } from "./components/Form/input";

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
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl text-white font-black">
              Publique um Anúncio!
            </Dialog.Title>

            <form className="mt-8 flex flex-col gap-4">

              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">Qual o Jogo?</label>
                <Input id="game" placeholder="Digite o nome do jogo" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name">Qual Seu Nome ou Nickname?</label>
                <Input placeholder="Digite seu nome no jogo" id="name" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
                  <Input placeholder="Tudo bem ser Zero" id="yearsPlaying" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual seu Discord?</label>
                  <Input placeholder="Usuário#0000" id="discord" />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays">Quando você costuma jogar?</label>
                  <div className="grid grid-cols-4 gap-2">
                    <button title="Domingo" className="w-8 h-8 rounded bg-zinc-900">D</button>
                    <button title="Segunda" className="w-8 h-8 rounded bg-zinc-900">S</button>
                    <button title="Terça" className="w-8 h-8 rounded bg-zinc-900">T</button>
                    <button title="Quarta" className="w-8 h-8 rounded bg-zinc-900">Q</button>
                    <button title="Quinta" className="w-8 h-8 rounded bg-zinc-900">Q</button>
                    <button title="Sexta" className="w-8 h-8 rounded bg-zinc-900">S</button>
                    <button title="Sábado" className="w-8 h-8 rounded bg-zinc-900">S</button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="hourStart">
                    Que horas você começa a jogar?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input type="time" id="hourStart" placeholder="De" />
                    <Input type="time" id="hourEnd" placeholder="Até" />
                  </div>
                </div>
              </div>

              <div className="mt-2 flex gap-2">
                <Input type="checkbox" id="acceptTerms" />
                Quero Usar Chat de Voz
              </div>
              <footer className="mt-4 flex justify-end gap-4">
                <button type="submit" className="bg-violet-500 px-5 h-12 rounded-lg font-semibold flex items-center gap-3 hover:bg-violet-900 ">
                  <GameController size={24} />
                  Criar Anúncio
                </button>
                <Dialog.DialogClose type="button" className="bg-zinc-500 px-5 h-12 rounded-lg font-semibold hover:bg-zinc-700">Cancelar</Dialog.DialogClose>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
