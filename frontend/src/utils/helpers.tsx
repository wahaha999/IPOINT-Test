export const renderAsterisk = (isRequired: boolean) => {
    return isRequired && <span aria-hidden="true">*</span>;
}