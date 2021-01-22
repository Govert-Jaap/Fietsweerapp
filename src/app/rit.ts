import { User } from "./user";

export interface Rit {
    startAdres: string
    eindAdres: string
    afstand: number,
    datum: Date,
    gebruiker: User
}
