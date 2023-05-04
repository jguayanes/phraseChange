export const getRandomNumber = (number) => {
    const random = Math.random();
    const roundeRandom = Math.round(random * number);

    return roundeRandom;
};