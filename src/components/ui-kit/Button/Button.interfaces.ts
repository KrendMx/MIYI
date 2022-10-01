type ButtonProps = {
    children: string;
    buttonType: ButtonTypes;
    onClick?: () => void;
    padding?: string;
}

enum ButtonTypes {
    Outline,
    Fill,
    Disabled
}

export {ButtonTypes};
export type {ButtonProps}