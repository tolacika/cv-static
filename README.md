This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

For a disposable node container:
```bash
docker run --rm -it -w /app -v $(pwd):/app -p 3000:3000 node:20 bash
```

```bash
npm install
```

NPM scripts:
```bash
# Serve dev app on port 3000
npm run dev
# Build the app
npm run build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
