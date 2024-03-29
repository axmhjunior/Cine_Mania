import { IoIosStar } from "react-icons/io";

function TorrentsInfo({data}) {
    return ( 
        <>
            <section className="flex space-x-10  mt-4">
                <p>Year: {data.year}</p>
                <p><IoIosStar className="inline -mt-1 text-yellow"/> {data.rating}</p>
            </section>
                            
            <section className="mt-4 sm:mb-4 flex  space-x-2">
                    {(data.torrents) ? 
                        (data.torrents.map(torrent=>
                            (<a href={torrent.url} 
                                className="border w-fit p-1 text-none bg-gray">
                                    <span className="text-green">&bull;</span> 
                                    {torrent.quality} </a>)))  : ""
                                }
                            </section>            
        </>
     );
}

export default TorrentsInfo;