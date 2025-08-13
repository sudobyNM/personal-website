# Content Security Policy (CSP) Implementation

## What is CSP?
Content Security Policy is a security standard that helps prevent cross-site scripting (XSS) attacks by controlling which resources can be loaded and executed on your website.

## Our CSP Configuration

```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests
```

## Directive Breakdown

### `default-src 'self'`
- **Purpose**: Default fallback for all resource types
- **Value**: Only allow resources from the same origin
- **Security**: Prevents loading of external resources by default

### `script-src 'self' 'unsafe-inline' 'unsafe-eval'`
- **Purpose**: Controls JavaScript execution
- **Values**:
  - `'self'`: Allow scripts from same origin
  - `'unsafe-inline'`: Allow inline scripts (needed for Tailwind CSS)
  - `'unsafe-eval'`: Allow eval() functions (needed for some frameworks)
- **Security**: Restricts script execution to trusted sources

### `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`
- **Purpose**: Controls CSS loading
- **Values**:
  - `'self'`: Allow styles from same origin
  - `'unsafe-inline'`: Allow inline styles (needed for Tailwind CSS)
  - `https://fonts.googleapis.com`: Allow Google Fonts CSS
- **Security**: Prevents malicious CSS injection

### `font-src 'self' https://fonts.gstatic.com`
- **Purpose**: Controls font loading
- **Values**:
  - `'self'`: Allow fonts from same origin
  - `https://fonts.gstatic.com`: Allow Google Fonts
- **Security**: Prevents loading of malicious fonts

### `img-src 'self' data: https:`
- **Purpose**: Controls image loading
- **Values**:
  - `'self'`: Allow images from same origin
  - `data:`: Allow data URLs (for inline images)
  - `https:`: Allow HTTPS images (for external images)
- **Security**: Prevents malicious image loading

### `connect-src 'self'`
- **Purpose**: Controls AJAX/fetch requests
- **Value**: Only allow connections to same origin
- **Security**: Prevents data exfiltration

### `frame-src 'none'`
- **Purpose**: Controls iframe embedding
- **Value**: Block all iframes
- **Security**: Prevents clickjacking attacks

### `object-src 'none'`
- **Purpose**: Controls plugin content (Flash, Java, etc.)
- **Value**: Block all plugins
- **Security**: Prevents malicious plugin execution

### `base-uri 'self'`
- **Purpose**: Controls base URL for relative URLs
- **Value**: Only allow same origin
- **Security**: Prevents base tag hijacking

### `form-action 'self'`
- **Purpose**: Controls form submission destinations
- **Value**: Only allow submission to same origin
- **Security**: Prevents form data theft

### `upgrade-insecure-requests`
- **Purpose**: Automatically upgrade HTTP to HTTPS
- **Security**: Ensures secure connections

## Implementation Methods

### 1. HTTP Headers (Production - Netlify)
- Applied via `netlify.toml` configuration
- Enforced at the server level
- More secure than meta tags

### 2. Meta Tags (Development)
- Applied via `<meta>` tags in HTML
- Useful for development and testing
- Less secure than HTTP headers

## Testing Your CSP

### Browser Developer Tools
1. Open Developer Tools (F12)
2. Go to Console tab
3. Look for CSP violation warnings
4. Fix any violations by updating the policy

### Online CSP Validators
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
- [CSP Scanner](https://cspscanner.com/)

### Lighthouse Testing
- Run Lighthouse audit
- Check Security section
- Should show "Content Security Policy" as passing

## Common Violations and Fixes

### Inline Styles
```html
<!-- This might be blocked -->
<div style="color: red;">Content</div>

<!-- Solution: Use classes instead -->
<div class="text-red-500">Content</div>
```

### External Scripts
```html
<!-- This will be blocked -->
<script src="https://external-site.com/script.js"></script>

<!-- Solution: Add to script-src or use local copy -->
```

### External Images
```html
<!-- This might be blocked -->
<img src="https://external-site.com/image.jpg">

<!-- Solution: Use HTTPS URLs or local copies -->
```

## Security Benefits

1. **XSS Prevention**: Blocks malicious script injection
2. **Clickjacking Protection**: Prevents iframe-based attacks
3. **Data Exfiltration Prevention**: Controls network requests
4. **Resource Integrity**: Ensures only trusted resources load
5. **Modern Security Standard**: Meets current web security best practices

## Monitoring

- Monitor browser console for CSP violations
- Use reporting endpoints (optional) to track violations
- Regularly review and update the policy as needed
