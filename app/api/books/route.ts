import { NextResponse } from "next/server";


//simulate data base
let books = [
    {
        id: 1,
        title: "Harry Potter",
        author: "J.K Rowling",
        available: true
    },
    {
        id: 2,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        available: true
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        available: false
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        available: true
    },
    {
        id: 5,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        available: true
    },
    {
        id: 6,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        available: false
    },
    {
        id: 7,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        available: true
    },
    {
        id: 8,
        title: "Lord of the Flies",
        author: "William Golding",
        available: false
    },
    {
        id: 9,
        title: "The Alchemist",
        author: "Paulo Coelho",
        available: true
    },
    {
        id: 10,
        title: "Brave New World",
        author: "Aldous Huxley",
        available: true
    }

]
export { books };
export async function GET() {
    try {
        return NextResponse.json(books, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            {
                massage: "No Data"
            },
            {
                status: 500
            }
        )
    }
}



