function Description({data}) {
    return (
        <section className="mt-4 md:2xl sm:text-2xl">
        <h4>Description:</h4>
        {
            (data.description_intro) ? 
            <p>{data.description_intro}</p> : 
            <a target="_blank" className="underline text-blue" 
            href={`https://www.google.com/search?q=${data.title} ${data.year} synopsis`} >{data.title}.com</a>
        }
    </section>
      );
}

export default Description;