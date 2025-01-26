export default function (plop) {
    plop.setGenerator('slide', {
        description: 'slide',
        prompts: [
            {
                type: 'input',
                name: 'chapter',
                message: 'chapter',
            },
            {
                type: 'input',
                name: 'article',
                message: 'article please',
            },
            {
                type: 'input',
                name: 'layout',
                message: 'layout please - default|iframe|image|two-cols|two-cols-header|poll',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'slides/{{chapter}}/{{article}}.md',
                templateFile: 'templates/slide-{{layout}}.hbs',
                abortOnFail: false,
                skipIfExists: false,
                force: true,
            },
        ],
    });
};
