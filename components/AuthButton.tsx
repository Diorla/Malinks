import React from "react";
import {
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export interface AuthProps {
  brand?:
    | "facebook"
    | "github"
    | "google"
    | "instagram"
    | "linkedin"
    | "twitter";
  /**
   * Provides alternative colour in case brand is undefined.
   */
  color?: string;
  /**
   * Used instead of brands to provide custom icons or strings.
   */
  children?: React.ReactNode;
  onClick?: () => void;
}

export const brandColour = {
  google: "#ea4335",
  facebook: "#3b5998",
  twitter: "#1da1f2",
  github: "#333",
  linkedin: "#0077b5",
  instagram: "#e1306c",
};

const AuthButton: React.FC<AuthProps> = ({
  children,
  brand,
  color = "#AD301A",
  onClick,
  ...props
}: AuthProps) => {
  const Icon = {
    google: <FaGoogle />,
    facebook: <FaFacebook />,
    twitter: <FaTwitter />,
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    instagram: <FaInstagram />,
  };

  const colour = brand ? brandColour[brand] : color;
  return (
    <>
      {brand ? (
        <button onClick={onClick} {...props}>
          <span style={{ marginRight: 4 }}>{Icon[brand]}</span>
          {brand[0].toUpperCase() + brand.slice(1).toLocaleLowerCase()}
        </button>
      ) : (
        <button onClick={onClick} {...props}>
          {children}
        </button>
      )}
      <style jsx>{`
        button {
          padding: 8px;
          border-radius: 16px;
          border: 1px solid ${colour};
          background-color: ${colour};
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: 0.2s linear;
          display: flex;
          outline: none;
        }
        button:hover {
          color: ${colour};
          background: white;
        }
      `}</style>
    </>
  );
};

export default AuthButton;
