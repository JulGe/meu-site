(() => {
    const percentages = [40, 20, 30, 40, 50];

    const $progressBars = document.querySelectorAll('.progress-bar > .progress');
    console.log($progressBars);

    $progressBars.forEach(($bar, index) => {
        $bar.style.setProperty('--percentage', `${percentages[index]}%`);
        console.log($bar);
    });
})();