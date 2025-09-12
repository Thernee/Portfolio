export default function Food() {
  const food1 = 'Pounded Yam';
  const food2 = 'Moringa';
  return (
    <ul>
      <li>Apple</li>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
    </ul>
  );
}