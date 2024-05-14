import { NextRequest } from "next/server";
import { datas } from "../data.json"

export function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const q = searchParams.get("q")
    const filteredData = q ? datas.filter(data => (data.fName.toLowerCase().includes(q.toLowerCase()) || data.position.toLowerCase().includes(q.toLowerCase()) || data.country.toLowerCase().includes(q.toLowerCase()))) : datas
    return Response.json(filteredData)
}