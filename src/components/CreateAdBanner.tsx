import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'
export function CreateAdBanner() {
    return (
        <div className="pt-1 bg-gradient self-stretch rounded-lg mt-8">
        <div className="bg-[#242634] px-8 py-6 flex justify-between items-center rounded-b-md">
          <div>
          <strong className="text-2xl text-white font-black block">Não encontrou um parceiro?</strong>
          <span className="text-zinc-400 block">Publique seu anúncio para encontrar um parceiro de jogo.</span>
          </div>

          <Dialog.Trigger className="py-3 px-4 bg-violet-500 text-white rounded font-bold hover:bg-violet-600 flex items-center gap-3">
            <MagnifyingGlassPlus size={24}/>
            Criar Anúncio
            </Dialog.Trigger>
        </div>
      </div>
    )
}