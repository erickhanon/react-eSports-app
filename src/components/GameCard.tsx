interface GameCardProps {
    bannerUrl: string;
    title: string;
    adsCount: number;
}

export function GameCard(props: GameCardProps) {
    return (
        <a href="" className="relative rounded-lg overflow-hidden brightness-100 hover:brightness-50 hover:-translate-y-1 hover:scale-110 duration-200">
            <img src={props.bannerUrl} alt="" />
            <div className="m-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 right-0 left-0">
                <strong className="font-bold text-white block">
                    {props.title}
                </strong>
                <span className="text-zinc-300 text-sm block">{props.adsCount} Anúncio(s)</span>
            </div>
        </a>
    )
}