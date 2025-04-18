const input = document.getElementById('password');
const button = document.getElementById('toggleVisibility');

if (input instanceof HTMLInputElement && button instanceof HTMLButtonElement) {
    button.addEventListener('click', () => {
        console.log('clicked')
        if (input.type === 'password') {
            input.type = 'text';
            button.textContent = '🔒'
        } else {
            input.type = 'password';
            button.textContent = '👁';
        }
    })
}