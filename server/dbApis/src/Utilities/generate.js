import { nanoid } from "nanoid"
import { facturaExist } from "./Utilities.js";

export async function generarId() {
    const id = nanoid(20); 
    const bool = await facturaExist(id);

    if (bool) {
        return generarId(); 
    } else {
        return id;
    }
}