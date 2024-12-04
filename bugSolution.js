```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>This is my Next.js app.</p>
      <Link href='/about'>
        <a>Go to About</a>
      </Link>
    </div>
  );
}

// pages/about.js
export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page of my Next.js app.</p>
    </div>
  );
}
```

This solution introduces an additional `about.js` page and demonstrates the use of `Link` from `next/link` to navigate to it. This shows a better approach to managing routes, avoiding issues that might arise from simple file addition. The addition of a new page is handled correctly, showing best practices in routing within Next.js.