import { NextResponse } from "next/server";
export function GET(request: Request, { params }: { params: { userName: string } }) {
    console.log('userName',params.userName)
    return NextResponse.json(
        {
            massage:`Get Method /api/user/[userName]`,
            data: params.userName
        }
    )
}