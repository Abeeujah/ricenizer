import { Card, Typography } from "@/app/components/WithMt.exports";

const TABLE_HEAD = ["Token", "Amount", "Quantity", "ReferenceId"];

const TABLE_ROWS = [
  {
    token: "John Michael",
    amount: "Manager",
    quantity: "23/04/18",
    referenceId: "reetkat",
  },
  {
    token: "Alexa Liras",
    amount: "Developer",
    quantity: "23/04/18",
    referenceId: "reetkat",
  },
  {
    token: "Laurent Perrier",
    amount: "Executive",
    quantity: "19/09/17",
    referenceId: "reetkat",
  },
  {
    token: "Michael Levi",
    amount: "Developer",
    quantity: "24/12/08",
    referenceId: "reetkat",
  },
  {
    token: "Richard Gran",
    amount: "Manager",
    quantity: "04/10/21",
    referenceId: "reetkat",
  },
];

const DefaultTable = () => {
  return (
    <Card className="h-full w-full overflow-scroll my-4">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ token, amount, quantity, referenceId }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={referenceId}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {token}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {amount}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {quantity}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {referenceId}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default DefaultTable;
