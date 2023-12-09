export const styledMail = ({
  date,
  reference,
  token,
  amount,
}: {
  date: Date;
  reference: string;
  token: string;
  amount: number;
}) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Token Purchase Confirmation</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
      body {
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
        display: grid;
        place-items: center;
      }
  
      .container {
        width: 37.5rem;
        margin: 2rem auto;
        padding: 1.25rem;
      }
  
      .heading {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }
  
      .subheading {
        font-size: 1.5rem;
        font-weight: normal;
        margin-bottom: .5rem;
      }
  
      .details {
        font-size: 1rem;
        margin-bottom: .5rem;
      }
  
      .center{text-align: center;}
      .bowout{margin-block: 2rem;}
    </style>
  </head>
  <body>
    <div class="container">
      <h1 class="heading">Your Token Purchase is Confirmed!</h1>
      <p class="subheading center">Transaction details</p>
      <p class="details">Reference Number: ${reference}</p>
      <p class="details">Amount: ${amount}</p>
      <p class="details">Token Generated: ${token}</p>
      <p class="details">Date: ${date.toString()}</p>
      <p>Thank you for your purchase! Please keep this email for your records.</p>
      <p class="center bowout">&copy; Ricenizer ${date.getFullYear()}</p>
    </div>
  </body>
  </html>  
    `;
};

export const plainMessage = ({
  date,
  reference,
  token,
  amount,
}: {
  date: Date;
  reference: string;
  token: string;
  amount: number;
}) => {
  return `
    Your Token Purchase is Confirmed!
    Transaction details
    Reference Number: ${reference}
    Amount: ${amount}
    Token Generated: ${token}
    Date: ${date.toString()}
    Thank you for your purchase! Please keep this email for your records.
    © Ricenizer ${date.getFullYear()}
    `;
};
