import FormInput from "./components/FormInput";
import Navbar from "./components/Navbar";
import { Vouchers } from "./container/voucher";

function App() {
  return (
    <>
      <Navbar />
      <section className="container mx-auto p-4">
        <section className={"grid grid-cols-12 gap-8"}>
          <div className={"col-span-3"}>
            <FormInput />
          </div>
          <div className="col-span-9">
            <Vouchers />
          </div>
        </section>
      </section>
    </>
  );
}

export default App;
