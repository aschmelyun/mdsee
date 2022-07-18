# mdsee

> Easily view Markdown files in the browser, and automatically see any changes.

This simple package starts a local server and renders out Markdown files in your browser. Any changes made to the Markdown file is automatically injected into the browser window as long as the server is running.

## Installation

To get started:

```bash
npm install -g mdsee

mdsee my-file.md
```

This will start a server at port 3000 and open up your browser window automatically.

## Usage

The app's syntax is:

```bash
mdsee {options} {filepath}
```

There's a handful of options that you can use to control the behavior:

- `--port=3000` changes the port that the server runs on
- `--no-browser` prevents the browser from opening automatically when starting the server
- `--no-watch` prevents the browser from automatically updating on changes

**Note:** When using the watch feature, a websocket server is started on port `8088`.

## Building Assets

If you're modifying or working with this app locally, you need to build the CSS assets for the styles used when the web server is running. In order to do that, run this command locally:

```bash
npx tailwindcss -i ./css/app.css -o ./dist/css/app.css --minify
```

For more information, refer to the Tailwind CSS [CLI documentation](https://tailwindcss.com/docs/installation) guide.

## Contact

Have an issue? Submit it here! Want to get in touch or recommend a feature? Feel free to reach out to me on [Twitter](https://twitter.com/aschmelyun) for any other questions or comments.

## License

This software is licensed under The MIT License (MIT). See [LICENSE.md](https://github.com/aschmelyun/mdsee/blob/main/LICENSE.md) for more details.