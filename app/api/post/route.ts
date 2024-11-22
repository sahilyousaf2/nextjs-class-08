import { NextResponse } from "next/server";
import { POSTTYPE } from "@/app/types/type";
//create data
let posts: POSTTYPE[] = [
    {
        id: 1,
        title: "Post 1",
        caption: "This is Caption"
    },


]


//get data
export const GET = () => {
    return NextResponse.json(posts)
}

//post data 
export const POST = async (request: Request) => {
    // resivce data from request param
    const body = await request.json()
    // push data in database
    posts.push(body)
    // return massage 
    return NextResponse.json(
        {
            massage: "Post Successfully Created",
        }
    )

}


// delete post on database 
export const DELETE = (request: Request) => {
    // catch data
    const id = new URL(request.url).searchParams.get("id");
    console.log("id", id);
    // filter data 
    posts = posts.filter((post) => post.id != Number(id));
    // return massage 
    return NextResponse.json(
        {
            massage: "Post Successfully Deleted",
        }
    )
}



// update data 
export const PUT = async (req: Request) => {
    // resivce data from req params 
    const body: POSTTYPE = await req.json();
    // post map for update post 
    posts.map((post) => {
        // check id if id same and update to post 
        if (post.id == body.id) {
            post.title = body.title;
            post.caption = body.caption;
            // return new post data
            return post
        }
        else {
            return post
        }
    })
    // return masage 
    return NextResponse.json(
        {
            massage: "Post Successfully Updated",
        }
    )
}