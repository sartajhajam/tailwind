import "./App.css";

const App = () => {
  return (
    <div>
      {/* <section className="h-screen bg-purple-600"> */}
        <div className="grid grid-cols-12 ">
          <div className="bg-red-300 col-span-4">Child 1</div>
          <div className="bg-green-300 col-span-6" >Child 2</div>
          <div className="bg-blue-300 col-span-2">Child 3</div>
        </div>
      {/* </section> */}
    </div>
  );
};

export default App;
