import React from "react";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "error" | "info" | "warning" | "success";
  /**
   * Overrides the default colour, only works when variant is "primary" or "secondary".
   */
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  /**
   * Accept react nodes like string, or another elements like icons.
   */
  children: React.ReactNode;
  onClick?: () => void;
  /**
   * Spans the entire width of the container
   */
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  backgroundColor = "#AD301A",
  fullWidth = false,
  children,
  ...props
}) => {
  const colorCodes = {
    error: "#f44336",
    info: "#2196f3",
    success: "#4caf50",
    warning: "#ff9800",
  };
  const width = fullWidth ? "100%" : "auto";
  return (
    <button
      type="button"
      className={["button", `${size}`, variant].join(" ")}
      {...props}
    >
      {children}
      <style jsx>{`
        .button {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-weight: 700;
          border: 0;
          border-radius: 4px;
          cursor: pointer;
          display: inline-block;
          line-height: 1;
          width: ${width};
        }
        .primary {
          color: white;
          background-color: ${backgroundColor};
        }
        .error {
          color: white;
          background-color: ${colorCodes.error};
        }
        .error:hover {
          box-shadow: 0 0 2px ${colorCodes.error};
        }
        .info {
          color: white;
          background-color: ${colorCodes.info};
        }
        .info:hover {
          box-shadow: 0 0 2px ${colorCodes.info};
        }
        .success {
          color: white;
          background-color: ${colorCodes.success};
        }
        .success:hover {
          box-shadow: 0 0 2px ${colorCodes.success};
        }
        .warning {
          color: white;
          background-color: ${colorCodes.warning};
        }
        .warning:hover {
          box-shadow: 0 0 2px ${colorCodes.warning};
        }
        .secondary {
          color: #333;
          background-color: transparent;
          box-shadow: ${backgroundColor} 0px 0px 0px 1px inset;
        }
        .small {
          font-size: 12px;
          padding: 10px 16px;
        }
        .medium {
          font-size: 14px;
          padding: 11px 20px;
        }
        .large {
          font-size: 16px;
          padding: 12px 24px;
        }
        button:hover {
          box-shadow: 0 0 2px ${backgroundColor};
        }
      `}</style>
    </button>
  );
};

export default Button;
