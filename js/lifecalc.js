function calculateLife(age) {
    const averageLife = 75;
    const percentUsed = ((age / averageLife) * 100).toFixed(1);
    const daysLived = age * 365;
    const daysRemaining = (averageLife - age) * 365;

    return {
        percentUsed,
        daysLived,
        daysRemaining
    };
}
