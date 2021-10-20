const Plugin = function (Alpine) {
    window.Alpine.directive('livetime', (el, { expression }, { evaluateLater, effect }) => {
        let getTimeToSet = evaluateLater(() => setInterval(function () {
            el.textContent = (new Date).toLocaleTimeString();
        }, 1000))

        effect(() => {
            getTimeToSet(setTime => {
                setTime;
            })
        })
    })
}

export default  Plugin
