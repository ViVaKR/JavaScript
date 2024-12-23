import '@/scss/styles.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

class ButtonHandler {
    constructor() {
        this.initialize();
    }

    initialize() {
        const successButton = document.querySelector('.btn.btn-outline-success.btn-sm');
        if (successButton) {
            successButton.addEventListener('click', this.handleSuccessButtonClick);
        }
    }

    handleSuccessButtonClick() {
        alert('Success button clicked!');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ButtonHandler();
});
