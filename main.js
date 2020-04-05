(() => {
    const percentages = [90, 50, 40, 30, 20];

    const $progressBars = document.querySelectorAll('.progress-bar > .progress');
    console.log($progressBars);

    $progressBars.forEach(($bar, index) => {
        $bar.style.setProperty('--percentage', `${percentages[index]}%`);
        console.log($bar);
    });
})();