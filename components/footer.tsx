import Link from "next/link";
export default function Footer() {
  return (
    <section>
      <div>
        <a href="https://github.com/Diorla/malinks">Github</a>
        <Link href="./changelog">
          <a href="">Changelog</a>
        </Link>
        <Link href="./license">
          <a href="">License</a>
        </Link>
      </div>
      <div>Ade Adeola 2020 &copy;</div>
      <style jsx>{`
        section {
          background: #333;
          min-height: 50px;
          color: white;
          justify-content: space-around;
          align-items: center;
          height: 96px;
        }
        section div {
          justify-content: space-evenly;
          display: flex;
          width: 100%;
        }
        section a {
          color: white;
        }
      `}</style>
    </section>
  );
}
