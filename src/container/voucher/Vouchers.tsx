const Vouchers = () => {
  // fetch the state and loop
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Vouchers</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="card card-compact bg-neutral max-w-80">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">အခေါက် ရွှေလက်ကောက်</h2>
            <p>၁ ကျပ်သား</p>
            <p>
              <span>ဝယ်ဈေး - </span> 38.4 <span>MMK</span>
            </p>
            <div className="card-actions mt-8">
              <button className="btn btn-primary w-full">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vouchers;
