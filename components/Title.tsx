export const Title = (props:{title:string}) => {
    return (
        <div className="relative h-30 w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center scale-105"
                style={{ backgroundImage: "url(/background4.jpg)", opacity:0.8 }}
            />
            <h1 className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-white">
                {props.title}
            </h1>
        </div>
    )
}