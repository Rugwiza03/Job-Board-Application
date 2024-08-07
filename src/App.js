

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
