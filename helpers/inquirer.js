import colors from 'colors';
import inquirer from 'inquirer';

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que deseas hacer?',
        choices: [
            {
                value: 1,
                name: '1.Crear tarea'.green
            },
            {
                value: 2,
                name: '2.Listar tareas'.green,
            },
            {
                value: 3,
                name: '3.Listar tareas completadas'.green,
            },
            {
                value: 4,
                name: '4.Listar tareas pendientes'.green,
            },
            {
                value: 5,
                name: '5.Completar tarea(s)'.green,
            },
            {
                value: 6,
                name: '6.Eliminar tarea(s)'.green,
            },
            {
                value: 0,
                name: '0.Salir'.red,
            }
        ]
    }
]


const inquirerMenu = async () => {

    console.log('==============================='.green);
    console.log('  Seleccione una opcion  '.red);
    console.log('===============================\n'.green);

    const { opcion } = await inquirer.prompt(menuOpts);

    return opcion;
}

const pausa = async () => {

    const questions = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'Enter'.green} para continuar`
        }

    ]
    console.log('\n')
    await inquirer.prompt(questions)

}

const leerInput = async (message) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,

            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor'
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

const listadoTareasBorrar = async (tareas = []) => {

    const choices = tareas.map((tarea, i) => {

        const idx = `${i + 1}.`.green;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.des}`
        }
    });

    choices.unshift(
        {
            value: '0',
            name: `${'0'.green} Cancelar `
        }
    )

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas);
    return id;


}

const confirmarBorrado = async (message) => {
    const question = {
        type: 'confirm',
        name: 'ok',
        message
    }
    const { ok } = await inquirer.prompt(question);
    return ok;

}

export { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmarBorrado }