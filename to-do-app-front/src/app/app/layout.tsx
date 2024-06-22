import Navbar from "../components/navbar/navbar"

export default function LayoutApp ({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-layout grid-cols-5  h-screen">
      <Navbar />
      <div className="col-span-4  p-4">
        {children}
      </div>
    </div>
  );
}