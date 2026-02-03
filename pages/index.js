export async function getServerSideProps() {
  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbz-xzfVBLnmxYJrOkSCgIzinifZegEqgJLQrF3I2GM3WCaC8Ju8KX6CrxtyKU9jl-8/exec"
  );

  const json = await res.json();

  return {
    props: {
      data: json.data
    }
  };
}

export default function Home({ data }) {
  return (
    <div>
      <h1>Data Spreadsheet</h1>

      <table border="1">
        <thead>
          <tr>
            {Object.keys(data[0]).map(key => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {Object.values(row).map((val, j) => (
                <td key={j}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
