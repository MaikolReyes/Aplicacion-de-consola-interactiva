import { v4 as uuidv4 } from 'uuid';

class Tarea {

    id = '';
    des = '';
    completadoEn = null;

    constructor(desc) {
        this.id = uuidv4();
        this.des = desc;
        this.completadoEn = null;
    }
}

export { Tarea }