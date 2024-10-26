const text = document.querySelector(".typewriter");

const updateAnimationSteps = (textContent) => {
    const stepsValue = textContent.length; // Get the length of the text
    const styleSheet = document.styleSheets[0];
    const rule = `.typewriter:before { animation: animate 4s steps(${stepsValue}) infinite; }`;
    styleSheet.insertRule(rule, styleSheet.cssRules.length);
}

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Web Developer";
        updateAnimationSteps(text.textContent);
    }, 0);
    setTimeout(() => {
        text.textContent = "Photographer";
        updateAnimationSteps(text.textContent);
    }, 4000);
    setTimeout(() => {
        text.textContent = "Video Editor";
        updateAnimationSteps(text.textContent);
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);