const Home = () => {
    return (
        <section>
            <section className='bg-white p-5 rounded-t-sm'>
                <h1 className='text-lg text-cyan-43 font-medium mb-4'>Join our community</h1>
                <h2 className='text-base text-bright-yellow-54 mb-4'>30-day, hassle-free money back guarantee</h2>
                <p className='text-sm text-grayish-blue-67'>Gain access to our full library of tutorials along with expert code reviews.
                Perfect for any developers who are serious about honing their skills.</p>
            </section>
            <section>
                <div className='bg-cyan-43 p-5'>
                    <h3 className='text-white font-medium mb-4'>Monthly Subscription</h3>
                    <p className='flex items-center gap-2 text-light-gray-93 text-sm'><span className='text-3xl text-white'>$29 </span>per month</p>
                    <p className='text-sm text-light-gray-93 mb-5'>Full access for less than $1 a day</p>
                    <button className='w-full text-sm bg-bright-yellow-54 text-white p-3 rounded-sm shadow-lg cursor-pointer transition-all hover:bg-bright-yellow-40'>Sign Up</button>
                </div>
                <div className='bg-cyan-52 p-5 rounded-b-sm'>
                    <h3 className='text-white font-medium mb-4'>Why Us</h3>
                    <ul className='text-sm text-light-gray-93'>
                        <li>Tutorials by industry experts</li>
                        <li>Peer & expert code review</li>
                        <li>Coding exercises</li>
                        <li>Access to our GitHub repos</li>
                        <li>Community forum</li>
                        <li>Flashcard decks</li>
                        <li>New videos every week</li>
                    </ul>
                </div>
            </section>
        </section>
    )
}

export { Home };