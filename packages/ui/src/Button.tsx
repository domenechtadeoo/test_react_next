import React from "react";
import { colors, radius } from "@ds/tokens";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    children,
    ...props
}) => {
    const background =
        variant === "primary" ? colors.primary : colors.secondary;

    return (
        <button
            {...props}
            style={{
                background,
                color: "white",
                borderRadius: radius.md,
                padding: "8px 16px",
                border: "none",
                cursor: "pointer"
            }}
        >
            {children}
        </button>
    );
};
