export const appendIfDefined = (formData: FormData, key: string, value: unknown): void => {
    if (value !== null && value !== undefined) {
        formData.append(key, value as string | Blob);
    }
};