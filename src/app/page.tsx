import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Trang chủ</h1>
      <Link href="/login">Đăng nhập</Link>
    </main>
  );
}
