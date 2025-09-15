# Technology Stack

## Framework & Platform
- **Jekyll 3.6.3** - Static site generator
- **GitHub Pages** - Hosting platform
- **Moon Theme** - Remote Jekyll theme by TaylanTatli

## Build System
- **Ruby/Bundler** - Dependency management via Gemfile
- **Sass** - CSS preprocessing with compressed output
- **Kramdown** - Markdown processor with syntax highlighting via Rouge

## Key Dependencies
- `jekyll-sitemap` - XML sitemap generation
- `jekyll-gist` - GitHub Gist embedding
- `jekyll-mentions` - GitHub user mentions
- `jekyll-feed` - RSS/Atom feed generation
- `jekyll-remote-theme` - Remote theme support

## Frontend Libraries
- **jQuery 1.12.0** - JavaScript framework
- **FontAwesome** - Icon library
- **Magnific Popup** - Lightbox/modal library
- **Chart.js** - For skills radar chart visualization
- **MathJax** - Mathematical notation rendering

## Analytics & Comments
- **Google Analytics** (G-3J2BFF01TF)
- **Giscus** - GitHub-based commenting system

## Common Commands
```bash
# Install dependencies
bundle install

# Serve locally with live reload
bundle exec jekyll serve

# Build for production
bundle exec jekyll build

# Clean build artifacts
bundle exec jekyll clean
```

## Development Notes
- Site uses compressed Sass compilation
- Reading time calculation: 200 words per minute
- MathJax enabled for mathematical content
- Auto-generated IDs for headings