import React from 'react'

function Home() {
  return (
    <>
        <div>
      {/* Header Section */}
      <header style={{ backgroundColor: "blue", color: "white", padding: "15px" }}>
        <h1>My Home Page</h1>
      </header>

      {/* Main Content */}
      <main style={{ padding: "20px" }}>
        <h2>Welcome</h2>
        <p>This is the home page of my website.</p>

        <button>Learn More</button>
      </main>

      {/* Footer Section */}
      <footer style={{ backgroundColor: "lightgray", padding: "10px", marginTop: "20px" }}>
        <p>© 2025 My Website</p>
      </footer>
    </div>

    </>
  )
}

export default Home