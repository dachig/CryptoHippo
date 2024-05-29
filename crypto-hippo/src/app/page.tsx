import WordPullUp from "@/components/magicui/word-pull-up";
import BoxReveal from "@/components/magicui/box-reveal";
import { ButtonRouterPushLoading } from "@/components/home/buttonRouterPushLoading";

export default function Home() {
  return (
    <main className="py-24 md:py-36 lg:py-48 2xl:py-64 h-screen relative isolate overflow-hidden">
      <div className="mx-auto max-w-xl flex flex-col gap-4">
        <WordPullUp
          className="text-center text-4xl md:text-6xl tracking-wide font-extrabold text-primary"
          words=" Crypto Hippo "
        />
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="text-center text-xl text-gray-700">
            Browse the latest crypto trends and track your favourite coins to
            stay up-to-date easily!
          </h2>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="flex gap-4">
            <ButtonRouterPushLoading />
          </div>
        </BoxReveal>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[100rem] bg-gradient-to-tr from-primary to-primary opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </main>
  );
}
