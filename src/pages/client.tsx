import {env} from "@/env";

export default function ClientPage() {
  return <section>
    <h1>Client Page</h1>
    <h3 suppressHydrationWarning>{typeof window !== 'undefined' ? 'Browser rendered' : 'Server Rendered'}</h3>
    <h5>{env.NEXT_PUBLIC_APP_NAME ?? 'No name'}</h5>
  </section>
}

export function getServerSideProps() {
  return {
    props: {}
  }
}