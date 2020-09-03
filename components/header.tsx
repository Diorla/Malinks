import Link from "next/link";
import Shimmer from "./shimmer";

interface HeaderProps {
  user: {
    uid: string;
    displayName: string;
    email: string;
    photoURL: string;
  };
  loading: boolean;
}
export default function Header({ user, loading }: HeaderProps) {
  if (loading) return <Skeleton />;
  if (user) {
    return (
      <div>
        <Link href="/">
          <img src="linker.png" />
        </Link>
        <div>
          <Link href="/#app">
            <a>App</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/me">
            <span>
              {user.displayName}
              <img src={user.photoURL} />
            </span>
          </Link>
        </div>
      </div>
    );
  }
  return <NewUser />;
}

const Skeleton = () => (
  <div className="skeleton">
    <Shimmer height="32px" width="32px" />
    <div className="menu">
      {[1, 2, 3].map((item) => (
        <Shimmer key={item} width="64px" />
      ))}
    </div>
    <style jsx>{`
      .skeleton {
        justify-content: space-between;
        align-items: center;
        padding: 4px;
        border-bottom: 1px solid silver;
      }
      .menu {
        width: 150px;
        justify-content: space-evenly;
      }
    `}</style>
  </div>
);

const NewUser = () => (
  <div className="header">
    <Link href="/">
      <img src="linker.png" />
    </Link>
    <div>
      <Link href="/#apps">
        <a>Apps</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/#signin">
        <a>Sign in</a>
      </Link>
    </div>
    <style jsx>{`
      .header {
        justify-content: space-between;
        align-items: center;
        padding: 4px;
        border-bottom: 1px solid silver;
        position: fixed;
        width: 100%;
        top: 0;
        background: white;
      }
      .header > div {
        width: 210px;
        justify-content: space-evenly;
      }
      img {
        height: 32px;
      }
    `}</style>
  </div>
);
