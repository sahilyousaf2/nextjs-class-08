import { NextResponse } from "next/server";
let todos: string[] = []

export function GET() {
    
    return NextResponse.json(
        {
            massage: "Get Method /api/todo",
            data: todos
        }
    )
}

export function POST(request: Request) {
    const id = new URL(request.url).searchParams.get("id")
    const about = new URL(request.url).searchParams.get("about")
    const pushdata = id + "," + about
    todos.push(pushdata)

    // console.log(id)
    return NextResponse.json({ massage: "Post Method", id, about })

}