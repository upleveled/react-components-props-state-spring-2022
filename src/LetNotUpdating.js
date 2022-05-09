// ANTIPATTERN (DO NOT USE)
let count = 0;

export default function LetNotUpdating() {
  return (
    <div>
      Count: {count}
      <button
        onClick={() =>
          // ANTIPATTERN (DO NOT USE)
          // This will not update the value on the page
          (count = count + 1)
        }
      >
        +
      </button>
      <button onClick={() => (count = count - 1)}>-</button>
    </div>
  );
}
