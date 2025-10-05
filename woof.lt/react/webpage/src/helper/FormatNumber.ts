export const formatNumber = (number: number): string => {
    const numberString = number.toString();
    if (number >= 100) {
        const integerPart = numberString.slice(0, -2);
        const decimalPart = numberString.slice(-2);
        return `${integerPart}.${decimalPart}`;
    } else {
        return numberString;
    }
};

export const formatNumber2 = (number: unknown): string => {
    const numericValue = parseFloat(number as string);
    return isNaN(numericValue) ? (number as string) : numericValue.toFixed(2);
};

export const formatNumber3 = (number: unknown, number2: string): string => {
    if (number === null || number === "") {
        return `0.00${number2}`;
    }

    number = formatNumber2(number);

    return `${number}${number2}`;
};

export const formatNumber4 = (number: unknown): string => {
    // Convert to number if it's not already
    const numericValue = parseFloat(number as string);

    // Check if it's a valid number
    if (isNaN(numericValue)) {
        return "0.00";
    }

    // Ensure the number has two decimal places
    return numericValue.toFixed(2);
};