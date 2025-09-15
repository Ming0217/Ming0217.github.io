# Project Structure

## Root Level Files
- `_config.yml` - Main Jekyll configuration
- `Gemfile` - Ruby dependencies
- `index.html` - Homepage with home layout
- `404.html` - Custom 404 error page
- `robots.txt` - Search engine crawler instructions
- `CNAME` - Custom domain configuration

## Content Directories

### `_posts/`
Blog posts with naming convention: `YYYY-MM-DD-title.md`
- Required frontmatter: layout, title, date, excerpt, tags
- Optional: feature (header image), comments (boolean)
- Content focuses on book reflections and personal insights

### `_data/`
- `navigation.yml` - Site navigation menu items
- `skills.yml` - Skills data for radar chart visualization

### `_includes/`
Reusable template components:
- `head.html` - HTML head section
- `nav.html` - Navigation component
- `scripts.html` - JavaScript includes
- `analytics.html` - Google Analytics tracking
- `radar_chart.html` - Skills visualization
- `social-links.html` - Social media links

### `_layouts/`
Page templates (inherited from Moon theme)

### `_sass/`
Sass stylesheets:
- `variables.scss` - Global variables
- `mixins.scss` - Reusable mixins
- `elements.scss` - Base element styles
- `typography.scss` - Font and text styles
- `nav.scss` - Navigation styles
- `site.scss` - Main site styles
- `vendor/` - Third-party styles

## Static Assets

### `assets/`
- `css/main.scss` - Main stylesheet entry point
- `img/` - Images including logo, background, favicons
- `js/` - JavaScript libraries and custom scripts
- `fonts/` - Web fonts (FiraSans, FontAwesome)

## Generated Content
- `_site/` - Jekyll build output (excluded from version control)
- `.sass-cache/` - Sass compilation cache

## Page Collections
- `posts/index.md` - Blog post listing page
- `projects/index.md` - Project showcase page
- `about/` - About page directory
- `tags/index.html` - Tag-based content organization

## Conventions
- Posts use `post` layout with book reflection focus
- All content pages include reading time estimates
- Images hosted externally (imgur) for feature images
- Tags categorize content by topic (book reflection, learning, etc.)
- Comments enabled via Giscus on most posts