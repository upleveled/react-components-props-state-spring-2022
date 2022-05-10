function Article({ title, content }) {
  console.log('This are Article props', title, content);

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default function ShowAndDestructure() {
  const array = [1, null, true, false, NaN, undefined, [], 'string'];
  // React don't show null, boolean, empty arrays, undefined
  // Use JSON.stringify to see the full content transformed into a string

  return (
    <>
      <div>{JSON.stringify(array)}</div>
      <Article
        title="my string"
        content="asdasdasdhasjdhasdaskjdaskjd asjdhasjkd"
      />
    </>
  );
}
