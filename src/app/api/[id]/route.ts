import { NextRequest } from "next/server"
import { datas } from "../data.json"

export function GET(_request: Request, { params }: { params: { id: string } }) {
    const id = parseInt(params.id)
    if (id > datas.length) {
        return Response.json({
            message: "Datas not found"
        }, { status: 404 })
    }
    const data = datas.find(data => +data.id == id)
    return Response.json(data)
}

export function DELETE(_request: Request, { params }: { params: { id: string } }) {
    const id = parseInt(params.id)
    const index = datas.findIndex(data => +data.id == id)
    const deletedData = datas[index]
    datas.splice(index, 1)
    return Response.json(deletedData)
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const user = await request.json()
    const newData = datas.map(data => data.id == params.id ? user : data)
    return Response.json(newData)
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const body = await request.json()
    const { fName } = body
    const index = datas.findIndex(data => data.id == params.id)
    datas[index].fName = fName
    return Response.json(datas)
}
