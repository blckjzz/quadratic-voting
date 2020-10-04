import Link from "next/link"; // Dynamic links

export default function Navigation(props) {
  return (
    // Navigation bar
    <div className="navigation">
      {/* Navigation title and history */}
      <Link href={props.history.link}>
        <a>⟵ Return to {props.history.title}</a>
      </Link>
      <span>{props.title}</span>

      {/* Scoped styling */}
      <style jsx>{`
        .navigation {
          background-color: #00d182;
          border-bottom: 1px solid #0f0857;
          font-size: 18px;
          padding: 10px 20px 0px 20px;
          height: 30px;
        }

        .navigation > a {
          float: left;
          text-decoration: none;
          color: #0f0857;
          border-bottom: 1px solid #0f0857;
          transition: 50ms ease-in-out;
        }

        .navigation > a:hover {
          opacity: 0.8;
        }

        .navigation > span {
          float: right;
          font-weight: bold;
          transform: translateY(-2px);
          color: #0f0857;
        }
      `}</style>
    </div>
  );
}
