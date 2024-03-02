import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <section className="container mx-auto p-4">
        <section className={"grid grid-cols-4"}>
          <div className={"col-span-1 bg-primary"}>Hi</div>
          <div className={"col-span-3 bg-secondary"}>Hello</div>
        </section>
      </section>
    </>
  );
}

export default App;
