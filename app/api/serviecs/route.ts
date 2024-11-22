import { NextResponse } from "next/server";
export function GET() {
    let service = {
        title: 'A Services',
        discription: 'A Services discription'
    }
    return NextResponse.json(service, { status: 200 })
}



export  async function POST(request: Request) {
    const body = await request.json();
    console.log(body)
    return NextResponse.json(
        {
            massage: "Post Method",
            data: body
        }
    )
}


export function PUT() {
    return NextResponse.json(
        {
            massage: "PUT Method"
        }
    )

}


export function DELETE() {
    return NextResponse.json(
        {
            massage: "Delete Method"
        }
    )
}