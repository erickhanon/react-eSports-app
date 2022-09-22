import "./styles/main.css";
import logo from "./assets/logo.svg";
import {MagnifyingGlassPlus} from "phosphor-react"

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="logo" className="object-contain h-2/5 w-2/5" />
      <h1 className="text-6xl text-slate-100 font-black mt-10">
        Seu <span className="text-transparent bg-gradient bg-clip-text animate-pulse"> DUO </span>está aqui!
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden brightness-100 hover:brightness-50 hover:-translate-y-1 hover:scale-110 duration-200">
          <img src="/src/assets/image 1.png" alt="" />
          <div className="m-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 text-sm block">10 Anuncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden brightness-100 hover:brightness-50 hover:-translate-y-1 hover:scale-110 duration-200">
          <img src="/src/assets/image 2.png" alt="" />
          <div className="m-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-zinc-300 text-sm block">10 Anuncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden brightness-100 hover:brightness-50 hover:-translate-y-1 hover:scale-110 duration-200">
          <img src="/src/assets/image 3.png" alt="" />
          <div className="m-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">
              Counter Strike
            </strong>
            <span className="text-zinc-300 text-sm block">10 Anuncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden brightness-100 hover:brightness-50 hover:-translate-y-1 hover:scale-110 duration-200">
          <img src="/src/assets/image 5.png" alt="" />
          <div className="m-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">Apex Legends</strong>
            <span className="text-zinc-300 text-sm block">10 Anuncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden brightness-100 hover:brightness-50 hover:-translate-y-1 hover:scale-110 duration-200">
          <img src="/src/assets/image 6.png" alt="" />
          <div className="m-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-zinc-300 text-sm block">10 Anuncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden brightness-100 hover:brightness-50 hover:-translate-y-1 hover:scale-110 duration-200">
          <img src="/src/assets/image 7.png" alt="" />
          <div className="m-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">
              World of Warcraft
            </strong>
            <span className="text-zinc-300 text-sm block">10 Anuncios</span>
          </div>
        </a>
      </div>
      <div className="pt-1 bg-gradient self-stretch rounded-lg mt-8">
        <div className="bg-[#242634] px-8 py-6 flex justify-between items-center rounded-b-md">
          <div>
          <strong className="text-2xl text-white font-black block">Não encontrou um parceiro?</strong>
          <span className="text-zinc-400 block">Publique seu anúncio para encontrar um parceiro de jogo.</span>
          </div>
          <button className="py-3 px-4 bg-violet-500 text-white rounded font-bold hover:bg-violet-600 flex items-center gap-3">
            <MagnifyingGlassPlus size={24}/>
            Criar Anúncio
            </button>
        </div>
      </div>
    </div>
  );
}

export default App;
