import { helloWorldMsg } from '@repo/core/src/commons/consts/messages';

export default function Home() {
  return (
    <main>
      <b>{helloWorldMsg}</b> from NextJS
    </main>
  );
}
