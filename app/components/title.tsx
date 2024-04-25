function Titel( prop:any ) {
    return ( 
        <>
        <div className="h-full">
            <div className="flex flex-col items-center gap-5 h-3/4 lg:text-7xl text-5xl">
                    <span className="rotate-180 font-bold" style={{writingMode: "vertical-lr"}}>
                        {prop.title.toUpperCase()}
                    </span>
                <div className="grow h-[50vh] bg-white lg:w-2 w-1"></div>
                </div>

        </div>
        </>
     );
}

export default Titel;