import './App.css'

function App() {
  let name = "John Doe";

  return (
    <>
      {/* Single root element rule */}
      <div className="rule">
        <h1>Hello World</h1>
        <p>Welcome to my webpage!</p>
      </div>

      {/* CSS Class Rule in JSX */}
      <div className="rule">
        <p className="my-class">
          I practice coding every day to improve my skills.
        </p>
      </div>

      {/* Using JavaScript Expressions in JSX */}
      <div className="rule">
        <p>Hello {name}</p>
        <p>{20 + 20}</p>
      </div>

      {/* Using Inline Styles in JSX */}
      <div className="rule">
        <p style={{ color: 'blue', fontSize: '16px' }}>
          This is a paragraph with inline styles.
        </p>
      </div>

      {/* Comments in JSX */}
      <div className="rule">
        <p>
          This is a paragraph.
          {/* This is a comment in JSX */}
        </p>
      </div>
    </>
  )
}

export default App
