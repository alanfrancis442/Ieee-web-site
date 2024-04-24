function Titel( prop:any ) {
    return ( 
        <>
            <div className="flex flex-col items-center gap-5 h-3/4 lg:text-8xl text-5xl">
                    <span className="rotate-180 font-bold " style={{writingMode: "vertical-lr"}}>
                        {prop.title.toUpperCase()}
                    </span>
                <div className="h-full bg-white w-2"></div>
                </div>
        </>
     );
}

export default Titel;