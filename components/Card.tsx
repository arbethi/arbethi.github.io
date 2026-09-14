export const Card = (props: { title: string, path?: string, url?: string }) => {
    const cardContent = (
        <article className="bg-zinc-700 shadow-md overflow-hidden w-[20rem] hover:bg-zinc-600">
            <p className="text-m font-bold text-white p-4 text-center whitespace-nowrap">{props.title}</p>

            <div className="aspect-13/8 overflow-hidden">
                {props.path && <img
                    src={props.path}
                    className="h-full w-full object-cover"
                />}
                {(props.url && props.url?.startsWith("https")) && <iframe width="300" height="225" src={props.url}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
            </div>
        </article>
    );

    return (props.url) ? (
        <a href={props.url} className="block" 
        // target="_blank" 
        rel="noopener noreferrer"
        >
            {cardContent}
        </a>
    ) : (
        cardContent
    );
}