import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  console.log(request.method);
  console.log("inside the middleware");
}

export const config = {
  matcher: ["/api/login"],
};
