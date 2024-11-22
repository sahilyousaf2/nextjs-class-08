import { books } from "./api/books/route"
// 
const Home = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Available Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((books) => (
            <div key={books.id} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{books.title}</h2>
              <p className="text-gray-600">Author : {books.author}</p>
              <p className={`mt-2 font-mono ${books.available ? 'text-green-600' : 'text-red-600'}`}>
                Status: {books.available ? 'Available' : 'Not Available'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
