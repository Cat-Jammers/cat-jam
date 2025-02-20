/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
export default {
	async fetch(request, env, ctx) {
		const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cat Jam!</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f4f4f4;
            padding: 50px;
          }
          h1 {
            color: #333;
          }
          p {
            color: #666;
          }
          .webring {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 20px;
            margin: 20px auto;
            max-width: 600px;
          }
          .webring a {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
          }
          .webring img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            transition: transform 0.3s ease-in-out;
          }
          .webring img:hover {
            transform: scale(1.1);
          }
          .webring p {
            margin-top: 10px;
            font-weight: bold;
            color: #333;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to Cat Jam !!  :3</h1>
        <p>We are a team of 6 people on <a href="https://hackclub.com/slack/" target="_blank">Hack Club Slack</a> trying to get socks for <a href="https://hackclub.slack.com/archives/C08DPRYMWF8" target="_blank">#sock</a>!! Try joining us!</p>
        <p>Stay tuned for our awesome project that still isn't decided as my other mates are 12:30 hours behind me :P</p>

        <div class="webring">
          <a href="https://hackclub.slack.com/team/U07AZFQLPQ8" target="_blank">
            <img src="https://ca.slack-edge.com/T0266FRGM-U07AZFQLPQ8-fc1c1ed8ba36-512" alt="KittyCat">
            <p>KittyCat</p>
          </a>
          <a href="https://hackclub.slack.com/team/U0266FRGP" target="_blank">
            <img src="https://ca.slack-edge.com/T0266FRGM-U0266FRGP-0e1376df084b-512" alt="zrl">
            <p>zrl</p>
          </a>
          <a href="https://hackclub.slack.com/team/U078J6H1XL3" target="_blank">
            <img src="https://ca.slack-edge.com/T0266FRGM-U078J6H1XL3-eb76cc600228-512" alt="phthallo">
            <p>phthallo</p>
          </a>
          <a href="https://hackclub.slack.com/team/U082RFNDVKQ" target="_blank">
            <img src="https://ca.slack-edge.com/T0266FRGM-U082RFNDVKQ-g74b68349225-512" alt="DJ_Laser">
            <p>DJ_Laser</p>
          </a>
          <a href="https://hackclub.slack.com/team/U0829HRSQ76" target="_blank">
            <img src="https://ca.slack-edge.com/T0266FRGM-U0829HRSQ76-e6aff3d33468-512" alt="PianoMan0">
            <p>PianoMan0</p>
          </a>
          <a href="https://hackclub.slack.com/team/U07FEFY2DNC" target="_blank">
            <img src="https://ca.slack-edge.com/T0266FRGM-U07FEFY2DNC-d223a7106aa4-512" alt="crabby605">
            <p>crabby605</p>
          </a>
        </div>
        <p>anyways thanks for visiting us if you see that the webapge has loaded b4 the images thats cos of cloudflare magic!</p>
        <p>pls pardon my css im bad at it :P</p>
      </body>
      </html>
    `;

		return new Response(html, {
			headers: { "Content-Type": "text/html" }
		});
	}
};
