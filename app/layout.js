import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: '플랜두씨 다이어리',
  description: '계획 → 실제로 한 일 → 돌아보기를 잇는 다이어리',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {/* 유리 뒤에 비칠 색 덩어리. 흐릿한 원 세 개를 화면 뒤에 고정한다 */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-800/20" />
          <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-900/20" />
          <div className="absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-amber-100/50 blur-3xl dark:bg-amber-800/10" />
        </div>
        <header className="top sticky top-0 z-10 border-b border-black/5 bg-white/75 backdrop-blur-lg dark:border-white/10 dark:bg-neutral-950/75">
          <Link href="/" className="brand">플랜두씨 다이어리</Link>
          <nav className="nav">
            <Link href="/">계획</Link>
            <Link href="/tasks">할 일</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
