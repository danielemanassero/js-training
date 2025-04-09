(function(){
    const continueButtons = document.querySelectorAll('.continueButton');
    const stepButtons = document.querySelectorAll('.stepButton');


    /**
     * @desc Continue Button handler
     * @param {object} e event 
     */
    const continueHandler = (e) => {
        const nextStep = e.target.dataset.goto;
        const lastStep = e.target.closest('.step');
        const lastStepButton = lastStep.querySelector('.stepButton');

        if (lastStep.id !== 'step4') {
            // remove class "current" and add "prev" on current step
            lastStepButton.classList.remove('current');
            lastStepButton.classList.add('prev');
        } else {
            // remove class "prev" and "current" on all steps.
            document.querySelectorAll('.stepButton').forEach(item => {
                item.classList.remove('prev');
                item.classList.remove('current');
            });
            // add class "current" on step1
            document.querySelector('#step1').classList.add('current');
        }
        
        // close all steps containers
        document.querySelectorAll('.stepContainer').forEach(item => {
            item.classList.add('hidden')
        });

        // open next step container and add "current" class on next step button
        document.querySelector(`#${nextStep} .stepContainer`).classList.remove('hidden');
        document.querySelector(`#${nextStep} .stepButton`).classList.remove('prev');
        document.querySelector(`#${nextStep} .stepButton`).classList.add('current');
    }


    /**
     * @desc Step Header Button handler
     * @param {object} e event 
     */
    const stepHandler = (e) => {}


    continueButtons.forEach(item => {
        item.addEventListener('click', continueHandler)
    });


    stepButtons.forEach(item => {
        item.addEventListener('click', stepHandler);
    })
})();