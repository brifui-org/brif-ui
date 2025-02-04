import { Button } from "@brifui/components";

const cols: string[] = ["", "Disabled", "Loading"];

export const Usage = () => {
  return (
    <table className="w-full table-fixed">
      <thead>
        <tr>
          {cols.map((col) => (
            <th
              key={col}
              className="border border-t-0 first:border-l-0 last:border-r-0 p-16 font-medium"
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            align="center"
            className="border border-t-0 first:border-l-0 last:border-r-0 p-16 font-medium"
          >
            <Button>Solid</Button>
          </td>
          <td
            align="center"
            className="border border-t-0 first:border-l-0 last:border-r-0 p-16 font-medium"
          >
            <Button disabled>Solid</Button>
          </td>
          <td
            align="center"
            className="border border-t-0 first:border-l-0 last:border-r-0 p-16 font-medium"
          >
            <Button isLoading>Solid</Button>
          </td>
        </tr>
        <tr>
          <td
            align="center"
            className="border border-t-0 first:border-l-0 last:border-r-0 p-16 font-medium"
          >
            <Button variant="outlined">Outlined</Button>
          </td>
          <td
            align="center"
            className="border border-t-0 first:border-l-0 last:border-r-0 p-16 font-medium"
          >
            <Button variant="outlined" disabled>
              Outlined
            </Button>
          </td>
          <td
            align="center"
            className="border border-t-0 first:border-l-0 last:border-r-0 p-16 font-medium"
          >
            <Button variant="outlined" isLoading>
              Outlined
            </Button>
          </td>
        </tr>
        <tr>
          <td
            align="center"
            className="border border-t-0 first:border-l-0 last:border-r-0 p-16 font-medium"
          >
            <Button variant="ghost">Ghost</Button>
          </td>
          <td
            align="center"
            className="border border-t-0 first:border-l-0 last:border-r-0 p-16 font-medium"
          >
            <Button variant="ghost" disabled>
              Ghost
            </Button>
          </td>
          <td
            align="center"
            className="border border-t-0 first:border-l-0 last:border-r-0 p-16 font-medium"
          >
            <Button variant="ghost" isLoading>
              Ghost
            </Button>
          </td>
        </tr>
        <tr>
          <td
            align="center"
            className="border border-t-0 border-b-0 first:border-l-0 last:border-r-0 p-16 font-medium"
          >
            <Button variant="link">Link</Button>
          </td>
          <td
            align="center"
            className="border border-t-0 border-b-0 first:border-l-0 last:border-r-0 p-16 font-medium"
          >
            <Button variant="link" disabled>
              Link
            </Button>
          </td>
          <td
            align="center"
            className="border border-t-0 border-b-0 first:border-l-0 last:border-r-0 p-16 font-medium"
          >
            <Button variant="link" isLoading>
              Link
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
