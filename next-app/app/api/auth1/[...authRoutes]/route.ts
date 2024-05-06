//this will handle all routes like ./efefe/fefef/fefefef/fefefef/fefefefef/fefefe
import { NextRequest, NextResponse } from "next/server";

export function GET(req:NextRequest,{params:{authRoutes}}:{params:{authRoutes:string[]}}){
  console.log(authRoutes,'params');
  return NextResponse.json({
    message:"asd"
  })
}

export function POST(){
  return NextResponse.json({
    message:"post api"
  })
}