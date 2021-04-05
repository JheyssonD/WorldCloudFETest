import { Wand } from "../wand/wand";
import * as moment from 'moment';

export class Character {
    "name": string;
    "species": string;
    "gender": string;
    "house": string;
    "dateOfBirth": string;
    "yearOfBirth": moment.Moment;
    "ancestry": string;
    "eyeColour": string;
    "hairColour": string;
    "wand": Wand;
    "patronus": string;
    "hogwartsStudent": boolean;
    "hogwartsStaff": false;
    "actor": string;
    "alive": boolean;
    "image": string;
}
