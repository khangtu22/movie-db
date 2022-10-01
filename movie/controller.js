import {getAll, remove} from "./model.js";


export async function listAction(request, response) {
    const data = await getAll();
    response.send(data);
}

export async function removeAction(request, response) {
    const id = parseInt(request.params.id, 10);
    const data = await remove(id);
    response.redirect(request.baseUrl);
}
