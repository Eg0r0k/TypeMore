export function checkInput(input, target) {
    const inputText = input.textContent;
    const targetText = target.textContent;
    const correctClass = 'correct';
    const incorrectClass = 'incorrect';
    const overIncorrectClass = 'overincorrect';

    if (inputText === targetText) {
        input.classList.add(correctClass);
    } else if (inputText.length > targetText.length) {
        target.textContent = inputText.slice(0, targetText.length);
        target.classList.add(overIncorrectClass);
    } else {
        input.classList.add(incorrectClass);
    }
}
