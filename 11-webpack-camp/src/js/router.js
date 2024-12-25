export default class Router {
    constructor(routes) {
        this.routes = routes;
        this.init();
    }

    init() {
        document.addEventListener('click', e => {
            if (e.target.matches('[data-link]')) {
                e.preventDefault();
                this.navigate(e.target.href);
            }
        });

        window.addEventListener('popstate', () => {
            this.render(window.location.pathname);
        });

        this.render(window.location.pathname);
    }

    navigate(url) {
        window.history.pushState(null, null, url);
        this.render(new URL(url).pathname);
    }

    render(pathname) {
        const route = this.routes.find(route => route.path === pathname) || this.routes[0];
        document.getElementById('app').innerHTML = route.view();
    }
}
