declare module 'bootstrap';
declare module '@popperjs/core';
declare module 'js/demo';
declare module '*.scss' {
    const classes: { [key: string]: string };
    export = classes;
};
declare var require: {
    context: (path: string, deep?: boolean, filter?: RegExp) => {
        keys: () => string[];
        <T>(id: string): T;
    };
};
declare module '*.tsx' {
    const content: React.ComponentType<any>;
    export default content;
}
