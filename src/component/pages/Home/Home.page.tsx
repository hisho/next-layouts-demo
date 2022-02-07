import Link from "next/link";

export const HomePage = () => (
  <>
    <h1>home page</h1>
    <div>
      <Link href={'/about'}>
        about
      </Link>
    </div>
  </>
)