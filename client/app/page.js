import UnAuthNav from "@/components/atoms/UnAuthNav";

export default function Home() {
  return (
    <main className="min-h-screen">
      <UnAuthNav/>
      <div className="flex justify-center items-center h-96">
        <div className="flex w-10/12 ml-50">
          <div className="flex flex-col flex-4 gap-6">
            <h2 className="text-3xl">We bring you the best quality products for Auction</h2>
            <h2 className="text-3xl">Don't miss out!!</h2>
          </div>
          <div className="flex-1">images</div>
        </div>
      </div>
    </main>
  );
}
