type ButtonProps = {
    title: string;
    buttonType: ButtonTypes;
    onClick?: () => void;
}

enum ButtonTypes {
    Outline,
    Fill,
}

export {ButtonTypes};
export type {ButtonProps}